import React from 'react';
import { EXPERIENCE_LIST } from '../data/portfolioData';
import { Calendar, Building2 } from 'lucide-react';
import { motion } from 'motion/react';

// Description paragraphs -> one bullet per sentence (wording unchanged). No regex lookbehind for older Safari.
const toBullets = (text: string): string[] =>
  text.split(/\n\s*\n/).flatMap((paragraph) => {
    const parts = paragraph.trim().split(/\.\s+/).filter(Boolean);
    return parts.map((part, i) => (i < parts.length - 1 ? `${part}.` : part)); // keep the original ending (. or 。)
  });

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="pt-14 pb-12 sm:pt-16 sm:pb-14 md:pt-20 md:pb-14 bg-[#F8FAFC] border-b border-[#DCE4EE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-8 md:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-serif-title text-[30px] sm:text-4xl lg:text-5xl font-normal text-[#0F172A] leading-[1.08] text-balance">Experience</h2>
          <p className="mt-4 text-lg text-[#475569] leading-relaxed text-pretty">Từ nền tảng Brand đến Product Marketing & AI qua từng giai đoạn — mỗi môi trường mở rộng thêm một lớp về strategy, execution và vận hành.</p>
        </motion.div>

        <div className="border-t border-[#CBD5E1]">
          {EXPERIENCE_LIST.map((item, idx) => (
            <motion.div
              key={idx}
              className="grid md:grid-cols-12 gap-x-10 gap-y-4 py-7 sm:py-8 border-b border-[#DCE4EE]"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
            >
              <div className="md:col-span-4 space-y-2">
                <span className="text-xs font-mono-code px-3 py-1.5 rounded-full bg-white text-[#163B65] border border-[#DCE4EE] font-medium inline-flex items-center gap-1.5 whitespace-nowrap">
                  <Calendar className="w-3.5 h-3.5" />{item.period}
                </span>
                <h3 className="font-serif-title font-semibold text-xl text-[#0F172A] leading-snug">{item.role}</h3>
                <p className="text-sm font-medium text-[#163B65] flex items-center gap-1.5"><Building2 className="w-4 h-4 shrink-0" /><span>{item.company}</span></p>
                <span className="text-[11px] font-mono-code text-[#0D9488] font-semibold uppercase tracking-wider block">{item.type}</span>
              </div>

              <div className="md:col-span-8 space-y-3">
                <ul className="space-y-2">
                  {toBullets(item.description).map((line) => (
                    <li key={line} className="flex gap-3 text-[15px] text-[#334155] leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#0D9488] shrink-0" /><span className="text-pretty">{line}</span>
                    </li>
                  ))}
                </ul>
                {item.achievements.length > 0 && (
                  <div className="pt-1">
                    <h4 className="text-xs font-mono-code font-semibold uppercase text-[#526179] tracking-wider mb-2">Các hạng mục thực hiện chính:</h4>
                    <ul className="space-y-2">
                      {item.achievements.map((ach) => (
                        <li key={ach} className="flex gap-3 text-[15px] text-[#0F172A] leading-relaxed">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#163B65] shrink-0" /><span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
