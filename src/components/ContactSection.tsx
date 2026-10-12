import React, { useState } from 'react';
import { ArrowUpRight, Check, Copy, Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const subject = 'Trao đổi về cơ hội Marketing';
  const mailto = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(subject)}`;
  const phoneLabel = PERSONAL_INFO.phone.replace(/(\d{4})(\d{3})(\d{3})/, '$1 $2 $3');

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      window.location.href = mailto;
    }
  };

  return (
    <section id="contact" className="bg-gradient-to-b from-[#163B65] to-[#0F2540] text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="inline-flex items-center gap-2 text-[11px] font-mono-code uppercase tracking-[0.16em] text-[#5DCAA5] mb-5">
            <span className="w-2 h-2 rounded-full bg-[#5DCAA5] animate-pulse" /> Open for opportunities
          </div>
          <h2 className="font-serif-title text-[30px] sm:text-4xl lg:text-5xl leading-[1.1] text-balance">Cùng trao đổi về bài toán Marketing bạn đang giải</h2>
          <p className="text-base sm:text-lg text-white/75 leading-relaxed mt-5 text-pretty">
            Nếu các dự án tôi đã thực hiện phù hợp với bài toán đội ngũ đang giải, tôi rất sẵn lòng trao đổi sâu hơn về cách tiếp cận và những phần việc tôi trực tiếp phụ trách.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={mailto} className="inline-flex min-h-[48px] items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#163B65] text-sm font-semibold hover:bg-[#E6EEF7] transition-colors"><Mail className="w-4 h-4" /> Gửi email <ArrowUpRight className="w-4 h-4" /></a>
            <button type="button" onClick={handleCopyEmail} className="inline-flex min-h-[48px] items-center gap-2 px-6 py-3 rounded-xl border border-white/35 text-white text-sm font-semibold hover:bg-white/10 transition-colors">
              {copied ? <Check className="w-4 h-4 text-[#5DCAA5]" /> : <Copy className="w-4 h-4" />} {copied ? 'Đã sao chép' : 'Sao chép email'}
            </button>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-white/80">
            <a href={mailto} className="inline-flex min-h-[40px] items-center gap-2 break-all hover:text-[#5DCAA5] transition-colors"><Mail className="w-4 h-4 text-[#5DCAA5]" /> {PERSONAL_INFO.email}</a>
            <a href={`tel:${PERSONAL_INFO.phone}`} className="inline-flex min-h-[40px] items-center gap-2 hover:text-[#5DCAA5] transition-colors"><Phone className="w-4 h-4 text-[#5DCAA5]" /> {phoneLabel}</a>
            <span className="inline-flex min-h-[40px] items-center gap-2"><MapPin className="w-4 h-4 text-[#5DCAA5]" /> {PERSONAL_INFO.location}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
