import React from 'react';
import { ArrowUp } from 'lucide-react';

// Always-available back-to-top, bottom-left on desktop; on mobile it sits above the language switcher so it never covers text.
export const BackToTop: React.FC = () => {
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Về đầu trang"
      className={`fixed right-3 bottom-[76px] sm:right-auto sm:left-6 sm:bottom-6 z-[60] w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#163B65] text-white shadow-lg flex items-center justify-center transition-all hover:bg-[#11263E] hover:-translate-y-0.5 cursor-pointer ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 pointer-events-none translate-y-2'}`}
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
};
