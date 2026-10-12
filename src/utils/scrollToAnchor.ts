let cancelActive: (() => void) | null = null;
const CANCEL_EVENTS: (keyof WindowEventMap)[] = ['wheel', 'touchstart', 'keydown', 'mousedown'];

/**
 * Smooth-scrolls to an anchor, then waits for the scroll to settle and corrects the position (max 3 times)
 * if layout shifted meanwhile (lazy images, Lab iframe). Cancels when the visitor scrolls or presses a key,
 * cancels any previous run, and respects prefers-reduced-motion.
 */
export const scrollToAnchor = (href: string, firstDelay = 0) => {
  const id = href.startsWith('#') ? href.slice(1) : href;
  const find = () => document.getElementById(id);
  if (!find()) return;
  cancelActive?.();
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let cancelled = false;
  let timer = 0;
  const cancel = () => {
    cancelled = true;
    window.clearTimeout(timer);
    CANCEL_EVENTS.forEach((e) => window.removeEventListener(e, cancel));
    if (cancelActive === cancel) cancelActive = null;
  };
  cancelActive = cancel;

  const start = () => {
    if (cancelled) return;
    const target = find();
    if (!target) { cancel(); return; }
    CANCEL_EVENTS.forEach((e) => window.addEventListener(e, cancel, { passive: true }));
    target.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
    let attempts = 0;
    let last = window.scrollY;
    let stable = 0;
    const startedAt = performance.now();
    const tick = () => {
      if (cancelled) return;
      const el = find();
      if (!el) { cancel(); return; }
      const y = window.scrollY;
      stable = Math.abs(y - last) < 1 ? stable + 1 : 0;
      last = y;
      if (stable >= 6) {
        const margin = parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
        const delta = el.getBoundingClientRect().top - margin;
        const atBottom = window.innerHeight + y >= document.documentElement.scrollHeight - 2;
        if (Math.abs(delta) > 4 && attempts < 3 && !(atBottom && delta > 0)) {
          attempts += 1;
          stable = 0;
          el.scrollIntoView({ behavior: 'auto', block: 'start' });
        } else { cancel(); return; }
      }
      if (performance.now() - startedAt > 4000) { cancel(); return; }
      timer = requestAnimationFrame(tick) as unknown as number;
    };
    timer = requestAnimationFrame(tick) as unknown as number;
  };
  if (firstDelay) timer = window.setTimeout(start, firstDelay); else start();
};
