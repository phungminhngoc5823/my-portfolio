import React, { useEffect, useRef, useState } from 'react';
import { FlaskConical } from 'lucide-react';
import { LabModuleId } from '../types';

interface MarketingLabProps { activeTab: LabModuleId; }

export const MarketingLab: React.FC<MarketingLabProps> = ({ activeTab }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [frameHeight, setFrameHeight] = useState(1400);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      const data = event.data as { type?: string; height?: number; offset?: number } | undefined;
      if (event.source !== iframeRef.current?.contentWindow || !data) return;
      if (data.type === 'marketing-lab-scroll') {
        // Module switched from the footer bar: bring the top of the new module into view.
        const frame = iframeRef.current;
        if (!frame) return;
        const header = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 65;
        const top = frame.getBoundingClientRect().top + window.scrollY + (data.offset || 0) - header - 12;
        window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
        return;
      }
      if (data.type !== 'marketing-lab-height' || typeof data.height !== 'number') return;
      setFrameHeight(Math.max(560, Math.min(5200, Math.ceil(data.height))));
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  useEffect(() => {
    iframeRef.current?.contentWindow?.postMessage({ type: 'marketing-lab-station', station: activeTab }, '*');
  }, [activeTab]);

  return (
    <section id="marketing-lab" className="relative overflow-hidden bg-[#EDF2F8] text-[#0F172A] border-y border-[#DCE4EE]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-16 md:pt-20 pb-6 sm:pb-8 relative">
        <div>
            <div className="inline-flex items-center gap-2 text-[10px] font-mono-code uppercase tracking-[0.16em] text-[#0D9488] mb-4 font-semibold">
              <FlaskConical className="w-4 h-4" /> Marketing Lab
            </div>
            <h2 className="font-serif-title text-[30px] sm:text-4xl lg:text-5xl text-[#0F172A] leading-[1.08] text-balance">Tools, systems & experiments — phục vụ bài toán Marketing.</h2>
            <p className="text-base text-[#475569] leading-relaxed mt-4 text-pretty">Marketing Lab là nơi bạn có thể xem và thử các workflow, demo tôi đã xây dựng. Mỗi module bắt đầu từ một bài toán marketing, sau đó mới đến công cụ.</p>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 pb-10 sm:pb-12 md:pb-14 relative">
        <div>
          <iframe
            ref={iframeRef}
            title="Marketing Lab — interactive systems and workflow demos"
            src={`${import.meta.env.BASE_URL}marketing-lab/index.html?station=${encodeURIComponent(activeTab)}`}
            className="block w-full border-0 bg-transparent"
            style={{ height: `${frameHeight}px` }}
            loading="lazy"
            onLoad={() => iframeRef.current?.contentWindow?.postMessage({ type: 'marketing-lab-station', station: activeTab }, '*')}
          />
        </div>
      </div>
    </section>
  );
};
