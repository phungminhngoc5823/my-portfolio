import React from 'react';
import { Sparkles } from 'lucide-react';
import { LabModuleId } from '../../types';
import { ArtifactFigure, CaseCover, CaseToggle, SectionLabel, useCaseDetails } from './WorkShared';

type Block = { title: string; meta?: string; paragraphs: string[]; bulletsLabel?: string; bullets?: string[]; reverse?: boolean; benefit: string; image: { src: string; title: string; subtitle: string } };

const BLOCKS: Block[] = [
  {
    title: '1AI: chatbot khách hàng',
    meta: 'Đã đi vào vận hành',
    paragraphs: ['Chatbot 1AI hiện đang được vận hành trên website chính thức của 1Office.'],
    bulletsLabel: 'Tôi phụ trách:',
    bullets: ['Viết prompt, hướng dẫn AI cách tư vấn theo đúng quy trình của sales.', 'Xây dựng luồng hội thoại thu thập thông tin khách hàng.', 'Tổng hợp tài liệu sản phẩm, tài liệu doanh nghiệp và sales playbook có sẵn thành knowledge base.'],
    benefit: 'khách truy cập website sẽ nhận được câu trả lời dựa trên tài liệu chính thức của 1Office, còn phòng kinh doanh có sẵn insight, thông tin, nhu cầu cụ thể của khách để buổi tư vấn đầu tiên thuận lợi hơn.',
    image: { src: './images/marketing-lab/chatbot-reference.png', title: '1AI', subtitle: 'Giao diện 1AI đang chạy trên website 1Office.' },
  },
  {
    title: 'AI Readiness: survey và report',
    meta: '05/2026 – 06/2026',
    paragraphs: ['Đây là tool khảo sát giúp doanh nghiệp tự đánh giá mức độ sẵn sàng ứng dụng AI, đồng thời là một điểm chạm thu lead của 1Office.'],
    bulletsLabel: 'Tôi phụ trách:',
    bullets: ['Xây dựng cách trực quan hóa flow khảo sát 4 bước.', 'Thiết kế report với 6 nhóm năng lực, radar chart, nhóm hành động ưu tiên.', 'Chuẩn bị output để bàn giao cho đội Phát triển sản phẩm.', 'Hỗ trợ content phân phối trên Facebook, LinkedIn, Zalo.'],
    reverse: true,
    benefit: 'thay vì hỏi doanh nghiệp có muốn dùng AI hay không, bài đánh giá cho họ thấy mình mạnh ở nhóm năng lực nào, còn thiếu ở đâu và nên bắt đầu từ việc gì trước.',
    image: { src: './images/ai-readiness-report-overview.jpg', title: 'AI Readiness', subtitle: 'Màn hình survey 4 bước và report tổng hợp.' },
  },
  {
    title: 'ICP Scoring & Tracking',
    meta: '05/2026 – 06/2026 · ICP Scoring đi vào sử dụng chính thức từ 07/2026',
    paragraphs: ['Workstream thống nhất dữ liệu research, tracking và activation, để team dùng cùng một định nghĩa và theo dõi lead nhất quán hơn.'],
    bullets: ['Xây dựng guideline và tổng hợp tài nguyên ICP cho nhóm doanh nghiệp 50–300 nhân sự.', 'Cấu trúc research theo 8 sub-industries và tham gia mapping pain point → giải pháp → messaging.', 'Thiết lập, cập nhật tracking file các cấp lead L1 → L2 → L3 và hỗ trợ cập nhật công thức ICP Scoring.', 'Xây dựng demo lead form thử nghiệm.'],
    benefit: 'điểm ICP giúp cả team thống nhất thế nào là một lead phù hợp và theo dõi lead đó đã đi đến đâu trong funnel.',
    image: { src: './images/icp-guideline-overview.jpg', title: 'ICP', subtitle: 'Guideline, tracking file và demo lead form.' },
  },
];

export const AIDataAnchor = ({ onOpenLab, onZoom }: { onOpenLab: (tab: LabModuleId) => void; onZoom: (src: string, title: string) => void }) => {
  const { open, toggle, detailsId } = useCaseDetails('project-ai-data');
  return (
    <article id="project-ai-data" className="flagship-case scroll-mt-28 pt-14 sm:pt-16 md:pt-20 pb-0">
      <div className="space-y-12 md:space-y-16">
        <section className="space-y-5 rounded-[28px] bg-[#E6EEF7] px-5 sm:px-8 lg:px-10 py-8 sm:py-10 lg:py-12">
          <div className="grid lg:grid-cols-12 gap-x-12 gap-y-6 items-start">
            <div className="lg:col-span-7 space-y-3">
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-[10px] font-mono-code tracking-[0.16em] text-[#94A3B8]">03</span>
                <span className="px-2.5 py-1 rounded-full border border-[#163B65]/20 bg-white text-[10px] font-mono-code font-semibold uppercase tracking-wide text-[#163B65]">1Office</span>
                <span className="text-[10px] font-mono-code text-[#94A3B8]">05/2026 – Hiện tại</span>
              </div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] font-mono-code uppercase tracking-[0.16em] text-[#0D9488]">Case chính 03 · Product & AI <span className="normal-case tracking-normal rounded-full bg-[#0F766E] px-2.5 py-0.5 text-[10px] font-semibold text-white">Nên xem trước</span></div>
              <h3 className="font-serif-title text-[28px] sm:text-[32px] lg:text-[42px] leading-[1.05] text-[#0F172A]">Sản phẩm AI & dữ liệu tại 1Office: 1AI, AI Readiness, ICP Scoring</h3>
            </div>
            <div className="order-2 lg:order-none lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:row-span-2 lg:self-stretch">
              <CaseCover src="./images/ai-readiness-assessment-landing-crop.jpg" alt="Trang đánh giá mức độ sẵn sàng AI & Automation của 1Office" position="top" className="aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[280px]" />
            </div>
            <div className="order-3 lg:order-none lg:col-span-7 space-y-4">
              <p className="text-base text-[#475569] leading-relaxed text-pretty">Ba workstream dưới đây đều thể hiện cách tôi chuyển hóa thông tin có sẵn (tài liệu sản phẩm, dữ liệu research được, kết quả khảo sát) về ngôn ngữ mà khách hàng và team có thể dùng ngay.</p>
              <button type="button" onClick={() => onOpenLab('chatbot')} className="inline-flex items-center gap-2 px-4 min-h-[44px] py-2.5 rounded-xl bg-[#163B65] hover:bg-[#0F2A4A] text-xs font-semibold text-white transition-all"><Sparkles className="w-4 h-4" /><span>Thử 1AI trong Marketing Lab</span></button>
            </div>
          </div>

          <ol className="grid md:grid-cols-3 gap-4">
            {BLOCKS.map((block, index) => (
              <li key={block.title} className="rounded-2xl border border-[#DCE4EE] bg-white/80 p-5">
                <div className="font-mono-code text-[11px] text-[#0D9488]">0{index + 1}{block.meta ? ` · ${block.meta.split(' · ')[0]}` : ''}</div>
                <div className="mt-1 font-serif-title text-xl text-[#0F172A]">{block.title}</div>
                <p className="mt-2 text-sm text-[#475569] leading-relaxed">{block.paragraphs[0].match(/^.*?(?:\.(?=\s|$)|。)/)?.[0] ?? block.paragraphs[0]}</p>
              </li>
            ))}
          </ol>

          <p className="text-xs text-[#526179] leading-relaxed text-pretty"><span className="font-semibold text-[#475569]">Lưu ý phạm vi: </span>phần kỹ thuật của chatbot 1AI (gồm CRM), methodology, bộ câu hỏi và scoring model của AI Readiness không thuộc phạm vi của tôi; với ICP Scoring, tôi hỗ trợ cập nhật công thức. Con số ~28.000 doanh nghiệp là quy mô thị trường trong phạm vi research, không phải số doanh nghiệp tôi tiếp cận.</p>

          <CaseToggle open={open} onToggle={toggle} controls={detailsId} openLabel="Xem chi tiết ba workstream" />
        </section>

        {open && (
          <div id={detailsId} className="space-y-8 md:space-y-10">
            {BLOCKS.map((block) => (
              <section key={block.title} className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-center">
                <div className={`lg:col-span-7 space-y-3 ${block.reverse ? 'lg:order-2' : ''}`}>
                  <div>
                    {block.meta && <SectionLabel>{block.meta}</SectionLabel>}
                    <h4 className="font-serif-title text-2xl sm:text-3xl text-[#0F172A]">{block.title}</h4>
                  </div>
                  {block.paragraphs.map((p) => <p key={p} className="text-base text-[#475569] leading-relaxed text-pretty">{p}</p>)}
                  {block.bullets && block.bulletsLabel && <div className="text-sm font-semibold text-[#0F172A] -mb-1">{block.bulletsLabel}</div>}
                  {block.bullets && <ul className="space-y-2">{block.bullets.map((b) => <li key={b} className="flex gap-3 text-base text-[#334155] leading-relaxed"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#0D9488] shrink-0" /><span>{b}</span></li>)}</ul>}
                  <p className="text-base text-[#475569] leading-relaxed text-pretty"><span className="font-semibold text-[#0F172A]">Lợi ích: </span>{block.benefit}</p>
                </div>
                <div className={`lg:col-span-5 ${block.reverse ? 'lg:order-1' : ''}`}>
                  <ArtifactFigure src={block.image.src} title={block.image.title} subtitle={block.image.subtitle} onZoom={onZoom} variant="dashboard" />
                </div>
              </section>
            ))}
            <CaseToggle open={open} onToggle={toggle} controls={detailsId} />
          </div>
        )}
      </div>
    </article>
  );
};
