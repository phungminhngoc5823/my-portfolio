import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

type EvidenceLink = { label: string; href: string };

type Capability = {
  title: string;
  description: string;
  evidence: EvidenceLink[];
};

const capabilities: Capability[] = [
  { title: 'Planning & Strategy', description: 'Xác định audience và proposition, xây dựng hành trình khách hàng, thử nghiệm dựa trên dữ liệu.', evidence: [{ label: 'Ebook B2B', href: '#project-seo-content-ads' }, { label: 'Dream Christmas', href: '#project-dream-christmas-delivery' }] },
  { title: 'Product & AI', description: 'Chuyển hóa tài liệu, dữ liệu và khảo sát có sẵn thành sản phẩm khách hàng hiểu sử dụng được.', evidence: [{ label: '1AI', href: '#project-ai-data' }, { label: 'AI Readiness', href: '#project-ai-data' }, { label: 'ICP Scoring', href: '#project-ai-data' }] },
  { title: 'Brand & Customer Experience', description: 'Giữ nhất quán thông điệp và trải nghiệm giữa thương hiệu và người dùng.', evidence: [{ label: 'AREA', href: '#project-area-green-leadership' }, { label: 'Seasonal tenant guideline', href: '#project-seasonal-campaign-operations' }] },
  { title: 'Growth & Measurement', description: 'Theo dõi KPI, đọc số liệu và chuyển thành hành động cho kỳ sau.', evidence: [{ label: 'V-Creator', href: '#project-v-creator' }, { label: 'TikTok', href: '#project-vincom-tiktok-production' }] },
  { title: 'Execution & Operations (hỗ trợ)', description: 'Nội dung ngắn, landing page, SEO; chuẩn hóa workflow và giảm thao tác lặp.', evidence: [{ label: 'Content quảng bá Ebook B2B', href: '#project-seo-content-ads' }, { label: 'Marketing Automation', href: '#project-make-automation' }] },
];

const tools = ['Make.com', 'Google Sheets', 'Meta platforms', 'Canva', 'Figma', 'CMS', 'AI tools'];

export const SkillsSection: React.FC = () => (
  <section id="skills" className="pt-14 pb-14 sm:pt-16 sm:pb-16 md:pt-16 md:pb-20 bg-[#F8FAFC] border-b border-[#DCE4EE]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        className="grid lg:grid-cols-12 gap-5 lg:gap-10 mb-7 sm:mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        <div className="lg:col-span-7">
          <h2 className="font-serif-title text-[30px] sm:text-4xl lg:text-5xl font-normal text-[#0F172A] leading-[1.15] pt-1">Năng lực × Sản phẩm thực tế</h2>
          <p className="mt-4 text-base text-[#475569] leading-relaxed">Nền tảng xuyên suốt: Quản trị Thương hiệu và góc nhìn khách hàng.</p>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 border-y border-[#CBD5E1]">
        {capabilities.map((capability, index) => {
          const isFull = capabilities.length % 2 === 1 && index === capabilities.length - 1;
          const isLeft = index % 2 === 0 && !isFull;
          const isLastRow = index >= (capabilities.length % 2 === 0 ? capabilities.length - 2 : capabilities.length - 1);
          return (
            <motion.article
              key={capability.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.32, delay: index * 0.025 }}
              className={[
                'py-5 sm:py-6',
                isFull ? 'md:col-span-2' : '',
                index < capabilities.length - 1 ? 'border-b border-[#DCE4EE]' : '',
                isLastRow ? 'md:border-b-0' : 'md:border-b md:border-[#DCE4EE]',
                isFull ? '' : isLeft ? 'md:pr-7 lg:pr-9 md:border-r md:border-[#DCE4EE]' : 'md:pl-7 lg:pl-9',
              ].join(' ')}
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono-code text-[11px] text-[#0D9488] shrink-0">0{index + 1}</span>
                <h3 className="font-serif-title text-xl sm:text-[22px] text-[#0F172A] leading-tight">{capability.title}</h3>
              </div>
              <p className="mt-2 text-sm sm:text-[15px] text-[#334155] leading-relaxed max-w-xl">{capability.description}</p>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                {capability.evidence.map((item) => (
                  <a
                    key={`${capability.title}-${item.label}`}
                    href={item.href}
                    className="group inline-flex min-h-[40px] items-center gap-1 text-xs font-semibold text-[#163B65] underline underline-offset-4 decoration-[#CBD5E1] hover:text-[#0D9488] hover:decoration-[#0D9488] transition-colors"
                  >
                    {item.label}
                    <ArrowUpRight className="w-3 h-3 text-[#0D9488] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  </section>
);
