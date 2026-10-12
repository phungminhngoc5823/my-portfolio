import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { scrollToAnchor } from '../../utils/scrollToAnchor';
import { imgSize } from '../../data/imageSizes';
import { ArrowDownRight, Maximize2, Quote, Sparkles } from 'lucide-react';
import { ExtendedProject } from '../../data/portfolioData';
import { ProjectContent } from '../../data/projectContent';
import { LabModuleId } from '../../types';

const labLinkForProject = (project: ExtendedProject): LabModuleId | null => project.marketingLabModule || null;

const companyTone = (company: string) =>
  company.includes('Vincom')
    ? 'text-[#163B65] border-[#163B65]/25 bg-[#E8F0F8]/45'
    : 'text-[#0F766E] border-[#0D9488]/25 bg-[#E6F4F1]';

export const MetricStrip = ({ project }: { project: ExtendedProject }) => {
  const metrics = project.evidence?.metrics || [];
  if (!metrics.length) return null;
  const sixUp = metrics.length === 6; // 3 cột × 2 hàng, viền tính theo vị trí ô
  const gridClass = sixUp ? 'sm:grid-cols-3' : metrics.length >= 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-3';
  const dividers = (index: number) => {
    if (!sixUp) return index < metrics.length - 1 ? 'border-b sm:border-b-0 sm:border-r' : '';
    if (index === metrics.length - 1) return '';
    return `${index < 3 ? 'border-b' : 'border-b sm:border-b-0'}${(index + 1) % 3 !== 0 ? ' sm:border-r' : ''}`;
  };
  return (
    <div className={`grid grid-cols-1 ${gridClass} border-y border-[#DCE4EE] bg-white/65 overflow-hidden`}>
      {metrics.map((metric, index) => (
        <div
          key={`${metric.label}-${index}`}
          className={`p-5 min-h-[76px] flex flex-col justify-center border-[#DCE4EE] ${dividers(index)}`}
        >
          <div className="text-[10px] font-mono-code uppercase tracking-[0.14em] text-[#526179]">{metric.label}</div>
          <div className="mt-1 font-tech-display text-lg font-semibold text-[#0F172A]">{metric.value}</div>
        </div>
      ))}
    </div>
  );
};



export const Attribution = ({ content, text }: { content: ProjectContent; text?: string }) => {
  const note = text || content.scopeNote;
  if (!note) return null;
  return (
    <div className="flex gap-3 rounded-xl border border-[#0D9488]/20 bg-[#ECFDF5]/55 p-4 text-xs text-[#475569] leading-relaxed">
      <Quote className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
      <div>
        <div className="text-[10px] font-mono-code uppercase tracking-[0.12em] text-[#0D9488] font-semibold mb-1">Ghi chú phạm vi</div>
        <span>{note}</span>
      </div>
    </div>
  );
};

export const ProjectMeta = ({ project, index }: { project: ExtendedProject; index: number }) => (
  <div className="flex flex-wrap gap-2 items-center">
    <span className="text-[10px] font-mono-code tracking-[0.16em] text-[#94A3B8]">{String(index + 1).padStart(2, '0')}</span>
    <span className={`px-2.5 py-1 rounded-full border text-[10px] font-mono-code font-semibold uppercase tracking-wide ${companyTone(project.company)}`}>
      {project.company}
    </span>
    <span className="text-[10px] font-mono-code text-[#94A3B8]">{project.dateRange}</span>
  </div>
);

export const LabCta = ({ project, onOpenLab }: { project: ExtendedProject; onOpenLab: (tab: LabModuleId) => void }) => {
  const tab = labLinkForProject(project);
  if (!tab) return null;
  return (
    <button
      type="button"
      onClick={() => onOpenLab(tab)}
      className="inline-flex items-center gap-2 px-4 min-h-[44px] py-2.5 rounded-xl bg-white border border-[#DCE4EE] hover:border-[#0D9488]/50 hover:shadow-sm text-xs font-semibold text-[#163B65] transition-all group"
    >
      <Sparkles className="w-4 h-4 text-[#0D9488]" />
      <span>Trải nghiệm trong Marketing Lab</span>
      <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
    </button>
  );
};

export const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="text-[11px] font-mono-code uppercase tracking-[0.14em] text-[#526179] font-bold mb-2">{children}</div>
);

export type ArtifactFrame = 'default' | 'ui' | 'slide' | 'poster' | 'email' | 'wide' | 'browser';
export type EvidenceVariant = 'raw' | 'browser' | 'dashboard' | 'poster' | 'email' | 'video' | 'thumbnail';

const frameToEvidenceVariant: Record<ArtifactFrame, EvidenceVariant> = {
  default: 'raw',
  ui: 'dashboard',
  slide: 'raw',
  poster: 'poster',
  email: 'email',
  wide: 'raw',
  browser: 'browser',
};

export const evidenceVariantForSource = (src: string): EvidenceVariant => {
  const name = src.toLowerCase();
  if (/tiktok-/.test(name)) return 'video';
  if (/(landing|ldp|seo-article|website-|roi-calculator)/.test(name)) return 'browser';
  if (/(tracking|analysis|workflow|process|report|scenario|dashboard|assessment-form|guideline-overview|solution-mapping)/.test(name)) return 'dashboard';
  if (/(ad-|linkedin-|social-|zalo-|cover)/.test(name)) return 'poster';
  return 'raw';
};

const evidenceShellClass: Record<EvidenceVariant, string> = {
  raw: 'rounded-2xl border border-[#DCE4EE] bg-white shadow-[0_16px_42px_-32px_rgba(15,23,42,.28)]',
  browser: 'rounded-2xl border border-[#CBD5E1] bg-white shadow-[0_18px_46px_-32px_rgba(15,23,42,.30)]',
  dashboard: 'rounded-2xl border border-[#DCE4EE] bg-[#F1F5F9] p-3 sm:p-4 shadow-[0_16px_42px_-34px_rgba(15,23,42,.24)]',
  poster: 'rounded-2xl border border-[#DCE4EE] bg-[#F1F5F9] p-3 sm:p-4 shadow-[0_16px_42px_-34px_rgba(15,23,42,.24)]',
  email: 'rounded-2xl border border-[#DCE4EE] bg-[#F8FAFC] p-3 sm:p-4 shadow-[0_16px_42px_-34px_rgba(15,23,42,.22)]',
  video: 'rounded-2xl border border-[#DCE4EE] bg-[#ECF2F8] p-2.5 sm:p-3 shadow-[0_16px_42px_-34px_rgba(15,23,42,.24)]',
  thumbnail: 'rounded-xl border border-[#DCE4EE] bg-[#F8FAFC] p-2.5 sm:p-3 shadow-[0_10px_30px_-26px_rgba(15,23,42,.18)]',
};

export const EvidenceImage = ({
  src,
  alt,
  variant = 'raw',
  className = '',
  imageClassName = '',
}: {
  src: string;
  alt: string;
  variant?: EvidenceVariant;
  className?: string;
  imageClassName?: string;
}) => {
  const browser = variant === 'browser';
  const fixedBox = variant === 'thumbnail' || variant === 'video';
  // Sharpness guard: never paint an image much wider than its real pixels on the visitor's screen
  // (capped to ~1 image pixel per device pixel), so screenshots stay crisp instead of being upscaled.
  const [sharpCap, setSharpCap] = useState<number | null>(null);
  const mediaClass = fixedBox ? 'w-full h-full object-contain object-center' : 'w-full h-auto max-h-[760px] object-contain object-center mx-auto';
  return (
    <div className={`overflow-hidden ${evidenceShellClass[variant]} ${className}`}>
      {browser && (
        <div className="h-8 sm:h-9 border-b border-[#DCE4EE] bg-[#F8FAFC] px-3 flex items-center gap-1.5" aria-hidden="true">
          <span className="w-2 h-2 rounded-full bg-[#CBD5E1]" />
          <span className="w-2 h-2 rounded-full bg-[#CBD5E1]" />
          <span className="w-2 h-2 rounded-full bg-[#CBD5E1]" />
          <span className="ml-2 h-2 w-20 rounded-full bg-[#E2E8F0]" />
        </div>
      )}
      <div className={browser ? 'bg-white p-2 sm:p-2.5' : ''}>
        <img
          src={src}
          alt={alt}
          {...imgSize(src)}
          className={`${mediaClass} ${imageClassName}`}
          style={!fixedBox && sharpCap ? { maxWidth: sharpCap } : undefined}
          onLoad={(e) => {
            if (fixedBox) return;
            const dpr = Math.min(2, Math.max(1, window.devicePixelRatio || 1));
            setSharpCap(Math.round((e.currentTarget.naturalWidth / dpr) * 1.05));
          }}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export const ArtifactFigure = ({
  src,
  title,
  subtitle,
  onZoom,
  padded = false,
  frame = 'default',
  variant,
  className = '',
  mobileZoomHint = false,
}: {
  src: string;
  title: string;
  subtitle?: string;
  onZoom: (src: string, title: string) => void;
  padded?: boolean;
  frame?: ArtifactFrame;
  variant?: EvidenceVariant;
  className?: string;
  mobileZoomHint?: boolean;
}) => {
  const effectiveFrame: ArtifactFrame = padded && frame === 'default' ? 'wide' : frame;
  const effectiveVariant = variant || (effectiveFrame === 'default' ? evidenceVariantForSource(src) : frameToEvidenceVariant[effectiveFrame]);
  const imageClass = effectiveVariant === 'poster' ? 'max-h-[640px] drop-shadow-[0_10px_18px_rgba(31,27,23,.08)]' : '';

  return (
    <figure className={`space-y-2.5 ${className}`}>
      <button
        type="button"
        onClick={() => onZoom(src, title)}
        className="relative w-full text-left group"
        aria-label={'Phóng to ' + title}
      >
        <EvidenceImage src={src} alt={title} variant={effectiveVariant} imageClassName={`${imageClass} group-hover:scale-[1.005] transition-transform duration-300`} />
        <span className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/96 border border-[#DCE4EE] text-[#163B65] flex items-center justify-center transition-opacity shadow-sm opacity-100 sm:opacity-0 sm:group-hover:opacity-100">
          <Maximize2 className="w-4 h-4" />
        </span>
        {mobileZoomHint && <span className="sm:hidden absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-[#0F172A]/88 px-3 py-1.5 text-[10px] font-mono-code font-semibold text-white shadow-md"><Maximize2 className="w-3.5 h-3.5" />Chạm để phóng to</span>}
      </button>
      <figcaption className="px-1 leading-relaxed max-w-[68ch]">
        <div className="text-[12px] sm:text-[13px] font-semibold text-[#334155]">{title}</div>
        {subtitle && <div className="mt-1 text-[11px] sm:text-xs text-[#526179]">{subtitle}</div>}
      </figcaption>
    </figure>
  );
};

export const CompactEvidenceFigure = ({
  src,
  title,
  subtitle,
  onZoom,
  frame = 'ui',
  variant,
  dense = false,
  label = 'Xem sản phẩm',
  figureClassName = '',
}: {
  src: string;
  title: string;
  subtitle?: string;
  onZoom: (src: string, title: string) => void;
  frame?: ArtifactFrame;
  variant?: EvidenceVariant;
  dense?: boolean;
  label?: string;
  figureClassName?: string;
}) => (
  <details open className="group border-t border-[#DCE4EE]">
    <summary className={`cursor-pointer list-none ${dense ? 'min-h-9 py-2' : 'min-h-[40px] py-2.5'} flex items-center justify-between gap-3 text-xs font-semibold text-[#163B65]`}>
      <span>{label}</span>
      <span className="text-[10px] font-mono-code uppercase tracking-[0.12em] text-[#526179] group-open:hidden">Mở xem</span>
      <span className="text-[10px] font-mono-code uppercase tracking-[0.12em] text-[#526179] hidden group-open:inline">Thu gọn</span>
    </summary>
    <div className={`${dense ? 'pt-1.5' : 'pt-2'} pb-1`}>
      <ArtifactFigure src={src} title={title} subtitle={subtitle} onZoom={onZoom} frame={frame} variant={variant} className={figureClassName} mobileZoomHint />
    </div>
  </details>
);

export const ContentParagraphs = ({ paragraphs }: { paragraphs: string[] }) => (
  <div className="space-y-3">
    {paragraphs.map((paragraph, index) => (
      <p key={index} className="text-base text-[#475569] leading-relaxed text-pretty">{paragraph}</p>
    ))}
  </div>
);

export const ContentContribution = ({ content, bullets }: { content: ProjectContent; bullets?: string[] }) => (
  <ul className="space-y-2.5">
    {(bullets || content.contributionBullets).map((item, index) => (
      <li key={index} className="flex gap-3 text-base text-[#334155] leading-relaxed">
        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#0D9488] shrink-0" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

// Arrow / Home / End navigation for role="tablist" widgets (WAI-ARIA tabs pattern).
export const onTabKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
  if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(e.key)) return;
  const tabs = Array.from(e.currentTarget.querySelectorAll<HTMLElement>('[role="tab"]'));
  if (!tabs.length) return;
  const i = Math.max(0, tabs.indexOf(document.activeElement as HTMLElement));
  const next = e.key === 'Home' ? 0 : e.key === 'End' ? tabs.length - 1 : e.key === 'ArrowRight' ? (i + 1) % tabs.length : (i - 1 + tabs.length) % tabs.length;
  e.preventDefault();
  tabs[next].focus();
  tabs[next].click();
};

// Fixed-frame, click-to-zoom screenshot tile: every tile in a row has the same height, nothing is cropped when fit="contain".
export const FixedShot = ({ src, title, subtitle, onZoom, frame = 'h-[340px]', fit = 'contain', caption }: { src: string; title: string; subtitle?: string; onZoom: (src: string, title: string) => void; frame?: string; fit?: 'contain' | 'cover'; caption?: string | null }) => (
  <figure className="flex flex-col gap-2.5">
    <button type="button" onClick={() => onZoom(src, title)} aria-label={'Phóng to ' + title} className={`block w-full ${frame} overflow-hidden rounded-2xl border border-[#CBD5E1] bg-[#F1F5F9] shadow-[0_18px_46px_-32px_rgba(15,23,42,.30)] cursor-zoom-in`}>
      <img src={src} alt={title} {...imgSize(src)} loading="lazy" className={`block w-full h-full ${fit === 'contain' ? 'object-contain' : 'object-cover object-top'}`} />
    </button>
    {caption !== null && <figcaption className="text-xs text-[#526179] leading-snug"><span className="font-semibold text-[#334155]">{caption ?? title}</span>{caption === undefined && subtitle ? <span className="block mt-0.5">{subtitle}</span> : null}</figcaption>}
  </figure>
);

// Compact one-line scope / attribution note (replaces the heavy "Phạm vi & đóng góp" row).
export const ScopeNote = ({ content }: { content: ProjectContent }) => {
  const text = [...(content.closing || []), ...(content.scopeNote ? [content.scopeNote] : [])].join(' ');
  if (!text) return null;
  return <p className="text-xs text-[#526179] leading-relaxed text-pretty"><span className="font-semibold text-[#475569]">{content.closingTitle || 'Phạm vi & đóng góp'}: </span>{text}</p>;
};

export const ContentClosing = ({ content }: { content: ProjectContent }) => (!content.closing?.length && !content.scopeNote) ? null : (
  <div className="pt-6 border-t border-[#CBD5E1] grid lg:grid-cols-12 gap-4 lg:gap-8 items-start">
    <div className="lg:col-span-3">
      <div className="text-[11px] font-mono-code uppercase tracking-[0.14em] text-[#163B65] font-semibold">{content.closingTitle}</div>
    </div>
    <div className="lg:col-span-9 space-y-3">
      {content.closing.map((paragraph, index) => <p key={index} className="text-base text-[#475569] leading-relaxed text-pretty">{paragraph}</p>)}
      {content.scopeNote && (
        <div className="flex gap-3 pt-3 text-xs text-[#526179] leading-relaxed">
          <Quote className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
          <div><div className="mb-1 text-[10px] font-mono-code uppercase tracking-[0.12em] text-[#0D9488] font-semibold">Phạm vi & attribution</div>{content.scopeNote}</div>
        </div>
      )}
    </div>
  </div>
);


export const useCaseDetails = (articleId: string) => {
  const [open, setOpen] = React.useState(false);
  const toggle = () => {
    if (open) {
      setOpen(false);
      requestAnimationFrame(() => scrollToAnchor(`#${articleId}`));
    } else {
      setOpen(true);
    }
  };
  return { open, toggle, detailsId: `${articleId}-details` };
};

export const CaseToggle = ({ open, onToggle, controls, openLabel = 'Xem chi tiết case', closeLabel = 'Thu gọn chi tiết' }: { open: boolean; onToggle: () => void; controls: string; openLabel?: string; closeLabel?: string }) => (
  <div className="flex justify-center pt-1">
    <button type="button" onClick={onToggle} aria-expanded={open} aria-controls={controls} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#163B65]/25 bg-white text-sm font-semibold text-[#163B65] hover:bg-[#163B65] hover:text-white transition-colors">
      <span>{open ? closeLabel : openLabel}</span>
      <ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
    </button>
  </div>
);


export const CaseCover = ({ src, alt, position = 'top', className = '' }: { src: string; alt: string; position?: string; className?: string }) => {
  if (!src) return null;
  return (
    <div className={`relative overflow-hidden rounded-2xl border border-[#DCE4EE] bg-white shadow-[0_18px_40px_-24px_rgba(22,59,101,0.45)] ${className}`}>
      <img src={src} alt={alt} {...imgSize(src)} loading="lazy" className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition: position }} />
    </div>
  );
};
