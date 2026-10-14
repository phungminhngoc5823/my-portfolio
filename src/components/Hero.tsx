import React from 'react';
import { ArrowDownRight, ArrowUpRight, CheckCircle2, Network, TrendingUp, Workflow } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onExploreProjects: () => void;
  onContactClick: () => void;
  onOpenLab: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects, onOpenLab }) => {
  // Split after the first sentence-ending mark (works for ".", "。"); no lookbehind so older Safari can parse it.
  const heroTitleParts = (PERSONAL_INFO.heroTitle.match(/[^.。]+[.。]?/g) || [PERSONAL_INFO.heroTitle]).map((part) => part.trim());
  const heroTitleFirst = heroTitleParts[0] || '';
  const heroTitleSecond = heroTitleParts.slice(1).join(' ');
  const heroDescriptionParts = PERSONAL_INFO.heroDescription.split('\n\n');

  return (
    <section className="relative pt-28 pb-8 md:pt-[112px] md:pb-6 bg-[#F8FAFC] border-b border-[#DCE4EE] overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#163B65]/10 via-[#0D9488]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#D97706]/10 via-[#163B65]/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          <motion.div
            className="lg:col-span-9 text-left space-y-4 lg:space-y-[clamp(10px,1.8vh,18px)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 backdrop-blur-xs border border-[#163B65]/20 shadow-xs hover:border-[#163B65]/50 transition-all">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#059669] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#059669]" />
              </span>
              <span className="text-xs  font-semibold text-[#163B65] tracking-widest uppercase">
                {PERSONAL_INFO.heroEyebrow}
              </span>
            </div>

            <h1 className="font-serif-title text-[34px] sm:text-4xl md:text-5xl lg:text-[clamp(34px,6.2vh,52px)] font-normal text-[#0F172A] leading-[1.1] tracking-tight text-balance">
              <span className="italic font-normal text-[#334155]">{heroTitleFirst}</span>{' '}
              <br className="hidden sm:inline" />
              <span className="font-serif-title font-semibold text-[#163B65]">
                {heroTitleSecond}
              </span>
            </h1>

            <div className="max-w-[56rem] space-y-2.5">
              <p className="text-base sm:text-[17px] lg:text-[clamp(15px,2.2vh,17px)] text-[#475569] font-normal leading-[1.6] text-pretty">{heroDescriptionParts[0]}</p>
              {heroDescriptionParts.slice(1).map((paragraph) => (
                <p key={paragraph} className="text-[13px] sm:text-sm text-[#526179] leading-relaxed max-w-xl">{paragraph}</p>
              ))}
            </div>

            <p className="flex items-center gap-2 text-sm text-[#475569]"><span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]" aria-hidden="true" />Đang tìm kiếm công việc toàn thời gian hoặc làm việc từ xa</p>
            <div className="pt-1 flex flex-wrap gap-3.5 items-center">
              <motion.a
                href="#projects"
                onClick={onExploreProjects}
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto min-h-12 px-6 py-3.5 rounded-xl bg-[#163B65] hover:bg-[#11263E] text-white font-medium text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Khám phá Selected Work</span>
                <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </motion.a>
              <motion.button
                type="button"
                onClick={onOpenLab}
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto min-h-12 px-6 py-3.5 rounded-xl bg-white hover:bg-[#F8FAFC] text-[#0F172A] border border-[#CBD5E1] hover:border-[#0D9488] font-medium text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs hover:shadow-md group md:bg-transparent md:border-transparent md:shadow-none md:hover:shadow-none md:px-3 md:text-[#475569]"
              >
                <span>Xem Marketing Lab</span>
                <ArrowUpRight className="w-4 h-4 text-[#0D9488] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.button>
            </div>

          </motion.div>

          <motion.div
            className="lg:col-span-3 relative"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          >
            <div className="relative mx-auto w-full max-w-[220px] sm:max-w-[240px] lg:max-w-[min(250px,max(180px,calc((100svh-330px)*0.8)))] lg:mr-0 lg:ml-auto pb-3">
              <div className="absolute left-5 top-5 -right-4 sm:-right-5 bottom-0 rounded-[28px] sm:rounded-[32px] bg-[#D5E2F0]" aria-hidden="true" />
              <div className="relative aspect-[4/5] rounded-[28px] sm:rounded-[32px] overflow-hidden bg-[#DDE6F0] shadow-[0_28px_60px_-40px_rgba(15,23,42,.55)]">
                <img src="./images/hero-portrait.jpg" alt={PERSONAL_INFO.name} className="absolute inset-0 w-full h-full object-cover" width={820} height={1026} />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0B1626]/80 to-transparent" aria-hidden="true" />
                <div className="absolute left-5 bottom-5 text-white">
                  <p className="font-serif-title font-medium text-xl leading-tight">{PERSONAL_INFO.name}</p>
 <p className="mt-1 text-[11px] text-white/75">Hanoi, Vietnam</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 border-y border-[#DCE4EE] bg-white/60">
          {[
            { Icon: Network, label: 'B2B funnel · ebook Luật Lao động', title: '237 lead L1 · FB Ads' },
            { Icon: TrendingUp, label: 'AI & dữ liệu · ICP Scoring', title: 'Chatbot 1AI đã vận hành' },
            { Icon: Workflow, label: 'Automation · 91 fanpage', title: 'Nửa ngày → 15–30 phút/bài' },
          ].map(({ Icon, label, title }, index) => (
            <div key={label} className={`px-4 py-3 border-[#DCE4EE] ${index < 2 ? 'border-b sm:border-b-0 sm:border-r' : ''}`}>
              <div className="flex items-center justify-between gap-2 text-[#163B65]">
                <Icon className="w-4 h-4 shrink-0" />
 <span className="text-[11px] uppercase text-[#526179] font-semibold tracking-wider">{label}</span>
              </div>
              <div className="mt-1.5  text-lg font-bold text-[#163B65] tracking-tight">{title}</div>
            </div>
          ))}
        </div>

        <div className="mt-3 grid lg:grid-cols-12">
 <div className="lg:col-span-12 pt-3 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs text-[#526179] border-t border-[#DCE4EE]/80">
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0" />
              1Office 04/2026–nay · Vincom Retail 01/2025–01/2026
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0" />
              EN · TOEIC 905 · 中文 · HSK5 · MOS (Microsoft Office Specialist)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
