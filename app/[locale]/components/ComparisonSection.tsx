"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

function useCountUp(target: number, duration: number, active: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setValue(target);
        clearInterval(timer);
      } else {
        setValue(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return value;
}

// Bad chart – chaotic, going down (SVG path in 300×120 viewBox)
const BAD_PATH = "M0,30 L25,55 L50,20 L75,75 L100,45 L125,85 L150,60 L175,95 L200,70 L225,105 L260,90 L300,112";

// Good chart – smooth upward curve
const GOOD_PATH = "M0,112 C40,108 80,95 120,78 C160,60 200,35 240,18 L300,5";

function AnimatedChart({ path, color, active }: { path: string; color: string; active: boolean }) {
  const pathRef = useRef<SVGPathElement>(null);
  const [length, setLength] = useState(0);

  useEffect(() => {
    if (pathRef.current) setLength(pathRef.current.getTotalLength());
  }, []);

  return (
    <svg viewBox="0 0 300 120" className="w-full h-full" preserveAspectRatio="none">
      {/* Grid lines */}
      {[30, 60, 90].map((y) => (
        <line key={y} x1="0" y1={y} x2="300" y2={y} stroke="currentColor" strokeOpacity="0.06" strokeWidth="1" />
      ))}
      {/* Area fill */}
      <defs>
        <linearGradient id={`grad-${color}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.20" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
        <clipPath id={`clip-${color}`}>
          <rect
            x="0" y="0" width="300" height="120"
            style={{
              transform: active ? "scaleX(1)" : "scaleX(0)",
              transformOrigin: "left",
              transition: `transform ${active ? "2s" : "0s"} ease-in-out`,
            }}
          />
        </clipPath>
      </defs>
      <path
        d={`${path} L300,120 L0,120 Z`}
        fill={`url(#grad-${color})`}
        clipPath={`url(#clip-${color})`}
      />
      {/* Line */}
      <path
        ref={pathRef}
        d={path}
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={
          length > 0
            ? {
                strokeDasharray: length,
                strokeDashoffset: active ? 0 : length,
                transition: active ? "stroke-dashoffset 2s ease-in-out" : "none",
              }
            : {}
        }
      />
    </svg>
  );
}

function AlertBadge({ text, delay, active }: { text: string; delay: number; active: boolean }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!active) { setVisible(false); return; }
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [active, delay]);

  return (
    <div
      className={`flex items-center gap-1.5 bg-[oklch(0.55_0.20_30/0.12)] border border-[oklch(0.55_0.20_30/0.35)] text-[oklch(0.70_0.18_30)] text-xs font-medium px-2.5 py-1.5 rounded-full transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      }`}
    >
      <span className="w-1.5 h-1.5 bg-[oklch(0.65_0.20_30)] rounded-full animate-pulse" />
      {text}
    </div>
  );
}

function GoodBadge({ text, delay, active }: { text: string; delay: number; active: boolean }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!active) { setVisible(false); return; }
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [active, delay]);

  return (
    <div
      className={`flex items-center gap-1.5 bg-[oklch(0.55_0.22_160/0.12)] border border-[oklch(0.55_0.22_160/0.35)] text-[oklch(0.70_0.18_160)] text-xs font-medium px-2.5 py-1.5 rounded-full transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      }`}
    >
      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
      {text}
    </div>
  );
}

function MetricRow({
  label, value, unit = "", isNegative = false, active, delay,
}: {
  label: string; value: number; unit?: string; isNegative?: boolean; active: boolean; delay: number;
}) {
  const [started, setStarted] = useState(false);
  useEffect(() => {
    if (!active) { setStarted(false); return; }
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [active, delay]);

  const count = useCountUp(value, 1800, started);

  return (
    <div className="flex items-center justify-between py-2.5 border-b border-[oklch(0.18_0_0)] last:border-0">
      <span className="text-[oklch(0.55_0_0)] text-xs">{label}</span>
      <span className={`font-bold text-sm tabular-nums ${isNegative ? "text-[oklch(0.65_0.20_30)]" : "text-white"}`}>
        {unit === "%" && isNegative && count > 0 ? "-" : unit === "%" && !isNegative && count > 0 ? "+" : ""}
        {count.toLocaleString("cs-CZ")}
        {unit}
      </span>
    </div>
  );
}

export default function ComparisonSection() {
  const t = useTranslations("comparison");
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-[oklch(0.10_0_0)]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
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

        <div className="grid lg:grid-cols-2 gap-6">
          {/* ── BAD panel ── */}
          <div className="relative bg-[oklch(0.12_0_0)] border border-[oklch(0.55_0.20_30/0.20)] rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-[oklch(0.18_0_0)]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[oklch(0.65_0.20_30)]" />
                <span className="text-white font-semibold text-sm">{t("badTitle")}</span>
              </div>
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[oklch(0.30_0_0)]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[oklch(0.30_0_0)]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[oklch(0.30_0_0)]" />
              </div>
            </div>

            {/* Chart */}
            <div className="relative h-36 px-5 pt-4">
              <AnimatedChart path={BAD_PATH} color="oklch(0.65 0.20 30)" active={active} />
              {/* Floating alerts */}
              <div className="absolute top-3 right-5 flex flex-col gap-2 items-end">
                <AlertBadge text={t("alert1")} delay={800} active={active} />
                <AlertBadge text={t("alert2")} delay={1400} active={active} />
                <AlertBadge text={t("alert3")} delay={2000} active={active} />
              </div>
            </div>

            {/* Metrics */}
            <div className="px-5 pb-5 pt-3">
              <MetricRow label={t("budget")} value={50000} unit=" Kč" active={active} delay={200} />
              <MetricRow label={t("conversions")} value={3} active={active} delay={400} />
              <MetricRow label={t("cpa")} value={16667} unit=" Kč" isNegative active={active} delay={600} />
              <MetricRow label={t("roi")} value={38} unit="%" isNegative active={active} delay={800} />
            </div>

            {/* Red overlay tint */}
            <div className="absolute inset-0 bg-[oklch(0.55_0.20_30/0.03)] pointer-events-none" />
          </div>

          {/* ── GOOD panel ── */}
          <div className="relative bg-[oklch(0.12_0_0)] border border-[oklch(0.55_0.22_260/0.30)] rounded-2xl overflow-hidden">
            {/* Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,oklch(0.55_0.22_260/0.06),transparent_60%)] pointer-events-none" />

            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-[oklch(0.18_0_0)]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[oklch(0.65_0.22_260)] animate-pulse" />
                <span className="text-white font-semibold text-sm">{t("goodTitle")}</span>
              </div>
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[oklch(0.30_0_0)]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[oklch(0.30_0_0)]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[oklch(0.30_0_0)]" />
              </div>
            </div>

            {/* Chart */}
            <div className="relative h-36 px-5 pt-4">
              <AnimatedChart path={GOOD_PATH} color="oklch(0.65 0.22 160)" active={active} />
              {/* Floating badges */}
              <div className="absolute top-3 right-5 flex flex-col gap-2 items-end">
                <GoodBadge text={t("badge1")} delay={600} active={active} />
                <GoodBadge text={t("badge2")} delay={1200} active={active} />
                <GoodBadge text={t("badge3")} delay={1800} active={active} />
              </div>
            </div>

            {/* Metrics */}
            <div className="px-5 pb-5 pt-3">
              <MetricRow label={t("budget")} value={50000} unit=" Kč" active={active} delay={200} />
              <MetricRow label={t("conversions")} value={47} active={active} delay={400} />
              <MetricRow label={t("cpa")} value={1064} unit=" Kč" active={active} delay={600} />
              <MetricRow label={t("roi")} value={340} unit="%" active={active} delay={800} />
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <p className="text-center text-[oklch(0.38_0_0)] text-xs mt-6">
          * Ilustrativní příklad. Výsledky se liší podle oboru a rozpočtu.
        </p>
      </div>
    </section>
  );
}
