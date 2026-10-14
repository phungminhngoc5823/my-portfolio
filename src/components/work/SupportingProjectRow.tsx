import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { ExtendedProject } from '../../data/portfolioData';
import { getProjectContent } from '../../data/projectContent';
import { ContentContribution, ContentParagraphs, EvidenceImage, FixedShot, MetricStrip, ScopeNote, SectionLabel } from './WorkShared';

export const SupportingProjectRow = ({ project, index, open, onToggle, onZoom }: {
  project: ExtendedProject;
  index: number;
  open: boolean;
  onToggle: () => void;
  onZoom: (src: string, title: string) => void;
}) => {
  const image = project.galleryImages?.[0]?.url || project.cardImage;
  const content = getProjectContent(project.id);
    return (
    <motion.article data-support-id={project.id} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      className={`border-b border-[#DCE4EE] last:border-b-0 transition-colors ${open ? 'bg-white' : 'bg-transparent'}`}>
      <button type="button" data-support-toggle={project.id} onClick={onToggle} aria-expanded={open}
        className="w-full text-left group grid grid-cols-[104px_minmax(0,1fr)] md:grid-cols-12 gap-4 md:gap-7 items-start md:items-center py-5 sm:py-6 px-1 sm:px-2">
        <div className="md:col-span-2">
          {image ? <EvidenceImage src={image} alt={content.displayTitle} variant="thumbnail" className="aspect-[4/3]" /> : <div className="aspect-[4/3] rounded-xl border border-dashed border-[#CBD5E1] bg-[#F8FAFC]" />}
        </div>
        <div className="md:col-span-7 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-[10px] font-mono-code text-[#0D9488]">{String(index + 6).padStart(2, '0')}</span>
 <span className="text-[10px] font-semibold uppercase tracking-wide text-[#163B65]">{project.company}</span>
            <span className="text-[10px] font-mono-code text-[#94A3B8]">{project.dateRange}</span>
          </div>
          <h3 className="font-serif-title text-xl sm:text-2xl text-[#0F172A] group-hover:text-[#163B65] transition-colors">{content.displayTitle}</h3>
          <p className="text-sm text-[#475569] leading-relaxed mt-2 line-clamp-2">{content.cardSummary}</p>
          <p className="text-[11px] text-[#526179] mt-3">{content.categoryLine}</p>
        </div>
        <div className="col-span-2 md:col-span-3 md:text-right flex md:block items-end justify-between gap-4 pt-1 md:pt-0">
 <div className="md:mb-3"><div className="text-[9px] uppercase tracking-[0.14em] text-[#526179] font-semibold">{content.evidenceLabel}</div><div className="text-xs sm:text-sm font-semibold text-[#163B65] mt-1">{content.evidenceValue}</div></div>
          <span className="shrink-0 inline-flex items-center gap-2 text-xs font-semibold text-[#163B65]">
            {open ? 'Thu gọn' : 'Xem case'} <ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
          </span>
        </div>
      </button>


        <motion.div data-support-panel={project.id} className={open ? 'overflow-hidden' : 'hidden'}>
          <SupportingPanel project={project} onZoom={onZoom} />
        </motion.div>

    </motion.article>
  );
};

export const SupportingPanel = ({ project, onZoom }: { project: ExtendedProject; onZoom: (src: string, title: string) => void }) => {
  const content = getProjectContent(project.id);
  const hasRail = content.contributionBullets.length > 0 || (content.challenge?.length || 0) > 0 || (content.sections?.length || 0) > 0;
  const gallery = project.galleryImages || [];
  const frame = gallery.length <= 2 ? 'aspect-[16/9]' : 'h-[300px]';
  return (
    <div className="pb-10 sm:pb-12 px-1 sm:px-2">
            <div className="rounded-[24px] border border-[#DCE4EE] bg-[#F8FAFC] p-5 sm:p-7 md:p-9 space-y-8 shadow-[0_20px_60px_-48px_rgba(15,23,42,.38)]">
              <MetricStrip project={project} />
              <div className="grid lg:grid-cols-12 gap-7 lg:gap-10">
                <div className={hasRail ? 'lg:col-span-4' : 'lg:col-span-12'}>
                  <SectionLabel>Bối cảnh</SectionLabel>
                  <ContentParagraphs paragraphs={content.context} />
                  {project.externalUrl && <a href={project.externalUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[#163B65] hover:text-[#0D9488]">Mở bản live <ExternalLink className="w-3.5 h-3.5" /></a>}
                </div>
                {/* Right rail keeps contribution + challenge/sections in one flowing column so a short
                    bullet list here never leaves a tall blank gap beside the (often longer) Bối cảnh text. */}
                {hasRail && <div className="lg:col-span-8 lg:border-l lg:border-[#DCE4EE] lg:pl-8 space-y-7">
                  {content.contributionBullets.length > 0 && <div><SectionLabel>Phần tôi trực tiếp đóng góp</SectionLabel><ContentContribution content={content} /></div>}
                  {(content.challenge?.length > 0 || content.sections?.length > 0) && (
                    <div className="pt-6 border-t border-[#E2E8F0] space-y-4">
                      {content.challenge?.length > 0 && <div><SectionLabel>{content.challengeTitle}</SectionLabel><ContentParagraphs paragraphs={content.challenge} /></div>}
                      {content.sections?.length > 0 && <div className="grid sm:grid-cols-2 gap-3">
                        {content.sections.map((section, idx) => <div key={idx} className="rounded-2xl border border-[#DCE4EE] bg-white p-4 sm:p-5">
 {section.kicker && <div className="text-[9px] uppercase tracking-[0.14em] text-[#0D9488] mb-2">{section.kicker}</div>}
                          <h5 className="font-serif-title text-lg text-[#0F172A]">{section.title}</h5>
                          {section.paragraphs?.map((p,i)=><p key={i} className="text-xs text-[#475569] leading-relaxed mt-2">{p}</p>)}
                          {section.bullets && <ul className="mt-3 space-y-1.5">{section.bullets.map((b,i)=><li key={i} className="text-xs text-[#475569] flex gap-2"><span className="text-[#0D9488]">•</span><span>{b}</span></li>)}</ul>}
                          {section.flow && <div className="flex flex-wrap gap-2 mt-3">{section.flow.map((x,i)=><span key={i} className="px-2.5 py-1 rounded-full bg-[#EFF6FF] text-[#163B65] text-[10px] font-medium">{x}</span>)}</div>}
                        </div>)}
                      </div>}
                    </div>
                  )}
                </div>}
              </div>

              {(project.galleryImages?.length || 0) > 0 && <div>
 <div className="flex items-end justify-between gap-4 mb-4"><div><SectionLabel>Sản phẩm thực tế</SectionLabel><h5 className="font-serif-title text-2xl text-[#0F172A]">Tài liệu & sản phẩm</h5></div><span className="hidden sm:block text-[10px] text-[#94A3B8]">Bấm ảnh để phóng to</span></div>
                <div className={`grid gap-5 md:gap-6 items-start ${gallery.length <= 1 ? 'grid-cols-1' : gallery.length === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3'}`}>
                  {gallery.map((img) => <FixedShot key={img.url} src={img.url} title={img.title} subtitle={img.subtitle} onZoom={onZoom} frame={frame} />)}
                </div>
              </div>}
              <ScopeNote content={content} />
            </div>
          </div>
  );
};
