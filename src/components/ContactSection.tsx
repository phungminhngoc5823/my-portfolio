import React, { useEffect, useRef, useState } from 'react';
import { Check, Mail, MapPin, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

type ContactField = 'email' | 'phone';
type CopyFeedback = { field: ContactField; success: boolean };

export const ContactSection: React.FC = () => {
  const [feedback, setFeedback] = useState<CopyFeedback | null>(null);
  const resetTimer = useRef<number | null>(null);
  const phoneLabel = PERSONAL_INFO.phone.replace(/(\d{4})(\d{3})(\d{3})/, '$1 $2 $3');

  useEffect(() => () => {
    if (resetTimer.current !== null) window.clearTimeout(resetTimer.current);
  }, []);

  const handleCopy = async (field: ContactField) => {
    const value = field === 'email' ? PERSONAL_INFO.email : PERSONAL_INFO.phone;
    let success = false;

    // Clipboard API is available on HTTPS; support older browsers as a fallback.
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
        success = true;
      }
    } catch {
      // Fall back to the browser's selection-based clipboard command.
    }

    if (!success) {
      const textarea = document.createElement('textarea');
      textarea.value = value;
      textarea.readOnly = true;
      textarea.style.position = 'fixed';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      textarea.select();
      try {
        success = document.execCommand('copy');
      } catch {
        success = false;
      } finally {
        textarea.remove();
        previousFocus?.focus({ preventScroll: true });
      }
    }

    setFeedback({ field, success });
    if (resetTimer.current !== null) window.clearTimeout(resetTimer.current);
    resetTimer.current = window.setTimeout(() => setFeedback(null), 2200);
  };

  return (
    <section id="contact" aria-label="Liên hệ" className="bg-gradient-to-b from-[#163B65] to-[#0F2540] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-sm text-white/85">
          <button
            type="button"
            onClick={() => void handleCopy('email')}
            title="Sao chép email"
            className="group inline-flex min-h-[44px] max-w-full items-center gap-2 text-left cursor-copy rounded-md px-1 hover:text-white transition-colors"
          >
            {feedback?.field === 'email' && feedback.success
              ? <Check className="w-4 h-4 shrink-0 text-[#5DCAA5]" />
              : <Mail className="w-4 h-4 shrink-0 text-[#5DCAA5]" />}
            <span className="break-all group-hover:underline underline-offset-4">{PERSONAL_INFO.email}</span>
            <span aria-live="polite" className="shrink-0 text-xs text-[#5DCAA5]">
              {feedback?.field === 'email' ? (feedback.success ? 'Đã sao chép' : 'Không thể sao chép') : ''}
            </span>
          </button>

          <button
            type="button"
            onClick={() => void handleCopy('phone')}
            title="Sao chép số điện thoại"
            className="group inline-flex min-h-[44px] items-center gap-2 cursor-copy rounded-md px-1 hover:text-white transition-colors"
          >
            {feedback?.field === 'phone' && feedback.success
              ? <Check className="w-4 h-4 shrink-0 text-[#5DCAA5]" />
              : <Phone className="w-4 h-4 shrink-0 text-[#5DCAA5]" />}
            <span className="group-hover:underline underline-offset-4">{phoneLabel}</span>
            <span aria-live="polite" className="shrink-0 text-xs text-[#5DCAA5]">
              {feedback?.field === 'phone' ? (feedback.success ? 'Đã sao chép' : 'Không thể sao chép') : ''}
            </span>
          </button>

          <span className="inline-flex min-h-[44px] items-center gap-2 px-1">
            <MapPin className="w-4 h-4 shrink-0 text-[#5DCAA5]" />
            {PERSONAL_INFO.location}
          </span>
        </div>
      </div>
    </section>
  );
};
