'use client';

import { useEffect, useRef, useState } from 'react';
import { Gauge, Smartphone, Monitor, MapPin, Bot } from 'lucide-react';

type Device = 'mobile' | 'desktop';

interface Metrics {
  perf: number;
  a11y: number;
  bp: number;
  seo: number;
  lcp: number; // seconds
}

const TARGETS: Record<Device, Metrics> = {
  mobile: { perf: 99, a11y: 100, bp: 100, seo: 100, lcp: 1.1 },
  desktop: { perf: 100, a11y: 100, bp: 100, seo: 100, lcp: 0.6 }
};

const ANIM_DURATION = 1400; // ms
const SWITCH_INTERVAL = 4200; // ms — auto toggle mobile ↔ desktop
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export function PSIShowcase() {
  const [device, setDevice] = useState<Device>('mobile');
  // Start with the target values so SSR/hydration render the real numbers
  // (no CLS, no empty state if JS fails). Animation replays from 0 after mount.
  const [values, setValues] = useState<Metrics>(TARGETS.mobile);
  const [hydrated, setHydrated] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const switchTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reducedMotionRef = useRef(false);

  // After mount: detect reduced motion + kick off first animation
  useEffect(() => {
    if (typeof window === 'undefined') return;
    reducedMotionRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reducedMotionRef.current) {
      // Reset to 0 so the count-up is visible
      setValues({ perf: 0, a11y: 0, bp: 0, seo: 0, lcp: 2.5 });
    }
    setHydrated(true);
  }, []);

  // Count-up animation for current device (runs whenever device changes, after hydration)
  useEffect(() => {
    if (!hydrated || reducedMotionRef.current) return;
    const target = TARGETS[device];
    const start = Date.now();

    const step = () => {
      const elapsed = Date.now() - start;
      const t = Math.min(1, elapsed / ANIM_DURATION);
      const e = easeOutCubic(t);
      setValues({
        perf: Math.round(target.perf * e),
        a11y: Math.round(target.a11y * e),
        bp: Math.round(target.bp * e),
        seo: Math.round(target.seo * e),
        lcp: +(target.lcp + (2.5 - target.lcp) * (1 - e)).toFixed(1)
      });
      if (t >= 1) {
        clearInterval(intervalId);
        setValues(target);
      }
    };
    const intervalId = setInterval(step, 40); // 25fps — smooth + tab-hidden safe
    step(); // first frame immediately
    return () => clearInterval(intervalId);
  }, [device, hydrated]);

  // Auto-toggle mobile ↔ desktop
  useEffect(() => {
    if (!hydrated || reducedMotionRef.current) return;
    switchTimerRef.current = setTimeout(() => {
      setDevice((d) => (d === 'mobile' ? 'desktop' : 'mobile'));
    }, SWITCH_INTERVAL);
    return () => {
      if (switchTimerRef.current) clearTimeout(switchTimerRef.current);
    };
  }, [device, hydrated]);

  const scoreColor = (v: number) =>
    v >= 90 ? 'text-white' : v >= 50 ? 'text-amber-300' : 'text-rose-300';

  return (
    <div ref={rootRef} className="relative mx-auto aspect-[4/3] w-full max-w-sm sm:max-w-md lg:aspect-square">
      {/* Glow */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 rounded-full opacity-40 blur-3xl sm:opacity-50"
        style={{
          background: 'radial-gradient(circle, var(--color-brand-400), transparent 65%)'
        }}
      />

      {/* Main card */}
      <div
        aria-label="PageSpeed Insights score demo"
        className="absolute inset-0 -translate-y-1 rotate-[-2deg] overflow-hidden rounded-2xl bg-gradient-to-br from-[color:var(--color-brand-700)] via-[color:var(--color-brand-800)] to-[color:var(--color-ink-900)] p-5 shadow-2xl shadow-[color:var(--color-brand-900)]/30 sm:-translate-y-2 sm:rotate-[-3deg] sm:rounded-3xl sm:p-6"
      >
        <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(at_top_right,white,transparent_45%)] opacity-15 sm:rounded-3xl" />

        {/* Scanning shimmer line while animating */}
        {hydrated && !reducedMotionRef.current && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-2xl sm:rounded-3xl"
            style={{
              background:
                'linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.12) 50%, transparent 100%)',
              backgroundSize: '100% 40%',
              backgroundRepeat: 'no-repeat',
              animation: 'psi-scan 1.4s ease-out'
            }}
            key={device}
          />
        )}

        <div className="relative flex h-full flex-col justify-between text-white">
          {/* Top bar — label + device tabs */}
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-widest backdrop-blur sm:px-3 sm:text-[10px]">
              <Gauge className="h-3 w-3" aria-hidden />
              PageSpeed
            </div>
            <div
              role="tablist"
              aria-label="Device"
              className="inline-flex items-center rounded-full bg-white/10 p-0.5 text-[9px] font-semibold backdrop-blur sm:text-[10px]"
            >
              <button
                type="button"
                role="tab"
                aria-selected={device === 'mobile'}
                onClick={() => setDevice('mobile')}
                className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 transition-colors sm:px-2.5 sm:py-1 ${
                  device === 'mobile' ? 'bg-white text-[color:var(--color-brand-800)]' : 'text-white/70'
                }`}
              >
                <Smartphone className="h-3 w-3" aria-hidden />
                <span>Mobile</span>
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={device === 'desktop'}
                onClick={() => setDevice('desktop')}
                className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 transition-colors sm:px-2.5 sm:py-1 ${
                  device === 'desktop' ? 'bg-white text-[color:var(--color-brand-800)]' : 'text-white/70'
                }`}
              >
                <Monitor className="h-3 w-3" aria-hidden />
                <span>Desktop</span>
              </button>
            </div>
          </div>

          {/* Main score + metric grid */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-end gap-2 tabular-nums">
              <div
                className={`text-[4rem] font-extrabold leading-none tracking-tight sm:text-[5.5rem] ${scoreColor(
                  values.perf
                )}`}
              >
                {values.perf}
              </div>
              <div className="pb-2 text-xs font-medium opacity-70 sm:pb-3 sm:text-sm">/ 100</div>
            </div>

            <div className="grid grid-cols-4 gap-1.5 tabular-nums sm:grid-cols-2 sm:gap-2.5">
              {[
                { v: values.a11y, l: 'A11y' },
                { v: values.bp, l: 'BP' },
                { v: values.seo, l: 'SEO' },
                { v: `${values.lcp.toFixed(1)}s`, l: 'LCP' }
              ].map((m) => (
                <div
                  key={m.l}
                  className="rounded-lg border border-white/15 bg-white/10 p-1.5 backdrop-blur sm:rounded-xl sm:p-2.5"
                >
                  <div className="text-sm font-bold leading-none sm:text-xl">{m.v}</div>
                  <div className="mt-0.5 text-[9px] uppercase tracking-wider opacity-70 sm:mt-1 sm:text-[10px]">
                    {m.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating chip — Map Pack */}
      <div
        className="absolute -end-2 top-4 rotate-[6deg] rounded-2xl border border-white bg-white p-2.5 shadow-xl shadow-[color:var(--color-ink-900)]/10 sm:-end-4 sm:top-8 sm:p-3"
        style={{ animation: 'float-slow 6s ease-in-out infinite' }}
      >
        <div className="flex items-center gap-2">
          <div className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-[color:var(--color-brand-500)]/15 text-[color:var(--color-brand-700)] sm:h-8 sm:w-8">
            <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden />
          </div>
          <div>
            <div className="text-[9px] font-semibold uppercase tracking-wider text-[color:var(--color-ink-900)]/55 sm:text-[10px]">
              Map Pack
            </div>
            <div className="text-sm font-bold text-[color:var(--color-ink-900)] sm:text-base">
              #1 Rank
            </div>
          </div>
        </div>
      </div>

      {/* Floating chip — GEO / AI Search */}
      <div
        className="absolute -start-3 bottom-6 -rotate-[5deg] rounded-2xl border border-white bg-white p-2.5 shadow-xl shadow-[color:var(--color-ink-900)]/10 sm:-start-6 sm:bottom-12 sm:p-3"
        style={{ animation: 'float-slow 7s ease-in-out 1s infinite' }}
      >
        <div className="flex items-center gap-2">
          <div className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-[color:var(--color-accent-500)]/20 to-[color:var(--color-brand-500)]/20 text-[color:var(--color-accent-600)] sm:h-8 sm:w-8">
            <Bot className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden />
          </div>
          <div>
            <div className="text-[9px] font-semibold uppercase tracking-wider text-[color:var(--color-ink-900)]/55 sm:text-[10px]">
              AI Search
            </div>
            <div className="text-sm font-bold text-[color:var(--color-ink-900)] sm:text-base">
              GEO Ready
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
