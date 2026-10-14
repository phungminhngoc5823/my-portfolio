import React from 'react';
import { imgSize } from '../../data/imageSizes';
import { ChevronDown } from 'lucide-react';
import { ExtendedProject } from '../../data/portfolioData';
import { getProjectContent } from '../../data/projectContent';
import { LabModuleId } from '../../types';
import { TikTokAnchor } from './FlagshipCases';
import { SupportingPanel } from './SupportingProjectRow';
import { onTabKeyDown } from './WorkShared';

/**
 * Compact tier of "More selected work": two larger cards for the cases that carry
 * their own numbers (TikTok, Automation) and four smaller ones. A card opens its
 * full case inline, directly under the grid, one at a time.
 */
type Cover = { url: string; position?: string };

const COVERS: Record<string, Cover> = {
  'vincom-tiktok-production': { url: './images/tiktok-cover-duo.jpg' },
  'make-automation': { url: './images/marketing-lab/workflow-content-generation.jpg' },
  'seasonal-campaign-operations': { url: './images/seasonal-xmas-guideline-cover.jpg', position: 'center' },
};

const LARGE = new Set<string>();

const SHORT: Record<string, string> = {
  'vincom-tiktok-production': 'TikTok',
  'seasonal-campaign-operations': 'Seasonal',
  'area-green-leadership': 'AREA',
};

// Cards per row for the current breakpoint, so an opened case can sit directly under its own row.
const useRowPattern = (): number[] => {
  const get = () => {
    if (typeof window === 'undefined') return [3];
    if (window.matchMedia('(min-width: 1024px)').matches) return [3];
    if (window.matchMedia('(min-width: 640px)').matches) return [2, 1];
    return [1, 1, 1];
  };
  const [pattern, setPattern] = React.useState<number[]>(get);
  React.useEffect(() => {
    const update = () => setPattern(get());
    const queries = [window.matchMedia('(min-width: 1024px)'), window.matchMedia('(min-width: 640px)')];
    queries.forEach((q) => q.addEventListener('change', update));
    return () => queries.forEach((q) => q.removeEventListener('change', update));
  }, []);
  return pattern;
};

export const CompactCases = ({
  projects,
  onOpenLab,
  onZoom,
}: {
  projects: ExtendedProject[];
  onOpenLab: (tab: LabModuleId) => void;
  onZoom: (src: string, title: string) => void;
}) => {
  const [openId, setOpenId] = React.useState<string | null>(null);
  const ids = React.useMemo(() => projects.map((project) => project.id), [projects]);
  const pattern = useRowPattern();

  const rows = React.useMemo(() => {
    const out: ExtendedProject[][] = [];
    let cursor = 0;
    pattern.forEach((size) => { if (cursor < projects.length) { out.push(projects.slice(cursor, cursor + size)); cursor += size; } });
    if (cursor < projects.length) out.push(projects.slice(cursor));
    return out;
  }, [pattern, projects]);

  const scrollToPanel = React.useCallback((id: string) => {
    window.setTimeout(() => document.getElementById(`compact-panel-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
  }, []);
  const scrollToCard = React.useCallback((id: string) => {
    window.setTimeout(() => document.querySelector(`[data-compact-id="${id}"]`)?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 80);
  }, []);

  const openCase = React.useCallback((id: string) => { setOpenId(id); scrollToPanel(id); }, [scrollToPanel]);
  const closeCase = React.useCallback((id: string) => { setOpenId(null); scrollToCard(id); }, [scrollToCard]);

  // Deep links such as #project-make-automation (Capability chips, jump nav) open the matching card.
  React.useEffect(() => {
    const idFromHash = (hash: string) => {
      const match = hash.replace(/^#/, '').match(/^project-(.+)$/);
      return match && ids.includes(match[1]) ? match[1] : null;
    };
    const onClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement | null)?.closest?.('a[href^="#project-"]') as HTMLAnchorElement | null;
      const id = link ? idFromHash(link.getAttribute('href') || '') : null;
      if (id) { event.preventDefault(); openCase(id); }
    };
    const onHash = () => { const id = idFromHash(window.location.hash); if (id) openCase(id); };
    document.addEventListener('click', onClick);
    window.addEventListener('hashchange', onHash);
    onHash();
    return () => { document.removeEventListener('click', onClick); window.removeEventListener('hashchange', onHash); };
  }, [ids, openCase]);

  const renderCard = (project: ExtendedProject, index: number) => {
    const content = getProjectContent(project.id);
    const cover = COVERS[project.id];
    const image = cover?.url || project.galleryImages?.[0]?.url || project.cardImage;
    const large = LARGE.has(project.id);
    const open = openId === project.id;
    return (
      <button
        key={project.id}
        type="button"
        data-compact-id={project.id}
        aria-expanded={open}
        aria-controls={`compact-panel-${project.id}`}
        onClick={() => (open ? closeCase(project.id) : openCase(project.id))}
        className={`group text-left flex flex-col rounded-2xl border bg-white overflow-hidden transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_50px_-34px_rgba(22,59,101,.5)] scroll-mt-40 lg:col-span-4 ${open ? 'border-[#163B65] shadow-[0_22px_50px_-34px_rgba(22,59,101,.5)]' : 'border-[#DCE4EE]'}`}
      >
        <div className="aspect-[16/10] bg-[#E8EEF5] overflow-hidden">
          {image && <img src={image} alt="" loading="lazy" {...imgSize(image)} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500" style={cover?.position ? { objectPosition: cover.position } : undefined} />}
        </div>
        <div className="flex flex-1 flex-col p-5 sm:p-6">
 <div className="flex flex-wrap items-center gap-x-2 text-[11px] text-[#526179]">
            <span className="text-[#0D9488]">{String(index + 6).padStart(2, '0')}</span>
            <span className="font-semibold uppercase tracking-wide text-[#163B65]">{project.company}</span>
            <span>{project.dateRange}</span>
          </div>
          <h4 className={`mt-2 font-serif-title text-[#0F172A] leading-[1.15] ${large ? 'text-2xl sm:text-[26px]' : 'text-xl'}`}>{content.displayTitle}</h4>
          <p className="mt-2 text-sm text-[#475569] leading-relaxed text-pretty">{content.cardSummary}</p>
          <p className="mt-3 text-[11px] text-[#526179] leading-snug">{content.categoryLine}</p>
          <div className="mt-auto pt-4">
            <div className={`border-t border-[#E3E9F1] pt-3 flex ${large ? 'items-end justify-between gap-3' : 'flex-col items-start gap-2.5'}`}>
              <div className="min-w-0">
 <div className="text-[10px] uppercase tracking-[0.12em] text-[#526179]">{content.evidenceLabel}</div>
                <div className="mt-0.5 text-[13px] font-semibold text-[#163B65]">{content.evidenceValue}</div>
              </div>
              <span className="shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold text-[#163B65]">
                {open ? 'Thu gọn' : 'Xem case'} <ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
              </span>
            </div>
          </div>
        </div>
      </button>
    );
  };

  const renderPanel = (project: ExtendedProject) => {
    const open = openId === project.id;
    const at = ids.indexOf(project.id);
    const prev = ids[(at - 1 + ids.length) % ids.length];
    const next = ids[(at + 1) % ids.length];
    return (
      <div key={`panel-${project.id}`} id={`compact-panel-${project.id}`} data-compact-panel={project.id} hidden={!open} className="col-span-full rounded-[28px] border border-[#DCE4EE] bg-white/90 scroll-mt-32">
        {/* Case switcher stays pinned while reading, so the next case is one tap away. */}
        <div style={{ top: 'var(--compact-top, 118px)' }} className="sticky z-40 rounded-t-[28px] border-b border-[#DCE4EE] bg-white/95 backdrop-blur px-4 sm:px-8 lg:px-10 py-3 flex items-center gap-2">
          <div className="flex-1 min-w-0 flex items-center gap-2 overflow-x-auto horizontal-scroll" role="tablist" aria-label="Chuyển case" onKeyDown={onTabKeyDown}>
            {ids.map((id) => (
              <button key={id} type="button" role="tab" aria-selected={id === project.id} aria-controls={`compact-panel-${id}`} tabIndex={id === project.id ? 0 : -1} onClick={() => openCase(id)}
                className={`shrink-0 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors ${id === project.id ? 'border-[#163B65] bg-[#163B65] text-white' : 'border-[#DCE4EE] bg-white text-[#163B65] hover:border-[#163B65]'}`}>
                {SHORT[id] || id}
              </button>
            ))}
          </div>
          <button type="button" onClick={() => closeCase(project.id)} className="shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold text-[#163B65] hover:text-[#0D9488]">
            Thu gọn <ChevronDown className="w-4 h-4 rotate-180" />
          </button>
        </div>
        <div className="px-4 sm:px-8 lg:px-10 pb-6">
          {project.id === 'vincom-tiktok-production' && <TikTokAnchor project={project} onZoom={onZoom} />}
          {project.id !== 'vincom-tiktok-production' && (
            <div id={`project-${project.id}`} className="pt-8 sm:pt-10"><SupportingPanel project={project} onZoom={onZoom} /></div>
          )}
          <div className="mt-2 pt-5 border-t border-[#DCE4EE] flex flex-wrap items-center justify-between gap-3">
            <button type="button" onClick={() => openCase(prev)} className="text-xs font-semibold text-[#163B65] hover:text-[#0D9488]">← {SHORT[prev]}</button>
            <button type="button" onClick={() => closeCase(project.id)} className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#163B65] hover:text-[#0D9488]">Thu gọn <ChevronDown className="w-4 h-4 rotate-180" /></button>
            <button type="button" onClick={() => openCase(next)} className="text-xs font-semibold text-[#163B65] hover:text-[#0D9488]">Case tiếp theo: {SHORT[next]} →</button>
          </div>
        </div>
      </div>
    );
  };

  let cardIndex = 0;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 lg:gap-6">
      {rows.map((row, rowIndex) => (
        <React.Fragment key={`row-${rowIndex}`}>
          {row.map((project) => renderCard(project, cardIndex++))}
          {/* Panels for this row's cards sit right under the row; only the open one is visible, all stay in the DOM. */}
          {row.map((project) => renderPanel(project))}
        </React.Fragment>
      ))}
    </div>
  );
};
