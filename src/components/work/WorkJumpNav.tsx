import React, { useEffect, useRef } from 'react';

export const workNavItems = [
  { step: '01', label: 'B2B Funnel', id: 'project-seo-content-ads' },
  { step: '02', label: 'Dream Christmas', id: 'project-dream-christmas-delivery' },
  { step: '03', label: 'AI & dữ liệu', id: 'project-ai-data' },
  { step: '04', label: 'V-Creator', id: 'project-v-creator' },
  { step: '05', label: 'Automation', id: 'project-make-automation' },
  { step: '06–08', label: 'More Work', id: 'more-selected-work' },
];

export const FlagshipJumpNav = ({ activeId }: { activeId: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const root = document.documentElement;
    let hidden = false;
    let lastY = window.scrollY;
    const headerH = () => parseFloat(getComputedStyle(root).getPropertyValue('--header-height')) || 65;
    const apply = () => {
      const h = Math.ceil(el.getBoundingClientRect().height);
      root.style.setProperty('--work-nav-height', `${h}px`);
      // Offset for the sticky case switcher inside "More Work": follows the nav while visible, header only while hidden.
      root.style.setProperty('--compact-top', `${headerH() + (hidden ? 0 : h)}px`);
      root.dataset.workNav = hidden ? 'hidden' : 'visible';
    };
    const onScroll = () => {
      const y = window.scrollY;
      const inWork = el.parentElement ? el.parentElement.getBoundingClientRect().bottom > 0 : true;
      const delta = y - lastY;
      if (Math.abs(delta) > 6) {
        const next = inWork && delta > 0 && y > 480; // scrolling down inside the Work section -> hide
        if (next !== hidden) { hidden = next; apply(); }
        lastY = y;
      }
    };
    apply();
    const ro = new ResizeObserver(apply);
    ro.observe(el, { box: 'border-box' });
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { ro.disconnect(); window.removeEventListener('scroll', onScroll); delete root.dataset.workNav; };
  }, []);
  return (
  <div ref={ref} data-sticky-layer="work-nav" style={{ top: 'var(--header-height, 65px)' }} className="relative sticky z-[50] isolate transform-gpu -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-2.5 bg-[#F8FAFC] border-y border-[#DCE4EE] shadow-[0_12px_28px_-26px_rgba(15,23,42,.45)]">
    <div className="max-w-7xl mx-auto flex items-center gap-1.5 sm:gap-2 overflow-x-auto horizontal-scroll pr-16 md:pr-0" aria-label="Điều hướng nhanh giữa các project">
      {workNavItems.map(({ step, label, id }) => {
        const isActive = activeId === id;
        return (
          <a key={id} href={`#${id}`} aria-current={isActive ? 'location' : undefined}
            className={`shrink-0 min-h-[40px] inline-flex items-center gap-2 px-3 sm:px-3.5 py-2 rounded-full border text-xs transition-all ${isActive ? 'border-[#163B65]/25 bg-white text-[#163B65] shadow-sm' : 'border-transparent text-[#475569] hover:border-[#CBD5E1] hover:bg-white hover:text-[#163B65]'}`}>
            <span className={`font-mono-code text-[10px] ${isActive ? 'text-[#0F766E]' : 'text-[#526179]'}`}>{step}</span>
            <span className="font-medium">{label}</span>
          </a>
        );
      })}
    </div>
    <div className="md:hidden pointer-events-none absolute right-0 top-0 bottom-0 flex items-center pl-7 pr-2 bg-gradient-to-r from-transparent via-[#F8FAFC]/94 to-[#F8FAFC]"><span className="w-7 h-7 rounded-full border border-[#DCE4EE] bg-white/95 flex items-center justify-center text-sm font-mono-code font-bold text-[#475569] shadow-xs" aria-hidden="true">↔</span></div>
  </div>
  );
};
