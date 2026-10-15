import React from 'react';
import { imgSize } from '../../data/imageSizes';
import { CaseCover, CaseToggle, useCaseDetails } from './WorkShared';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { ExtendedProject } from '../../data/portfolioData';
import { getFeaturedProjectContent, getProjectContent } from '../../data/projectContent';
import { LabModuleId } from '../../types';
import { ArtifactFigure, FixedShot, ScopeNote, onTabKeyDown, ContentClosing, ContentContribution, ContentParagraphs, LabCta, MetricStrip, ProjectMeta, SectionLabel } from './WorkShared';

export const AutomationAnchor = ({
  project,
  onOpenLab,
  onZoom,
}: {
  project: ExtendedProject;
  onOpenLab: (tab: LabModuleId) => void;
  onZoom: (src: string, title: string) => void;
}) => {
  const content = getProjectContent(project.id);
  const featured = getFeaturedProjectContent(project.id);
  const workflowSections = (featured.sections || content.sections).slice(0, 3);
  const workspaceHero = project.galleryImages?.[0];
  const coverImage = project.galleryImages?.[1];
  const workflowVisuals = [coverImage, ...(project.galleryImages || []).slice(2, 4)];
  const evidenceSection = content.sections[3];

  return (
    <article id={`project-${project.id}`} className="flagship-case scroll-mt-28 pt-14 sm:pt-16 md:pt-20 pb-0">
      <div className="space-y-10 md:space-y-12">
        <section className="space-y-7 md:space-y-8 rounded-[28px] bg-[#E6EEF7] px-5 sm:px-8 lg:px-10 py-8 sm:py-10 lg:py-12">
          <div className="grid lg:grid-cols-12 gap-x-10 gap-y-6 items-center">
            <div className="lg:col-span-6 space-y-4">
              <ProjectMeta project={project} index={4} />
              <div className="text-[11px] font-mono-code uppercase tracking-[0.16em] text-[#0D9488]">Case chính 05 · Marketing Operations</div>
              <h3 className="font-serif-title text-[28px] sm:text-[32px] lg:text-[42px] leading-[1.05] text-[#0F172A] text-balance">{content.displayTitle}</h3>
              <p className="text-base text-[#475569] leading-relaxed text-pretty">{featured.overview}</p>
              <div className="pt-4 border-t border-[#C9D6E6]">
                <SectionLabel>Bối cảnh</SectionLabel>
                <ContentParagraphs paragraphs={featured.context} />
              </div>
              <LabCta project={project} onOpenLab={onOpenLab} />
            </div>
            {workspaceHero && (
              <div className="lg:col-span-6">
                <ArtifactFigure src={workspaceHero.url} title={workspaceHero.title} subtitle={workspaceHero.subtitle} onZoom={onZoom} variant="dashboard" />
              </div>
            )}
          </div>
          <MetricStrip project={project} />
          <ScopeNote content={content} />
        </section>

        <section className="border-y border-[#CBD5E1]">
          <div className="py-6 sm:py-7 border-b border-[#DCE4EE]">
            <SectionLabel>Make.com</SectionLabel>
            <h4 className="font-serif-title text-2xl sm:text-3xl md:text-4xl text-[#0F172A] text-balance">Đã đưa vào sử dụng, vẫn vận hành đến hiện tại</h4>
            <p className="mt-3 text-base text-[#475569] leading-relaxed text-pretty">Tôi xây dựng các workflow trên Make.com, kết nối với các ứng dụng AI miễn phí hoặc trả phí để tự động hóa những tác vụ lặp lại này.</p>
          </div>
          {workflowSections.map((section, index) => {
            const visual = workflowVisuals[index];
            return (
              <div key={section.title} className="grid md:grid-cols-12 gap-5 md:gap-10 py-6 border-b border-[#DCE4EE] last:border-b-0 items-center">
                <div className={`md:col-span-6 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
 <div className="text-[10px] uppercase tracking-[0.14em] text-[#0D9488] mb-2">0{index + 1} · {section.kicker}</div>
                  <h5 className="font-serif-title text-xl sm:text-2xl text-[#0F172A]">{section.title}</h5>
                  <div className="mt-2 text-[15px] text-[#475569] leading-relaxed text-pretty">{section.paragraphs && <ContentParagraphs paragraphs={section.paragraphs} />}</div>
                </div>
                <div className={`md:col-span-6 ${index % 2 === 1 ? 'md:order-1' : ''}`}>{visual && <ArtifactFigure src={visual.url} title={visual.title} subtitle={visual.subtitle} onZoom={onZoom} variant="dashboard" />}</div>
              </div>
            );
          })}
        </section>

        <section className="p-6 sm:p-8 rounded-3xl border border-[#CBD5E1] bg-[#F1F5F9]">
          <SectionLabel>{evidenceSection?.kicker || 'Sản phẩm thực tế'}</SectionLabel>
          <h4 className="font-serif-title text-2xl text-[#0F172A] mb-3">{evidenceSection?.title || 'Make.com scenarios'}</h4>
          {evidenceSection?.bullets && <ul className="space-y-2 text-sm text-[#475569]">{evidenceSection.bullets.map((item) => <li key={item} className="flex gap-2"><span className="text-[#0D9488]">•</span><span>{item}</span></li>)}</ul>}
        </section>
      </div>
    </article>
  );
};


export const VCreatorAnchor = ({ project, onZoom }: { project: ExtendedProject; onZoom: (src: string, title: string) => void }) => {
  const content = getProjectContent(project.id);
  const featured = getFeaturedProjectContent(project.id);
  const workstreams = (featured.sections || content.sections).slice(0, 4);
  const operatingLoop = workstreams.map((section) => section.title);
  const allArtifacts = project.galleryImages || [];
  const heroArtifact = allArtifacts[0];
  const enablementArtifact = allArtifacts.find((image) => image.title.includes('Viral'));
  const trackingArtifact = allArtifacts.find((image) => image.title.includes('Monthly KPI Report'));
  const reportingArtifact = allArtifacts.find((image) => image.title.includes('Content-Line Analysis'));
  const proposalArtifact = allArtifacts.find((image) => image.title.includes('Collaboration Proposal'));
  const workstreamVisuals = [[trackingArtifact], [reportingArtifact], [proposalArtifact], [enablementArtifact]].map((group) => group.filter(Boolean) as NonNullable<typeof trackingArtifact>[]);

  const { open, toggle, detailsId } = useCaseDetails(`project-${project.id}`);

  return (
    <article id={`project-${project.id}`} className="flagship-case scroll-mt-28 pt-14 sm:pt-16 md:pt-20 pb-0">
      <div className="space-y-12 md:space-y-16">
        {/* 01 — Project overview */}
        <section className="space-y-7 md:space-y-8 rounded-[28px] bg-[#E6EEF7] px-5 sm:px-8 lg:px-10 py-8 sm:py-10 lg:py-12">
          <div className="grid lg:grid-cols-12 gap-x-12 gap-y-6 items-start">
            <div className="lg:col-span-7 space-y-3">
              <ProjectMeta project={project} index={3} />
              <div className="text-[11px] font-mono-code uppercase tracking-[0.16em] text-[#0D9488]">Case chính 04 · Campaign Operations</div>
              <h3 className="font-serif-title text-[28px] sm:text-[32px] lg:text-[42px] leading-[1.05] text-[#0F172A]">{content.displayTitle}</h3>
            </div>
                        {true && (
              <div className="order-2 lg:order-none lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:row-span-2 lg:self-stretch">
                <CaseCover src={'./images/v-creator-training-cover.jpg'} alt="Slide đào tạo V-Creator hàng tháng" position="center" className="aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[280px]" />
              </div>
            )}
            <div className="order-3 lg:order-none lg:col-span-7 space-y-4">
              <p className="text-base text-[#475569] leading-relaxed text-pretty">{featured.overview}</p>
            </div>
          </div>
          <MetricStrip project={project} />
          <div>
            <SectionLabel>Vai trò của tôi</SectionLabel>
            <ul className="grid md:grid-cols-3 gap-4">
              {(featured.contributionBullets || content.contributionBullets).map((item, i) => (
                <li key={i} className="flex gap-3 rounded-xl bg-white/70 border border-[#DCE4EE] px-4 py-3.5 text-sm sm:text-[15px] text-[#334155] leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#0D9488] shrink-0" /><span className="text-pretty">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-5 border-t border-[#C9D6E6]">
            <SectionLabel>{content.closingTitle}</SectionLabel>
            {content.closing.map((paragraph, index) => <p key={index} className="text-sm text-[#475569] leading-relaxed text-pretty">{paragraph}</p>)}
          </div>
        </section>

        <CaseToggle open={open} onToggle={toggle} controls={detailsId} openLabel="Xem quy trình triển khai hàng tháng" />

        {open && (
        <div id={detailsId} className="space-y-8">
        {/* 03 — Unified operating system */}
        <section className="border-y border-[#CBD5E1] py-7 sm:py-8 md:py-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-7 md:mb-8">
            <div className="max-w-3xl">
              <SectionLabel>Monthly operating system</SectionLabel>
              <h4 className="font-serif-title text-2xl sm:text-3xl md:text-4xl text-[#0F172A]">Vòng lặp hàng tháng</h4>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5 lg:gap-6 items-stretch">
            {workstreams.map((section, index) => (
              <div key={section.title} className="flex flex-col rounded-2xl border border-[#DCE4EE] bg-white/75 p-5 sm:p-6">
                <div className="text-[10px] font-mono-code uppercase tracking-[0.14em] text-[#0D9488] mb-2">0{index + 1}</div>
                <h5 className="font-serif-title text-2xl text-[#0F172A]">{section.title}</h5>
                <div className="mt-3 text-[15px] text-[#475569] leading-relaxed text-pretty">{section.paragraphs && <ContentParagraphs paragraphs={section.paragraphs} />}</div>
                {section.bullets && <ul className="mt-3 grid gap-2">{section.bullets.map((item) => <li key={item} className="text-sm text-[#475569] flex gap-2"><span className="text-[#0D9488]">•</span><span>{item}</span></li>)}</ul>}
                {workstreamVisuals[index].length > 0 && <div className={`mt-auto pt-5 grid gap-4 items-start ${workstreamVisuals[index].length > 1 ? 'sm:grid-cols-2' : ''}`}>
                  {workstreamVisuals[index].map((visual) => <ArtifactFigure key={visual.url} src={visual.url} title={visual.title} subtitle={visual.subtitle} onZoom={onZoom} variant="dashboard" className="vcreator-supporting-evidence" mobileZoomHint />)}
                </div>}
              </div>
            ))}
          </div>
        </section>
          <CaseToggle open={open} onToggle={toggle} controls={detailsId} />
        </div>
        )}
      </div>
    </article>
  );
};


const EvidenceFold = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <details className="group/fold mt-6 rounded-xl border border-[#DCE4EE] bg-white overflow-hidden">
    <summary className="cursor-pointer list-none min-h-[44px] px-4 py-3 flex items-center justify-between gap-3 text-xs font-semibold text-[#163B65]">
      <span>{label}</span>
 <span className="text-[10px] uppercase tracking-[0.12em] text-[#526179]"><span className="group-open/fold:hidden">Mở xem</span><span className="hidden group-open/fold:inline">Thu gọn</span></span>
    </summary>
    <div className="p-4 sm:p-5 border-t border-[#DCE4EE] space-y-6">{children}</div>
  </details>
);

const B2B_STAGES = ['Acquisition', 'Conversion', 'Lead Nurture', 'Organic SEO'];

const B2BStage = ({
  index,
  label,
  title,
  active,
  onGo,
  children,
}: {
  index: number;
  label: string;
  title: string;
  active: number;
  onGo: (next: number) => void;
  children: React.ReactNode;
}) => {
  if (index - 1 !== active) return null;
  return (
    <div role="tabpanel" id={`b2b-panel-${index - 1}`} aria-labelledby={`b2b-tab-${index - 1}`} className="py-7 sm:py-9">
 <div className="text-[10px] uppercase tracking-[0.14em] text-[#0D9488] mb-2">0{index} · {label}</div>
      <h5 className="font-serif-title text-2xl sm:text-3xl text-[#0F172A] leading-tight text-balance">{title}</h5>
      <div className="pt-6">{children}</div>
      {index < B2B_STAGES.length && (
        <button type="button" onClick={() => onGo(index)} className="mt-8 min-h-[40px] inline-flex items-center gap-2 rounded-full bg-[#163B65] px-5 text-xs font-semibold text-white hover:bg-[#11263E] transition-colors">
          Tiếp theo: {B2B_STAGES[index]} <ArrowRight className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
};

export const B2BAnchor = ({
  project,
  onOpenLab,
  onZoom,
}: {
  project: ExtendedProject;
  onOpenLab: (tab: LabModuleId) => void;
  onZoom: (src: string, title: string) => void;
}) => {
  const content = getProjectContent(project.id);
  const featured = getFeaturedProjectContent(project.id);
  const paidCreatives = (project.adsCarousel || []).filter((image) => !image.title.includes('AI Readiness'));
  // Images are picked by file name (never by title text) so translated titles can't break the layout.
  const adByFile = (key: string) => paidCreatives.find((image) => (image.key || '').includes(key));
  const messagingTestAds = [adByFile('b2b-ebook4-ad-01'), adByFile('b2b-ebook4-ad-02')].filter(Boolean) as NonNullable<typeof project.adsCarousel>;
  const adsOther = [adByFile('b2b-ad-workforce-ebook'), adByFile('b2b-ad-ebook2-1'), adByFile('b2b-ad-ebook2-2')].filter(Boolean) as NonNullable<typeof project.adsCarousel>;
  const moreEmails = (project.abmSequence || []).slice(1, 5);
  const representativeEmails = [project.abmSequence?.[0], project.abmSequence?.[5]].filter(Boolean) as NonNullable<typeof project.abmSequence>;
  const serviceLp = project.galleryImages?.find((image) => (image.key || '').includes('b2b-ldp-hero'));
  const roi = project.galleryImages?.find((image) => (image.key || '').includes('b2b-ldp-roi-calculator'));
  const lpMain = (project.galleryImages || []).find((image) => (image.key || '').includes('b2b-ebook4-ldp')); // one ebook landing page is enough: all ebooks share the same template
  const b2bShots = (project.galleryImages || []).filter((image) => /b2b-ldp-(flow|ai|solution)/.test(image.key || ''));
  const seoArticles = (project.galleryImages || []).filter((image) => (image.key || '').includes('b2b-seo-article'));
  const linkedinPosts = (project.galleryImages || []).filter((image) => (image.key || '').includes('b2b-linkedin'));
  const ebookTopics = featured.context.filter((item) => item.startsWith('•')).map((item) => item.replace(/^•\s*/, ''));
  const ebookNote = featured.context.filter((item) => !item.startsWith('•')).slice(-1)[0];
  const lawAds = [
    { tag: 'Quảng cáo #1 · Ảnh đơn', head: 'Rủi ro nằm ở cách thực thi', body: 'Doanh nghiệp đã “cập nhật quy định” vẫn có thể phát sinh rủi ro: chưa rà lại nhóm lao động theo mức lương mới, dữ liệu BHTN chưa đối chiếu đủ, dữ liệu nhân sự còn phân tán. Angle lấy từ bốn nhóm rủi ro ở phần mở đầu ebook.' },
    { tag: 'Quảng cáo #2 · Carousel', head: 'Biết mình đã làm đến đâu', body: 'Doanh nghiệp đã triển khai nhưng chưa rõ còn thiếu gì, nên quảng cáo giới thiệu checklist 27 điểm, ma trận rủi ro và lộ trình 30–60–90 ngày như một công cụ tự rà soát.' },
  ];

  const { open, toggle, detailsId } = useCaseDetails(`project-${project.id}`);
  const [stage, setStage] = React.useState(0);
  const goStage = (next: number) => {
    setStage(next);
    requestAnimationFrame(() => document.getElementById('b2b-stage-tabs')?.scrollIntoView({ block: 'start', behavior: 'smooth' }));
  };

  return (
    <article id={`project-${project.id}`} className="flagship-case scroll-mt-28 pt-14 sm:pt-16 md:pt-20 pb-0">
      <div className="space-y-12 md:space-y-16">
        {/* 01 — Project overview (context merged in) */}
        <section className="space-y-7 md:space-y-8 rounded-[28px] bg-[#E6EEF7] px-5 sm:px-8 lg:px-10 py-8 sm:py-10 lg:py-12">
          <div className="grid lg:grid-cols-12 gap-x-10 gap-y-6 items-center">
            <div className="lg:col-span-7 space-y-4">
              <ProjectMeta project={project} index={0} />
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] font-mono-code uppercase tracking-[0.16em] text-[#0D9488]">Case chính 01 · Content Funnel · Lead Generation <span className="normal-case tracking-normal rounded-full bg-[#0F766E] px-2.5 py-0.5 text-[10px] font-semibold text-white">Nên xem trước</span></div>
              <h3 className="font-serif-title text-[28px] sm:text-[32px] lg:text-[42px] leading-[1.05] text-[#0F172A] text-balance">{content.displayTitle}</h3>
              <p className="text-base text-[#475569] leading-relaxed text-pretty">{featured.overview}</p>            </div>
            {serviceLp?.url && (
              <div className="lg:col-span-5">
                <button type="button" onClick={() => onZoom(serviceLp.url, 'Landing page dịch vụ B2B của 1Office')} aria-label="Phóng to landing page dịch vụ B2B" className="block w-full overflow-hidden rounded-2xl border border-[#DCE4EE] bg-white shadow-[0_18px_40px_-24px_rgba(22,59,101,0.45)] cursor-zoom-in">
                  <img src={serviceLp.url} alt="Landing page dịch vụ B2B của 1Office" {...imgSize(serviceLp.url)} className="block w-full h-auto" />
                </button>
                <p className="mt-2 text-[11px] text-[#526179]">Landing page dịch vụ B2B · bấm để phóng to</p>
              </div>
            )}
          </div>

          <div className="space-y-4">
              <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {ebookTopics.map((item, i) => (
                  <li key={item} className="flex gap-3 rounded-xl border border-[#DCE4EE] bg-white/80 px-4 py-3 text-sm text-[#334155] leading-snug">
                    <span className="font-mono-code text-[11px] text-[#0D9488] pt-0.5">0{i + 1}</span><span>{item}</span>
                  </li>
                ))}
              </ol>
              {ebookNote && <p className="text-sm text-[#526179] leading-relaxed text-pretty">{ebookNote}</p>}
              <div className="flex flex-wrap gap-3">
                <LabCta project={project} onOpenLab={onOpenLab} />
                {project.externalUrl && (
                  <a href={project.externalUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 min-h-[44px] py-2.5 rounded-xl bg-[#163B65] text-white text-xs font-semibold hover:bg-[#11263E] transition-colors">
                    <ExternalLink className="w-4 h-4" /> {project.linkText || 'Xem bản live'}
                  </a>
                )}
              </div>

          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 rounded-2xl border border-[#DCE4EE] bg-white/70 divide-x divide-y lg:divide-y-0 divide-[#DCE4EE] overflow-hidden">
            {[['Ebook', '3 ebook'], ['Landing page', '3 ebook + 1 B2B'], ['FB Ads · ebook Luật LĐ', '237 lead L1'], ['Landing page · ebook Luật LĐ', '82 lead L1']].map(([label, value]) => (
              <div key={label} className="px-4 py-4 sm:px-5">
 <div className="text-[10px] uppercase tracking-[0.12em] text-[#526179]">{label}</div>
                <div className="mt-1.5  text-base sm:text-lg font-bold text-[#163B65]">{value}</div>
              </div>
            ))}
          </div>

          <p className="-mt-3 text-[11px] text-[#526179] leading-relaxed">Số liệu tính đến 10/2026; ebook Luật Lao động vẫn đang chạy nên con số có thể thay đổi.</p>

          <div>
            <SectionLabel>Vai trò của tôi</SectionLabel>
            <ul className="grid md:grid-cols-3 gap-4">
              {(featured.contributionBullets || content.contributionBullets).map((item, i) => (
                <li key={i} className="flex gap-3 rounded-xl bg-white/70 border border-[#DCE4EE] px-4 py-3.5 text-sm sm:text-[15px] text-[#334155] leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#0D9488] shrink-0" /><span className="text-pretty">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <CaseToggle open={open} onToggle={toggle} controls={detailsId} />
        </section>

        {open && (
        <div id={detailsId} className="space-y-12 md:space-y-16">
        {/* 02 — Channel execution */}
        <section className="border-y border-[#CBD5E1]">
          <div className="py-7 sm:py-8 border-b border-[#DCE4EE]">
            <SectionLabel>Channel execution</SectionLabel>
            <h4 className="font-serif-title text-2xl sm:text-3xl md:text-4xl text-[#0F172A]">Bốn touchpoint, một hành trình nội dung</h4>
          </div>
          <div id="b2b-stage-tabs" role="tablist" aria-label="Các giai đoạn của funnel" onKeyDown={onTabKeyDown} className="scroll-mt-40 grid grid-cols-2 md:grid-cols-4 border-b border-[#DCE4EE]">
            {B2B_STAGES.map((name, i) => (
              <button key={name} id={`b2b-tab-${i}`} type="button" role="tab" aria-selected={stage === i} aria-controls={`b2b-panel-${i}`} tabIndex={stage === i ? 0 : -1} onClick={() => setStage(i)} className={`text-left px-4 py-4 -mb-px border-b-2 transition-colors ${stage === i ? 'border-[#163B65] bg-white/70 text-[#0F172A]' : 'border-transparent text-[#526179] hover:text-[#163B65]'}`}>
                <span className="block text-[10px] font-mono-code tracking-[0.14em] text-[#0D9488]">0{i + 1}</span>
                <span className="block text-sm font-semibold">{name}</span>
              </button>
            ))}
          </div>


          <B2BStage index={1} label="Acquisition" title="Social mở vấn đề và kéo đúng nhóm người đọc vào funnel" active={stage} onGo={goStage}>
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              <div className="lg:col-span-5 space-y-6">
                <p className="text-base text-[#475569] leading-relaxed text-pretty"><span className="font-semibold text-[#0F172A]">Ví dụ: ebook Luật Lao động 2026. </span>Hai quảng cáo Facebook của ebook này không bao gồm toàn bộ nội dung pháp lý, mà mỗi bài chọn một vấn đề cụ thể, dễ nhận ra trong vận hành.</p>
                {lawAds.map((ad) => (
                  <div key={ad.tag} className="border-l-2 border-[#0D9488] pl-4">
 <div className="text-[10px] uppercase tracking-[0.14em] text-[#0D9488] mb-1.5">{ad.tag}</div>
                    <div className="font-serif-title text-xl text-[#0F172A] leading-snug mb-2">{ad.head}</div>
                    <p className="text-sm text-[#526179] leading-relaxed text-pretty">{ad.body}</p>
                  </div>
                ))}
              </div>
              <div className="lg:col-span-7 grid grid-cols-2 gap-5">
                {messagingTestAds.map((image) => <FixedShot key={image.url} src={image.url} title={image.title} onZoom={onZoom} frame="h-[300px] sm:h-[380px] lg:h-[440px]" caption={null} />)}
              </div>
            </div>

            {adsOther.length > 0 && (
              <div className="mt-10 pt-8 border-t border-dashed border-[#CBD5E1] grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                <p className="lg:col-span-4 text-base text-[#475569] leading-relaxed text-pretty"><span className="font-semibold text-[#0F172A]">Các ebook khác. </span>Với content Facebook Ads quảng cáo cho ebook, team yêu cầu có 1 bài Leadform và 1 bài dẫn link sang bài SEO. Tôi đề xuất chạy song song hai phương án: ảnh đơn nêu thẳng vấn đề người đọc đang gặp và dẫn vào leadform hoặc landing page; carousel nêu vấn đề hoặc kết quả và dẫn sang bài SEO. Ebook Kiểm soát tiến độ &amp; chi phí dự án thể hiện rõ nhất hai phương án này.</p>
                <div className="lg:col-span-8 grid sm:grid-cols-3 gap-5 items-start">
                  {adsOther.map((image) => <FixedShot key={image.url} src={image.url} title={image.title} subtitle={image.subtitle} onZoom={onZoom} frame="h-[360px]" />)}
                </div>
              </div>
            )}

            {linkedinPosts.length > 0 && (
              <div className="mt-10 pt-8 border-t border-dashed border-[#CBD5E1] grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                <p className="lg:col-span-4 text-base text-[#475569] leading-relaxed text-pretty"><span className="font-semibold text-[#0F172A]">LinkedIn &amp; Zalo. </span>LinkedIn viết theo góc nhìn của người ra quyết định, giọng chuyên nghiệp và mang tính tư vấn chuyên môn; Zalo là dạng broadcast, ngắn gọn hơn và đi thẳng vào ý chính.</p>
                <div className="lg:col-span-8 grid sm:grid-cols-2 gap-5 items-start">
                  {linkedinPosts.map((image) => <FixedShot key={image.url} src={image.url} title={image.title} subtitle={image.subtitle} onZoom={onZoom} frame="h-[360px]" />)}
                </div>
              </div>
            )}
          </B2BStage>

          <B2BStage index={2} label="Conversion" title="Landing page biến sự quan tâm thành lý do để hành động" active={stage} onGo={goStage}>
            {lpMain && (
              <div className="mt-6 grid md:grid-cols-12 gap-6 lg:gap-10 items-center">
                <p className="md:col-span-5 text-base text-[#475569] leading-relaxed text-pretty"><span className="font-semibold text-[#0F172A]">Landing page: </span>cụ thể hơn quảng cáo, trả lời được người đọc sẽ nhận gì, ebook khác bài blog ở điểm nào và nút đăng ký nên đặt ở đâu để không cắt mạch đọc.</p>
                <div className="md:col-span-7"><FixedShot src={lpMain.url} title={lpMain.title} subtitle={lpMain.subtitle} onZoom={onZoom} frame="aspect-[16/10]" /></div>
              </div>
            )}
            {roi && (
              <div className="mt-10 pt-8 border-t border-dashed border-[#CBD5E1] grid md:grid-cols-12 gap-6 lg:gap-10 items-center">
                <p className="md:col-span-5 text-base text-[#475569] leading-relaxed text-pretty"><span className="font-semibold text-[#0F172A]">Landing page B2B. </span>ROI Calculator biến lời giới thiệu “nền tảng toàn diện” thành một phép so sánh cụ thể giữa chi phí công cụ rời rạc và chi phí gói 1Office.</p>
                <div className="md:col-span-7"><ArtifactFigure src={roi.url} title={roi.title} subtitle={roi.subtitle} onZoom={onZoom} variant="browser" /></div>
              </div>
            )}
            {b2bShots.length > 0 && (
              <EvidenceFold label="Xem chi tiết landing page B2B (3 ảnh)">
                <p className="text-xs text-[#526179]">Bấm ảnh để xem đầy đủ.</p>
                <div className="grid gap-3 sm:grid-cols-3">
                  {b2bShots.map((image) => (
                    <figure key={image.url} className="min-w-0">
                      <button
                        type="button"
                        onClick={() => onZoom(image.url, image.title)}
                        aria-label={image.title}
                        className="block w-full rounded-xl border border-[#DCE4EE] bg-[#F8FAFC] p-2 hover:border-[#0D9488] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D9488] transition-colors cursor-zoom-in"
                      >
                        <img src={image.url} alt={image.title} {...imgSize(image.url)} loading="lazy" className="w-full h-36 md:h-40 object-contain" />
                      </button>
                      <figcaption className="mt-2 text-xs font-medium text-[#475569]">{image.title.split(' — ')[1] || image.title}</figcaption>
                    </figure>
                  ))}
                </div>
              </EvidenceFold>
            )}
          </B2BStage>

          <B2BStage index={3} label="Lead Nurture" title="ABM sequence nối tiếp mạch giá trị sau khi thu lead" active={stage} onGo={goStage}>
            <p className="text-base text-[#475569] leading-relaxed text-pretty"><span className="font-semibold text-[#0F172A]">Email: </span>kế thừa tệp lead từ ebook để nurture, đi từ giai đoạn nhận ra vấn đề, hệ quả, case thành công thực tế, tự đánh giá đến giới thiệu giải pháp.</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-5 items-start">
              {representativeEmails.map((image, index) => <ArtifactFigure key={image.url} src={image.url} title={`${index === 0 ? '01' : '06'} · ${image.title}`} subtitle={image.subtitle} onZoom={onZoom} frame="email" />)}
            </div>
            {moreEmails.length > 0 && (
              <EvidenceFold label="Xem thêm · Email 2–5">
                <div className="grid sm:grid-cols-2 gap-5 items-start">
                  {moreEmails.map((image, index) => <ArtifactFigure key={image.url} src={image.url} title={`0${index + 2} · ${image.title}`} subtitle={image.subtitle} onZoom={onZoom} frame="email" />)}
                </div>
              </EvidenceFold>
            )}
          </B2BStage>

          {seoArticles.length > 0 && (
            <B2BStage index={4} label="Organic SEO" title="SEO như một lớp nhu cầu chủ động" active={stage} onGo={goStage}>
              <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                <p className="lg:col-span-4 text-base text-[#475569] leading-relaxed text-pretty">Song song với các ebook, tôi viết 2–3 bài SEO/ngày và thực hiện onpage. Phần việc này giúp tôi nhìn rõ hơn search intent: người dùng đang chủ động tìm gì và nội dung cần trả lời điều đó ra sao.</p>
                <div className="lg:col-span-8 grid sm:grid-cols-2 gap-5 items-start">
                  {seoArticles.map((article) => <FixedShot key={article.url} src={article.url} title={article.title} subtitle={article.subtitle} onZoom={onZoom} frame="aspect-[4/3]" fit="cover" />)}
                </div>
              </div>
            </B2BStage>
          )}
        </section>

        {/* 03 — Takeaway */}
        <section>
          <ContentClosing content={content} />
        </section>
        <CaseToggle open={open} onToggle={toggle} controls={detailsId} />
        </div>
        )}
      </div>
    </article>
  );
};


export const DreamAnchor = ({ project, onZoom }: { project: ExtendedProject; onZoom: (src: string, title: string) => void; }) => {
  const content = getProjectContent(project.id);
  const images = project.galleryImages || [];
  const journey = images.find((i) => (i.key || '').includes('dream-christmas-journey')) || images[1] || images[0];
  const operatingVisuals = images.filter((i) => (i.key || '').includes('dream-christmas-operating-flow'));
  const trainingVisual = images.find((i) => (i.key || '').includes('dream-christmas-training-script'));
  const implementationVisual = images.find((i) => (i.key || '').includes('dream-christmas-cover')) || images[0];
  const { open, toggle, detailsId } = useCaseDetails(`project-${project.id}`);

  return (
    <article id={`project-${project.id}`} className="flagship-case scroll-mt-28 pt-14 sm:pt-16 md:pt-20 pb-0">
      <div className="space-y-12 md:space-y-16">
        {/* 01 — Project overview */}
        <section className="space-y-7 md:space-y-8 rounded-[28px] bg-[#E6EEF7] px-5 sm:px-8 lg:px-10 py-8 sm:py-10 lg:py-12">
          <div className="grid lg:grid-cols-12 gap-x-12 gap-y-6 items-start">
            <div className="lg:col-span-7 space-y-3">
              <ProjectMeta project={project} index={1}/>
              <div className="text-[11px] font-mono-code uppercase tracking-[0.16em] text-[#0D9488]">Case chính 02 · Campaign Experience</div>
              <h3 className="font-serif-title text-[28px] sm:text-[32px] lg:text-[42px] leading-[1.05] text-[#0F172A]">{content.displayTitle}</h3>
            </div>
                        {implementationVisual?.url && (
              <div className="order-2 lg:order-none lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:row-span-2 lg:self-stretch">
                <CaseCover src={implementationVisual?.url} alt="Tài liệu hướng dẫn triển khai Dream Christmas Delivery" position="center" className="aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[280px]" />
              </div>
            )}
            <div className="order-3 lg:order-none lg:col-span-7"><p className="text-base text-[#475569] leading-relaxed max-w-[62ch]">{content.overview}</p></div>
          </div>
          <MetricStrip project={project}/>
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-5"><SectionLabel>Output</SectionLabel><ContentParagraphs paragraphs={content.context}/></div>
            <div className="lg:col-span-7 lg:border-l lg:border-[#DCE4EE] lg:pl-8"><SectionLabel>Phần tôi trực tiếp đóng góp</SectionLabel><ContentContribution content={content}/></div>
          </div>
          <CaseToggle open={open} onToggle={toggle} controls={detailsId} />
        </section>

        {open && (
        <div id={detailsId} className="space-y-12 md:space-y-16">
        {/* 02 — Customer journey */}
        {journey && (
          <section className="space-y-5">
            <div><SectionLabel>Customer journey</SectionLabel><h4 className="font-serif-title text-2xl sm:text-3xl text-[#0F172A]">Hành trình khách hàng</h4><p className="mt-3 text-base text-[#475569] leading-relaxed text-pretty">Với khách hàng, Dream Christmas là một hành trình gồm nhiều bước nối tiếp nhau: Mua sắm → kiểm tra điều kiện → được tiếp nhận tại quầy → chọn phương án gói hoặc giao quà → được bàn giao qua nhiều đầu mối → hoàn tất.</p></div>
            <ArtifactFigure src={journey.url} title={journey.title} subtitle={journey.subtitle} onZoom={onZoom} frame="wide" mobileZoomHint/>
            <p className="text-sm text-[#526179] leading-relaxed text-pretty">Khi chương trình được triển khai đồng thời ở nhiều TTTM, mỗi bước cần dễ hiểu và rõ ràng để tất cả các bên liên quan đều hiểu khách hàng đang ở giai đoạn nào và ai phụ trách công việc tiếp theo. Vì vậy, tôi bắt đầu từ góc nhìn của khách hàng, xây dựng hành trình theo các giai đoạn trước, trong và sau khi khách đến quầy, rồi mới đi sâu vào phần vận hành nội bộ.</p>
          </section>
        )}

        {/* 03 — From experience to operations */}
        <section className="border-y border-[#CBD5E1] py-7 sm:py-8 md:py-10">
          <div className="mb-7 md:mb-8">
            <SectionLabel>From experience to operations</SectionLabel>
            <h4 className="font-serif-title text-2xl sm:text-3xl md:text-4xl text-[#0F172A]">Điểm dễ phát sinh sai sót nhất: PG bàn giao cho BQL</h4>
          </div>
          <p className="text-base text-[#475569] leading-relaxed text-pretty">Bộ tài liệu hướng dẫn cũng dự liệu các tình huống phát sinh. Khách được chỉnh sửa thông tin giao hàng tối đa 3 lần, vượt quá sẽ được thông báo và hoàn trả nhằm hạn chế trục lợi, kèm theo kịch bản trả lời khi quà bị thất lạc, hư hỏng hoặc đóng gói sai yêu cầu.</p>
          {(operatingVisuals.length > 0 || trainingVisual) && (
            <div className="mt-6 grid sm:grid-cols-2 gap-5 items-start">
                {operatingVisuals.map((visual) => <ArtifactFigure key={visual.url} src={visual.url} title={visual.title} subtitle={visual.subtitle} onZoom={onZoom} variant="dashboard" />)}
                {trainingVisual && <ArtifactFigure src={trainingVisual.url} title={trainingVisual.title} subtitle={trainingVisual.subtitle} onZoom={onZoom} variant="dashboard" />}
                <div className="space-y-3 rounded-2xl border border-[#DCE4EE] bg-white/70 p-5 sm:p-6"><p className="text-sm text-[#475569] leading-relaxed text-pretty">PG là người tạo đơn và điền biểu mẫu, còn BQL kiểm tra, xác nhận và giao đơn cho tài xế. Nếu hai bên không đối chiếu đúng thời điểm, đơn hàng có thể sai thông tin người nhận, sai hạn mức hoặc bị lợi dụng để trục lợi.</p><p className="text-sm text-[#475569] leading-relaxed text-pretty">Để giảm rủi ro này, cần có bước đối chiếu ngay tại điểm bàn giao và kiểm tra hạn mức tài khoản đặt xe vào đầu ngày và cuối ngày. Nhờ vậy, mọi chênh lệch được phát hiện trước khi đơn được xác nhận hoàn tất, thay vì chỉ nhắc chung chung là “cần kiểm tra kỹ”.</p></div>
              </div>
          )}
          </section>
          <CaseToggle open={open} onToggle={toggle} controls={detailsId} />
        </div>
        )}
      </div>
    </article>
  );
};


export const TikTokAnchor = ({ project, onZoom: _onZoom }: { project: ExtendedProject; onZoom: (src: string, title: string) => void; }) => {
  const content = getProjectContent(project.id);
  const videos = project.tiktokVideos || [];
  const heroVideo = videos.find((video) => video.title.includes('THE LITTY')) || videos[0];
  const supportingVideos = videos.filter((video) => video !== heroVideo);

  const SupportingVideoGrid = () => (
    <div className="horizontal-scroll -mx-1 px-1 flex gap-3 md:gap-4 overflow-x-auto snap-x snap-mandatory pb-2 lg:grid lg:grid-cols-5 lg:overflow-visible lg:pb-0">
      {supportingVideos.map((video,idx)=>(
        <a key={video.url} href={video.url} target="_blank" rel="noopener noreferrer" aria-label={video.title + ' — mở video TikTok'} className="group snap-start shrink-0 w-[46%] sm:w-[30%] lg:w-auto flex flex-col rounded-xl border border-[#DCE4EE] bg-white overflow-hidden hover:-translate-y-0.5 hover:border-[#0D9488]/35 transition-all">
          <img src={video.thumbnail} alt={video.title} width={633} height={844} loading="lazy" className="w-full aspect-[3/4] object-cover group-hover:scale-[1.02] transition-transform duration-300" />
          <div className="flex flex-1 flex-col p-3">
 <div className="flex items-center justify-between gap-2 text-[11px] "><span className="text-[#0D9488]">0{idx+2}</span><span className="text-[#94A3B8]">Vincom TikTok</span></div>
            <div className="mt-2 text-[13px] font-semibold text-[#0F172A] leading-snug">{video.title}</div>
            <div className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-[#163B65]">Mở video TikTok <ExternalLink className="w-3 h-3"/></div>
          </div>
        </a>
      ))}
    </div>
  );

  return (
    <article id={`project-${project.id}`} className="flagship-case scroll-mt-28 py-14 sm:py-16 md:py-20 border-t border-[#DCE4EE]">
      <div className="space-y-8 md:space-y-10">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-end">
          <div className="lg:col-span-7 space-y-3">
            <ProjectMeta project={project} index={5}/>
 <div className="text-[11px] uppercase tracking-[0.16em] text-[#0D9488]">Short-form Content</div>
            <h3 className="font-serif-title text-[28px] sm:text-[32px] lg:text-[42px] leading-[1.05] text-[#0F172A]">{content.displayTitle}</h3>
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 gap-3">
            {(project.evidence?.metrics || []).filter((metric) => !/tổng/i.test(metric.label)).map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-[#DCE4EE] bg-white/70 px-4 py-3.5">
 <div className="text-[10px] uppercase tracking-[0.14em] text-[#526179]">{metric.label}</div>
                <div className="mt-1  text-lg font-semibold text-[#0F172A] leading-snug">{metric.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <SectionLabel>Thử thách</SectionLabel>
          {content.context.map((paragraph) => <p key={paragraph} className="text-base text-[#475569] leading-relaxed text-pretty">{paragraph}</p>)}
        </div>

        <div className="rounded-3xl border border-[#DCE4EE] bg-gradient-to-r from-[#0F172A] to-[#163B65] p-6 sm:p-8 text-white">
          <div className="grid md:grid-cols-2 gap-5 md:gap-10 items-center">
            <div>
 <div className="text-[10px] uppercase tracking-[0.15em] text-white/50 mb-2">Kết quả</div>
              <div className="font-serif-title text-2xl sm:text-3xl leading-tight text-balance">Một format giống nhau không tạo ra cùng một phản ứng.</div>
            </div>
            <p className="text-base text-white/75 leading-relaxed text-pretty">Sáu video đạt tổng 241K+ lượt xem organic, nhưng hiệu quả rất khác nhau: THE LITTY đạt 225.1K lượt xem và chiếm phần lớn tổng, trong khi năm video còn lại từ 1.7K đến 4.3K.</p>
          </div>
        </div>

        <div>
          <div className="grid md:grid-cols-[220px_1fr] gap-6 md:gap-10 items-center border-y border-[#CBD5E1] py-6 sm:py-8">
            {heroVideo && <a href={heroVideo.url} target="_blank" rel="noopener noreferrer" className="group block max-w-[220px] overflow-hidden rounded-2xl border border-[#DCE4EE] bg-white shadow-[0_16px_42px_-32px_rgba(15,23,42,.28)]">
              <img src={heroVideo.thumbnail} alt={heroVideo.title} width={633} height={844} loading="lazy" className="w-full aspect-[3/4] object-cover group-hover:scale-[1.02] transition-transform duration-300" />
              <div className="p-3">
                <div className="flex items-center gap-2 text-[11px] font-mono-code"><span className="text-[#0D9488]">01</span><span className="text-[#94A3B8]">Vincom TikTok</span></div>
                <div className="mt-1.5 text-[13px] font-semibold text-[#0F172A] leading-snug">{heroVideo.title}</div>
                <div className="mt-2 flex items-end justify-between gap-2"><span className="text-2xl leading-none font-semibold text-[#0F172A]">{heroVideo.views}</span><span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#163B65]">Mở video <ExternalLink className="w-3 h-3"/></span></div>
              </div>
            </a>}
            <div>
              <SectionLabel>Điều tôi rút ra</SectionLabel>
              <p className="text-base text-[#475569] leading-relaxed text-pretty">Cùng một kênh và cách sản xuất tương đối giống nhau, chủ đề và cách framing vẫn có thể tạo ra phản ứng rất khác từ người xem. Vì vậy, dự án này với tôi không chỉ là bằng chứng về khâu sản xuất, mà còn cho thấy content strategy cần được kiểm chứng bằng phản ứng thực tế của người xem, và mỗi video nên được đọc như một tín hiệu riêng thay vì gộp vào một con số tổng.</p>
            </div>
          </div>

          {supportingVideos.length > 0 && (
            <details open className="group mt-6 rounded-xl border border-[#DCE4EE] bg-white overflow-hidden">
 <summary className="cursor-pointer list-none min-h-[44px] px-4 py-3 flex items-center justify-between gap-3 text-xs font-semibold text-[#163B65]"><span>Xem 5 video còn lại</span><span className="text-[10px] uppercase tracking-[0.12em] text-[#526179] group-open:hidden">Mở xem</span><span className="text-[10px] uppercase tracking-[0.12em] text-[#526179] hidden group-open:inline">Thu gọn</span></summary>
              <div className="p-4 border-t border-[#DCE4EE]"><SupportingVideoGrid/></div>
            </details>
          )}
        </div>
        <ScopeNote content={content}/>
      </div>
    </article>
  );
};

