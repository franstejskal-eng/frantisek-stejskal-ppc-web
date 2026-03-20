"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useTranslations } from "next-intl";

// ─── Live scrolling chart on canvas ───────────────────────────────────────────
function LiveChart({
  type,
  className,
}: {
  type: "bad" | "good";
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const W = canvas.width;
    const H = canvas.height;
    const data: number[] = [];
    let frame = 0;
    let animId: number;

    // Pre-fill
    for (let i = 0; i < W; i++) {
      if (type === "bad") {
        data.push(H * 0.45 + (Math.random() - 0.5) * H * 0.5);
      } else {
        data.push(H * 0.85 - (i / W) * H * 0.65);
      }
    }

    const draw = () => {
      frame++;

      // Generate next data point
      if (type === "bad") {
        const last = data[data.length - 1];
        const spike = Math.random() < 0.04 ? (Math.random() - 0.5) * 60 : 0;
        const jitter = (Math.random() - 0.52) * 22;
        const drift = Math.sin(frame * 0.04) * 6;
        data.push(Math.max(H * 0.08, Math.min(H * 0.92, last + jitter + drift + spike)));
      } else {
        const cycle = H * 0.2 - Math.sin(frame * 0.025) * H * 0.18;
        const target = H * 0.55 - cycle;
        const smooth = data[data.length - 1] * 0.92 + target * 0.08;
        data.push(Math.max(H * 0.05, Math.min(H * 0.92, smooth)));
      }
      data.shift();

      // Draw
      ctx.clearRect(0, 0, W, H);

      // Grid lines
      ctx.strokeStyle = "rgba(255,255,255,0.04)";
      ctx.lineWidth = 1;
      for (let y = 0; y < H; y += H / 4) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(W, y);
        ctx.stroke();
      }

      // Area fill
      const grad = ctx.createLinearGradient(0, 0, 0, H);
      if (type === "bad") {
        grad.addColorStop(0, "rgba(230, 90, 60, 0.25)");
        grad.addColorStop(1, "rgba(230, 90, 60, 0)");
      } else {
        grad.addColorStop(0, "rgba(50, 200, 130, 0.25)");
        grad.addColorStop(1, "rgba(50, 200, 130, 0)");
      }

      ctx.beginPath();
      ctx.moveTo(0, data[0]);
      for (let i = 1; i < data.length; i++) {
        const cpx = i - 0.5;
        ctx.quadraticCurveTo(cpx, data[i - 1], i, data[i]);
      }
      ctx.lineTo(W, H);
      ctx.lineTo(0, H);
      ctx.closePath();
      ctx.fillStyle = grad;
      ctx.fill();

      // Line
      ctx.beginPath();
      ctx.moveTo(0, data[0]);
      for (let i = 1; i < data.length; i++) {
        const cpx = i - 0.5;
        ctx.quadraticCurveTo(cpx, data[i - 1], i, data[i]);
      }
      ctx.strokeStyle = type === "bad" ? "rgb(230,110,80)" : "rgb(60,210,140)";
      ctx.lineWidth = 2;
      ctx.lineJoin = "round";
      ctx.stroke();

      // Dot at latest point
      const lx = W - 1;
      const ly = data[data.length - 1];
      ctx.beginPath();
      ctx.arc(lx, ly, 3, 0, Math.PI * 2);
      ctx.fillStyle = type === "bad" ? "rgb(230,110,80)" : "rgb(60,210,140)";
      ctx.fill();

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animId);
  }, [type]);

  return (
    <canvas
      ref={canvasRef}
      width={600}
      height={110}
      className={className}
      style={{ width: "100%", height: "110px" }}
    />
  );
}

// ─── Metric row ───────────────────────────────────────────────────────────────
function Metric({
  label,
  value,
  trend,
}: {
  label: string;
  value: string;
  trend: "up" | "down";
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-[rgba(255,255,255,0.45)] text-xs">{label}</span>
      <span
        className={`font-bold text-sm tabular-nums ${
          trend === "up" ? "text-[rgb(60,210,140)]" : "text-[rgb(230,110,80)]"
        }`}
      >
        {value}
      </span>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function ComparisonSection() {
  const t = useTranslations("comparison");
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderPosRef = useRef(50); // 0–100
  const [sliderPos, setSliderPos] = useState(50);
  const isDragging = useRef(false);
  const autoRef = useRef<number | null>(null);
  const frameRef = useRef(0);

  // Auto-sweep using sine wave – pauses while dragging
  useEffect(() => {
    const tick = () => {
      if (!isDragging.current) {
        frameRef.current += 0.6;
        const pos = 50 + 38 * Math.sin((frameRef.current * Math.PI) / 180);
        sliderPosRef.current = pos;
        setSliderPos(pos);
      }
      autoRef.current = requestAnimationFrame(tick);
    };
    autoRef.current = requestAnimationFrame(tick);
    return () => {
      if (autoRef.current) cancelAnimationFrame(autoRef.current);
    };
  }, []);

  // Pointer events for manual drag
  const getPos = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return 50;
    return Math.max(5, Math.min(95, ((clientX - rect.left) / rect.width) * 100));
  }, []);

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      isDragging.current = true;
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
      const pos = getPos(e.clientX);
      sliderPosRef.current = pos;
      setSliderPos(pos);
    },
    [getPos]
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging.current) return;
      const pos = getPos(e.clientX);
      sliderPosRef.current = pos;
      setSliderPos(pos);
    },
    [getPos]
  );

  const onPointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  return (
    <section className="py-24 bg-[oklch(0.08_0_0)]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
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

        {/* Slider container */}
        <div
          ref={containerRef}
          className="relative overflow-hidden rounded-2xl border border-[oklch(0.20_0_0)] select-none cursor-col-resize"
          style={{ touchAction: "none" }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
        >
          {/* ── BAD side (full width, always visible) ── */}
          <div className="bg-[oklch(0.11_0.02_30)]">
            {/* Top bar */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-[rgba(255,255,255,0.06)]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[rgb(230,110,80)] animate-pulse" />
                <span className="text-white/70 font-medium text-sm">{t("badTitle")}</span>
              </div>
              {/* Fake window dots */}
              <div className="flex gap-1.5">
                {["bg-red-500","bg-yellow-500","bg-green-500"].map((c) => (
                  <span key={c} className={`w-2.5 h-2.5 rounded-full opacity-40 ${c}`} />
                ))}
              </div>
            </div>
            {/* Chart */}
            <div className="px-4 pt-3">
              <LiveChart type="bad" />
            </div>
            {/* Metrics */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 px-5 py-4 border-t border-[rgba(255,255,255,0.05)]">
              <Metric label={t("budget")} value="50 000 Kč" trend="down" />
              <Metric label={t("conversions")} value="3" trend="down" />
              <Metric label={t("cpa")} value="16 667 Kč" trend="down" />
              <Metric label={t("roi")} value="−38 %" trend="down" />
            </div>
          </div>

          {/* ── GOOD side (clipped overlay) ── */}
          <div
            className="absolute inset-0 bg-[oklch(0.12_0.03_260)]"
            style={{ clipPath: `polygon(${sliderPos}% 0, 100% 0, 100% 100%, ${sliderPos}% 100%)` }}
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-[rgba(255,255,255,0.06)]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[rgb(60,210,140)] animate-pulse" />
                <span className="text-white/90 font-semibold text-sm">{t("goodTitle")}</span>
              </div>
              <div className="flex gap-1.5">
                {["bg-red-500","bg-yellow-500","bg-green-500"].map((c) => (
                  <span key={c} className={`w-2.5 h-2.5 rounded-full opacity-60 ${c}`} />
                ))}
              </div>
            </div>
            {/* Chart */}
            <div className="px-4 pt-3">
              <LiveChart type="good" />
            </div>
            {/* Metrics */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 px-5 py-4 border-t border-[rgba(255,255,255,0.05)]">
              <Metric label={t("budget")} value="50 000 Kč" trend="up" />
              <Metric label={t("conversions")} value="47" trend="up" />
              <Metric label={t("cpa")} value="1 064 Kč" trend="up" />
              <Metric label={t("roi")} value="+340 %" trend="up" />
            </div>
          </div>

          {/* ── Divider line + handle ── */}
          <div
            className="absolute top-0 bottom-0 z-20 flex items-center"
            style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
          >
            <div className="w-px h-full bg-white/30" />
            {/* Handle */}
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-2xl flex items-center justify-center cursor-col-resize">
              <svg className="w-5 h-5 text-black/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-4 3 4 3M16 9l4 3-4 3" />
              </svg>
            </div>
          </div>

          {/* ── Side labels ── */}
          <div
            className="absolute top-14 z-10 pointer-events-none"
            style={{ left: `calc(${sliderPos}% - 16px)`, transform: "translateX(-100%)" }}
          >
            <span className="bg-[rgb(230,110,80)] text-white text-[10px] font-bold px-2 py-0.5 rounded opacity-80">
              PŘED
            </span>
          </div>
          <div
            className="absolute top-14 z-10 pointer-events-none"
            style={{ left: `calc(${sliderPos}% + 16px)` }}
          >
            <span className="bg-[rgb(60,210,140)] text-black text-[10px] font-bold px-2 py-0.5 rounded opacity-80">
              PO
            </span>
          </div>
        </div>

        {/* Hint */}
        <p className="text-center text-[oklch(0.40_0_0)] text-xs mt-4 flex items-center justify-center gap-2">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-4 3 4 3M16 9l4 3-4 3" />
          </svg>
          Táhněte pro porovnání · Ilustrativní příklad
        </p>
      </div>
    </section>
  );
}
