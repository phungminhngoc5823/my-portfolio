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

// Plain-language definitions for acronyms used across the cases (shown in a collapsible block under the section title).
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 md:pt-20">
      <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-end pb-6 sm:pb-8">
        <div className="lg:col-span-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-10"><h2 className="font-serif-title text-[30px] sm:text-4xl lg:text-5xl text-[#0F172A] leading-[1.08] shrink-0">Selected Work</h2><div className="md:max-w-[640px] md:text-right space-y-1.5 text-sm text-[#526179] leading-relaxed text-pretty"><p>Các dự án dưới đây bao gồm cả phần định hướng đến triển khai và đo lường. Với những chương trình kết hợp với team/liên phòng ban, con số chung là kết quả của cả team; phần việc của tôi được ghi rõ trong từng dự án.</p><p className="text-xs text-[#526179]"><span className="font-semibold text-[#0D9488]">Gợi ý nếu chỉ có vài phút: case 01 và 03.</span> Số liệu tính đến 10/2026; ảnh minh chứng là bản gốc đã triển khai, giữ nguyên tiếng Việt.</p></div></div>
        <details className="lg:col-span-12 group rounded-2xl border border-[#DCE4EE] bg-white/70">
          <summary className="cursor-pointer list-none min-h-[44px] px-4 py-2.5 flex items-center justify-between gap-3 text-xs font-semibold text-[#163B65]">
            <span>Thuật ngữ thường gặp trong các case</span>
            <span className="text-[10px] font-mono-code uppercase tracking-[0.12em] text-[#526179] group-open:hidden">Mở</span>
            <span className="text-[10px] font-mono-code uppercase tracking-[0.12em] text-[#526179] hidden group-open:inline">Thu gọn</span>
          </summary>
          <dl className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3 px-4 pb-4 pt-1 text-sm text-[#475569] leading-relaxed">
            {GLOSSARY.map(([term, meaning]) => (
              <div key={term}><dt className="inline font-mono-code text-xs font-semibold text-[#163B65]">{term}</dt> <dd className="inline">— {meaning}</dd></div>
            ))}
          </dl>
        </details>
      </motion.div>

      <FlagshipJumpNav activeId={activeWorkId}/>
      <B2BAnchor project={projectById('seo-content-ads')} onOpenLab={onOpenLab} onZoom={openZoom}/>
      <DreamAnchor project={projectById('dream-christmas-delivery')} onZoom={openZoom}/>
      <AIDataAnchor onOpenLab={onOpenLab} onZoom={openZoom}/>
      <VCreatorAnchor project={projectById('v-creator')} onZoom={openZoom}/>
      <AutomationAnchor project={projectById('make-automation')} onOpenLab={onOpenLab} onZoom={openZoom}/>

      <div id="more-selected-work" className="scroll-mt-24 py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-6 items-end mb-8 md:mb-10">
          <div className="lg:col-span-8 flex items-start gap-3"><div className="w-10 h-10 rounded-xl bg-[#0D9488]/10 text-[#0D9488] flex items-center justify-center shrink-0"><Layers3 className="w-5 h-5"/></div><div><h3 className="font-serif-title text-[26px] sm:text-3xl lg:text-4xl text-[#0F172A] leading-[1.1]">More Selected Work</h3></div></div>
          <p className="lg:col-span-4 lg:text-right text-xs text-[#526179]">Customer experience · Lead generation · Research · Owned Media · ESG</p>
        </div>
        <CompactCases projects={compactProjects} onOpenLab={onOpenLab} onZoom={openZoom} />
      </div>
    </div>

    {lightbox && <div ref={lightboxRef} role="dialog" aria-modal="true" aria-label={lightbox.title} className="fixed inset-0 z-[100] bg-[#07111F]/82 backdrop-blur-md flex items-center justify-center p-4 sm:p-8" onMouseDown={(e)=>{if(e.target===e.currentTarget)closeLightbox()}}>
      <button ref={lightboxCloseRef} onClick={closeLightbox} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/95 text-[#0F172A] border border-white/30 flex items-center justify-center shadow-xl" aria-label="Đóng ảnh"><X className="w-5 h-5"/></button>
      <div className="max-w-[94vw] max-h-[90vh] flex flex-col items-center gap-3"><img src={lightbox.src} alt={lightbox.title} className="max-w-full max-h-[82vh] object-contain rounded-xl shadow-2xl bg-white"/><div className="text-xs sm:text-sm text-white/75 text-center">{lightbox.title}</div></div>
    </div>}
  </section>;
};
