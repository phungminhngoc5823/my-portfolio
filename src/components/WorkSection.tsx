import React from 'react';
import { motion } from 'motion/react';
import { Layers3, X } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { LabModuleId } from '../types';
import { trapFocus } from '../utils/focus';
import { AutomationAnchor, B2BAnchor, DreamAnchor, VCreatorAnchor } from './work/FlagshipCases';
import { AIDataAnchor } from './work/AIDataAnchor';
import { CompactCases } from './work/CompactCases';
import { FlagshipJumpNav, workNavItems } from './work/WorkJumpNav';

interface WorkSectionProps { onOpenLab: (tab: LabModuleId) => void; }
const projectById = (id: string) => PROJECTS.find((project) => project.id === id)!;
// Compact tier, in display order (numbers 04–09 follow this order).
const compactIds = ['vincom-tiktok-production','seasonal-campaign-operations','area-green-leadership'];
const compactProjects = compactIds.map(projectById).filter(Boolean);

// Plain-language glossary kept after the cases to keep the section introduction compact.
const GLOSSARY: [string, string][] = [
  ['ICP', 'hồ sơ khách hàng lý tưởng (Ideal Customer Profile).'],
  ['L1 / L2', 'hai lớp chấm điểm lead: L1 theo độ phù hợp hồ sơ doanh nghiệp, L2 bổ sung nhu cầu và tín hiệu từ Sales.'],
  ['ABM', 'Account-Based Marketing — marketing nhắm đến từng doanh nghiệp mục tiêu.'],
  ['CPL', 'chi phí trên mỗi lead (Cost Per Lead).'],
  ['RAG', 'cách AI truy xuất thông tin từ knowledge base rồi mới trả lời (Retrieval-Augmented Generation).'],
  ['TTTM / KPTM', 'trung tâm thương mại / khu phố thương mại.'],
  ['BQL', 'Ban quản lý trung tâm thương mại.'],
  ['PG', 'nhân viên gian hàng tại điểm bán.'],
  ['PTSP', 'đội Phát triển sản phẩm.'],
  ['Owned media', 'kênh truyền thông do thương hiệu sở hữu (fanpage, website, app).'],
];

export const WorkSection: React.FC<WorkSectionProps> = ({ onOpenLab }) => {
  const [lightbox, setLightbox] = React.useState<{ src: string; title: string } | null>(null);
  const [activeWorkId, setActiveWorkId] = React.useState('project-seo-content-ads');
  const lightboxRef = React.useRef<HTMLDivElement>(null);
  const lightboxCloseRef = React.useRef<HTMLButtonElement>(null);
  const lightboxTriggerRef = React.useRef<HTMLElement | null>(null);

  const openZoom = (src: string, title: string) => { lightboxTriggerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null; setLightbox({ src, title }); };
  const closeLightbox = React.useCallback(() => { setLightbox(null); requestAnimationFrame(() => lightboxTriggerRef.current?.focus()); }, []);

  React.useEffect(() => {
    // Active chip = the last section whose top has passed the reading line (robust for tall sections).
    let raf = 0;
    const update = () => {
      raf = 0;
      const line = window.innerHeight * 0.3;
      let current = workNavItems[0].id;
      for (const item of workNavItems) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= line) current = item.id;
      }
      setActiveWorkId(current);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { if (raf) cancelAnimationFrame(raf); window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, []);

  React.useEffect(() => {
    if (!lightbox) return;
    const previousOverflow = document.body.style.overflow; document.body.style.overflow='hidden';
    const frame=requestAnimationFrame(()=>lightboxCloseRef.current?.focus());
    const handleKeyDown=(event:KeyboardEvent)=>{ if(event.key==='Escape'){closeLightbox();return;} trapFocus(event, lightboxRef.current); };
    window.addEventListener('keydown',handleKeyDown); return ()=>{cancelAnimationFrame(frame);document.body.style.overflow=previousOverflow;window.removeEventListener('keydown',handleKeyDown)};
  }, [lightbox, closeLightbox]);

  return <section id="projects" className="bg-[#F8FAFC] border-b border-[#DCE4EE]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 md:pt-9">
      <motion.div initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="pb-4 sm:pb-5">
        <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-2">
          <h2 className="font-serif-title text-[30px] sm:text-4xl lg:text-5xl text-[#0F172A] leading-[1.08]">Selected Work</h2>
          <span className="text-[11px] sm:text-xs text-[#64748B]">Số liệu cập nhật 10/2026 · Ảnh minh chứng gốc</span>
        </div>
        <p className="mt-3 max-w-5xl text-sm sm:text-[15px] text-[#526179] leading-relaxed">
          Từ định hướng đến triển khai và đo lường. Với các dự án phối hợp nhiều nhóm, kết quả chung thuộc về tập thể; phần việc của tôi được ghi rõ trong từng case.
        </p>
        <nav aria-label="Case nên xem trước" className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs sm:text-[13px]">
          <span className="font-semibold text-[#0F766E]">Nếu chỉ có vài phút:</span>
          <a href="#project-seo-content-ads" className="inline-flex items-center min-h-8 rounded-full border border-[#CBD5E1] bg-white px-3 py-1 font-medium text-[#163B65] hover:border-[#0D9488] hover:text-[#0F766E] transition-colors">01 · B2B Funnel ↗</a>
          <a href="#project-ai-data" className="inline-flex items-center min-h-8 rounded-full border border-[#CBD5E1] bg-white px-3 py-1 font-medium text-[#163B65] hover:border-[#0D9488] hover:text-[#0F766E] transition-colors">03 · AI & dữ liệu ↗</a>
        </nav>
      </motion.div>

      <FlagshipJumpNav activeId={activeWorkId}/>
      <B2BAnchor project={projectById('seo-content-ads')} onOpenLab={onOpenLab} onZoom={openZoom}/>
      <DreamAnchor project={projectById('dream-christmas-delivery')} onZoom={openZoom}/>
      <AIDataAnchor onOpenLab={onOpenLab} onZoom={openZoom}/>
      <VCreatorAnchor project={projectById('v-creator')} onZoom={openZoom}/>
      <AutomationAnchor project={projectById('make-automation')} onOpenLab={onOpenLab} onZoom={openZoom}/>

      <div id="more-selected-work" className="scroll-mt-24 py-12 md:py-16">
        <div className="grid lg:grid-cols-12 gap-6 items-end mb-8 md:mb-10">
          <div className="lg:col-span-8 flex items-start gap-3"><div className="w-10 h-10 rounded-xl bg-[#0D9488]/10 text-[#0D9488] flex items-center justify-center shrink-0"><Layers3 className="w-5 h-5"/></div><div><h3 className="font-serif-title text-[26px] sm:text-3xl lg:text-4xl text-[#0F172A] leading-[1.1]">More Selected Work</h3></div></div>
          <p className="lg:col-span-4 lg:text-right text-xs text-[#526179]">Customer experience · Lead generation · Research · Owned Media · ESG</p>
        </div>
        <CompactCases projects={compactProjects} onOpenLab={onOpenLab} onZoom={openZoom} />
      <details className="group mt-5 sm:mt-6 border-t border-[#DCE4EE]">
        <summary className="cursor-pointer list-none min-h-[44px] py-3 flex items-center justify-between gap-3 text-xs font-semibold text-[#526179] hover:text-[#163B65] transition-colors">
          <span>Thuật ngữ thường gặp trong các case</span>
          <span className="text-[10px] uppercase tracking-[0.12em] group-open:hidden">Mở</span>
          <span className="text-[10px] uppercase tracking-[0.12em] hidden group-open:inline">Thu gọn</span>
        </summary>
        <dl className="grid sm:grid-cols-2 gap-x-10 gap-y-2.5 py-3 text-sm text-[#475569] leading-relaxed">
          {GLOSSARY.map(([term, meaning]) => (
            <div key={term}><dt className="inline font-mono-code text-xs font-semibold text-[#163B65]">{term}</dt> <dd className="inline">— {meaning}</dd></div>
          ))}
        </dl>
      </details>
      </div>
    </div>

    {lightbox && <div ref={lightboxRef} role="dialog" aria-modal="true" aria-label={lightbox.title} className="fixed inset-0 z-[100] bg-[#07111F]/82 backdrop-blur-md flex items-center justify-center p-4 sm:p-8" onMouseDown={(e)=>{if(e.target===e.currentTarget)closeLightbox()}}>
      <button ref={lightboxCloseRef} onClick={closeLightbox} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/95 text-[#0F172A] border border-white/30 flex items-center justify-center shadow-xl" aria-label="Đóng ảnh"><X className="w-5 h-5"/></button>
      <div className="max-w-[94vw] max-h-[90vh] flex flex-col items-center gap-3"><img src={lightbox.src} alt={lightbox.title} className="max-w-full max-h-[82vh] object-contain rounded-xl shadow-2xl bg-white"/><div className="text-xs sm:text-sm text-white/75 text-center">{lightbox.title}</div></div>
    </div>}
  </section>;
};
