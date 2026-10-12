import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

// Slim single-row footer; the back-to-top control now lives in <BackToTop /> and stays on screen.
export const Footer: React.FC = () => (
  <footer className="bg-[#0F2540] pb-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono-code text-white/70">
        <p><span className="font-semibold text-white">{PERSONAL_INFO.name}</span> · Marketing Portfolio · © {new Date().getFullYear()}</p>
        <nav className="flex items-center gap-5" aria-label="Footer">
          <a href="#projects" className="inline-flex min-h-[40px] items-center hover:text-[#5DCAA5] transition-colors">Work</a>
          <a href="#experience" className="inline-flex min-h-[40px] items-center hover:text-[#5DCAA5] transition-colors">Experience</a>
          <a href="#about" className="inline-flex min-h-[40px] items-center hover:text-[#5DCAA5] transition-colors">About</a>
          <a href="#contact" className="inline-flex min-h-[40px] items-center hover:text-[#5DCAA5] transition-colors">Contact</a>
        </nav>
      </div>
    </div>
  </footer>
);
