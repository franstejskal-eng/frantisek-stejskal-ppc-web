"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

// ─── Data ─────────────────────────────────────────────────────────────────────

const MONTHS = ["Led","Úno","Bře","Dub","Kvě","Čvn","Čvc","Srp","Zář","Říj","Lis","Pro"];
const BUDGET_PER_MONTH = 10_000; // Kč

// Monthly conversion value (Kč)
const BAD_VALUES  = [11500, 9800, 13200, 10500, 14800, 12000, 16500, 13000, 17800, 14500, 19500, 17000];
const GOOD_VALUES = [11500, 15500, 20500, 26500, 33000, 40000, 46500, 52500, 58000, 62500, 66500, 70000];

// CPA (Kč)
const BAD_CPA  = [2200, 2900, 1950, 3100, 2300, 3200, 2100, 3300, 2000, 3050, 2450, 2700];
const GOOD_CPA = [2200, 1900, 1600, 1350, 1150, 990, 870, 780, 710, 665, 630, 595];

const MAX_VALUE = 75_000;

// ─── Helpers ──────────────────────────────────────────────────────────────────

function lerp(a: number, b: number, t: number) { return a + (b - a) * t; }

function cumulative(arr: number[], months: number): number {
  let sum = 0;
  for (let i = 0; i < Math.min(Math.floor(months), arr.length); i++) sum += arr[i];
  const frac = months - Math.floor(months);
  if (frac > 0 && Math.floor(months) < arr.length) sum += arr[Math.floor(months)] * frac;
  return sum;
}

function valueAt(arr: number[], months: number): number {
  const i = Math.min(Math.floor(months), arr.length - 1);
  const j = Math.min(i + 1, arr.length - 1);
  const frac = months - Math.floor(months);
  return lerp(arr[i], arr[j], frac);
}

function fmt(n: number, decimals = 0) {
  return Math.round(n).toLocaleString("cs-CZ") + " Kč";
}

// ─── Canvas chart ─────────────────────────────────────────────────────────────

function drawChart(
  canvas: HTMLCanvasElement,
  values: number[],
  progress: number, // 0..1 → months 0..12
  color: string,
  fillColor: string,
) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const W = canvas.width;
  const H = canvas.height;
  const PL = 10, PR = 12, PT = 12, PB = 28;
  const cW = W - PL - PR;
  const cH = H - PT - PB;

  ctx.clearRect(0, 0, W, H);

  const months = progress * 12; // 0..12
  const xAt = (i: number) => PL + (i / 11) * cW;
  const yAt = (v: number) => PT + cH - (v / MAX_VALUE) * cH;

  // Horizontal grid + Y labels
  [0, 25000, 50000, 75000].forEach((v) => {
    const y = yAt(v);
    ctx.strokeStyle = "rgba(255,255,255,0.05)";
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(PL, y); ctx.lineTo(W - PR, y); ctx.stroke();
  });

  // Month labels on X axis
  ctx.fillStyle = "rgba(255,255,255,0.28)";
  ctx.font = "10px Inter, system-ui, sans-serif";
  ctx.textAlign = "center";
  MONTHS.forEach((m, i) => {
    const x = xAt(i);
    // Highlight months already passed
    if (i < Math.floor(months)) ctx.fillStyle = "rgba(255,255,255,0.50)";
    else ctx.fillStyle = "rgba(255,255,255,0.18)";
    ctx.fillText(m, x, H - 4);
  });

  if (months < 0.05) return;

  // Build point sequence up to `months`
  const pts: { x: number; y: number }[] = [];
  const fullMonths = Math.floor(months);
  for (let i = 0; i <= fullMonths && i < 12; i++) {
    pts.push({ x: xAt(i), y: yAt(values[i]) });
  }
  // Partial last segment
  if (months < 12 && fullMonths < 11) {
    const frac = months - fullMonths;
    const nextVal = lerp(values[fullMonths], values[Math.min(fullMonths + 1, 11)], frac);
    const nextX = lerp(xAt(fullMonths), xAt(fullMonths + 1), frac);
    pts.push({ x: nextX, y: yAt(nextVal) });
  }

  // Area fill
  const grad = ctx.createLinearGradient(0, PT, 0, PT + cH);
  grad.addColorStop(0, fillColor.replace(")", ", 0.30)").replace("rgb", "rgba"));
  grad.addColorStop(1, fillColor.replace(")", ", 0)").replace("rgb", "rgba"));

  ctx.beginPath();
  ctx.moveTo(pts[0].x, pts[0].y);
  for (let i = 1; i < pts.length; i++) {
    const mx = (pts[i - 1].x + pts[i].x) / 2;
    ctx.bezierCurveTo(mx, pts[i - 1].y, mx, pts[i].y, pts[i].x, pts[i].y);
  }
  ctx.lineTo(pts[pts.length - 1].x, PT + cH);
  ctx.lineTo(pts[0].x, PT + cH);
  ctx.closePath();
  ctx.fillStyle = grad;
  ctx.fill();

  // Line
  ctx.beginPath();
  ctx.moveTo(pts[0].x, pts[0].y);
  for (let i = 1; i < pts.length; i++) {
    const mx = (pts[i - 1].x + pts[i].x) / 2;
    ctx.bezierCurveTo(mx, pts[i - 1].y, mx, pts[i].y, pts[i].x, pts[i].y);
  }
  ctx.strokeStyle = color;
  ctx.lineWidth = 2.5;
  ctx.lineJoin = "round";
  ctx.stroke();

  // Dots at each passed month
  for (let i = 0; i < fullMonths && i < 12; i++) {
    ctx.beginPath();
    ctx.arc(xAt(i), yAt(values[i]), 3, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
  }

  // Pulsing dot at current position
  const cur = pts[pts.length - 1];
  ctx.beginPath();
  ctx.arc(cur.x, cur.y, 5, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.globalAlpha = 0.25;
  ctx.fill();
  ctx.globalAlpha = 1;
  ctx.beginPath();
  ctx.arc(cur.x, cur.y, 3, 0, Math.PI * 2);
  ctx.fillStyle = "#fff";
  ctx.fill();
}

// ─── Stat display ─────────────────────────────────────────────────────────────

function Stat({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-[rgba(255,255,255,0.38)] text-[10px] uppercase tracking-wider">{label}</span>
      <span className="text-white font-bold text-base tabular-nums leading-tight">{value}</span>
      {sub && <span className="text-[rgba(255,255,255,0.35)] text-[10px]">{sub}</span>}
    </div>
  );
}

// ─── Panel ────────────────────────────────────────────────────────────────────

function Panel({
  title, values, cpaValues, progress, color, fillColor, accent, t,
}: {
  title: string;
  values: number[];
  cpaValues: number[];
  progress: number;
  color: string;
  fillColor: string;
  accent: string;
  t: ReturnType<typeof useTranslations>;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const months = progress * 12;
  const curVal = valueAt(values, Math.min(months, 11.99));
  const cumVal = cumulative(values, months);
  const curCpa = valueAt(cpaValues, Math.min(months, 11.99));
  const spentSoFar = Math.min(months, 12) * BUDGET_PER_MONTH;
  const roi = spentSoFar > 0 ? ((cumVal - spentSoFar) / spentSoFar) * 100 : 0;
  const monthLabel = months >= 11.95 ? 12 : Math.min(Math.floor(months) + 1, 12);

  useEffect(() => {
    if (canvasRef.current) {
      drawChart(canvasRef.current, values, progress, color, fillColor);
    }
  });

  return (
    <div className={`flex flex-col bg-[oklch(0.12_0_0)] rounded-2xl overflow-hidden border ${accent}`}>
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-[rgba(255,255,255,0.06)]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: color }} />
          <span className="text-white font-semibold text-sm">{title}</span>
        </div>
        <span className="text-[rgba(255,255,255,0.30)] text-xs">
          {t("month")} {monthLabel}/12
        </span>
      </div>

      {/* Chart */}
      <div className="px-3 pt-3 pb-1">
        <canvas
          ref={canvasRef}
          width={540}
          height={160}
          style={{ width: "100%", height: "160px" }}
        />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 px-5 py-4 border-t border-[rgba(255,255,255,0.05)] mt-auto">
        <Stat
          label={t("monthlyValue")}
          value={fmt(curVal)}
        />
        <Stat
          label={t("cpa")}
          value={fmt(curCpa)}
        />
        <Stat
          label={t("totalValue")}
          value={fmt(cumVal)}
          sub={`${t("spend")}: ${fmt(spentSoFar)}`}
        />
        <Stat
          label="ROI"
          value={`${roi >= 0 ? "+" : ""}${Math.round(roi)} %`}
        />
      </div>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

const ANIM_DURATION = 11_000; // ms for 12 months
const PAUSE_DURATION = 2_500; // ms pause at end

export default function ComparisonSection() {
  const t = useTranslations("comparison");
  const [progress, setProgress] = useState(0);
  const startRef = useRef<number | null>(null);
  const phaseRef = useRef<"animating" | "paused">("animating");
  const pauseStartRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const tick = (now: number) => {
      if (phaseRef.current === "animating") {
        if (startRef.current === null) startRef.current = now;
        const elapsed = now - startRef.current;
        const p = Math.min(elapsed / ANIM_DURATION, 1);
        setProgress(p);
        if (p >= 1) {
          phaseRef.current = "paused";
          pauseStartRef.current = now;
        }
      } else {
        if (pauseStartRef.current !== null && now - pauseStartRef.current >= PAUSE_DURATION) {
          phaseRef.current = "animating";
          startRef.current = null;
          pauseStartRef.current = null;
          setProgress(0);
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, []);

  return (
    <section className="py-24 bg-[oklch(0.08_0_0)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[oklch(0.55_0.22_260)] text-sm font-medium uppercase tracking-widest mb-4">
            {t("sectionLabel")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
            {t("headline")}
          </h2>
          <p className="text-[oklch(0.60_0_0)] text-lg leading-relaxed">
            {t("description")}
          </p>
        </div>

        {/* Progress bar */}
        <div className="max-w-xs mx-auto mb-8">
          <div className="h-px bg-[oklch(0.18_0_0)] rounded-full overflow-hidden">
            <div
              className="h-full bg-[oklch(0.55_0.22_260)] rounded-full transition-none"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
          <div className="flex justify-between mt-1.5">
            <span className="text-[oklch(0.40_0_0)] text-[10px]">Led</span>
            <span className="text-[oklch(0.40_0_0)] text-[10px]">Pro</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Panel
            title={t("badTitle")}
            values={BAD_VALUES}
            cpaValues={BAD_CPA}
            progress={progress}
            color="rgb(220, 100, 70)"
            fillColor="rgb(220, 100, 70)"
            accent="border-[oklch(0.55_0.20_30/0.25)]"
            t={t}
          />
          <Panel
            title={t("goodTitle")}
            values={GOOD_VALUES}
            cpaValues={GOOD_CPA}
            progress={progress}
            color="rgb(60, 200, 130)"
            fillColor="rgb(60, 200, 130)"
            accent="border-[oklch(0.55_0.22_160/0.30)]"
            t={t}
          />
        </div>

        <p className="text-center text-[oklch(0.35_0_0)] text-xs mt-5">
          * {t("disclaimer")}
        </p>
      </div>
    </section>
  );
}
