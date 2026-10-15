import React, { useEffect, useRef, useState } from 'react';
import { scrollToAnchor } from '../utils/scrollToAnchor';
import { ArrowUpRight, Mail, Menu, Phone, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeaderProps {
  onContactClick: () => void;
}

const NAV_LINKS = [
  { name: 'Work', href: '#projects', id: 'projects' },
  { name: 'Experience', href: '#experience', id: 'experience' },
  { name: 'Lab', href: '#marketing-lab', id: 'marketing-lab' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Contact', href: '#contact', id: 'contact' },
] as const;

const SECTION_NAV_MAP = [
  { sectionId: 'projects', navId: 'projects' },
  { sectionId: 'experience', navId: 'experience' },
  { sectionId: 'skills', navId: 'experience' },
  { sectionId: 'marketing-lab', navId: 'marketing-lab' },
  { sectionId: 'about', navId: 'about' },
  { sectionId: 'contact', navId: 'contact' },
] as const;


export const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let frame = 0;
    const updateScrollState = () => {
      frame = 0;
      setIsScrolled(window.scrollY > 4);
    };
    const handleScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateScrollState);
    };
    updateScrollState();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const observedSections = SECTION_NAV_MAP.flatMap(({ sectionId, navId }) => {
      const element = document.getElementById(sectionId);
      return element ? [{ element, navId }] : [];
    });

    if (!observedSections.length) return;

    const navBySection = new Map(observedSections.map(({ element, navId }) => [element.id, navId]));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(navBySection.get(visible.target.id) || '');
      },
      { rootMargin: '-20% 0px -62% 0px', threshold: [0.01, 0.15, 0.4] },
    );

    observedSections.forEach(({ element }) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  // Keep --header-height in sync with the real header height (used by the sticky Work sub-nav).
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const setVar = () => document.documentElement.style.setProperty('--header-height', `${Math.ceil(el.getBoundingClientRect().height)}px`);
    setVar();
    const ro = new ResizeObserver(setVar);
    ro.observe(el, { box: 'border-box' });
    window.addEventListener('resize', setVar);
    return () => { ro.disconnect(); window.removeEventListener('resize', setVar); };
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <header
      ref={headerRef}
      data-sticky-layer="header"
      className={`fixed top-0 left-0 right-0 z-[70] isolate transform-gpu transition-[border-color,box-shadow,padding] duration-200 ${
        isScrolled || mobileMenuOpen
          ? 'bg-[#F8FAFC] border-b border-[#DCE4EE] shadow-[0_10px_30px_-24px_rgba(15,23,42,.35)] py-2.5'
          : 'bg-transparent border-b border-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between min-h-[44px]">
        <a href="#" className="group flex min-h-[44px] min-w-0 items-center text-left" aria-label="Về đầu trang — Phùng Minh Ngọc">
          <div className="min-w-0">
            <span className="block font-serif-title text-base sm:text-lg font-semibold text-[#0F172A] tracking-tight group-hover:text-[#163B65] transition-colors truncate">
              {PERSONAL_INFO.name}
            </span>
 <span className="block truncate text-[11px] text-[#526179] uppercase tracking-wider -mt-1">
              Marketing Portfolio
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-7" aria-label="Điều hướng chính">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToAnchor(link.href); }}
                aria-current={isActive ? 'location' : undefined}
                className={`text-sm font-medium relative py-2 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#163B65] after:transition-all after:duration-200 ${
                  isActive
                    ? 'text-[#163B65] after:w-full'
                    : 'text-[#475569] hover:text-[#163B65] after:w-0 hover:after:w-full'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
 className="text-xs px-3 py-2 rounded-full border border-[#CBD5E1] text-[#475569] hover:border-[#163B65] hover:text-[#163B65] transition-all flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            {PERSONAL_INFO.email}
          </a>
          <button
            type="button"
            onClick={onContactClick}
            className="px-4 py-2.5 rounded-lg bg-[#163B65] hover:bg-[#11263E] text-white font-medium text-xs tracking-wide shadow-xs hover:shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <span>Liên hệ công việc</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div id="lang-slot" className="md:hidden ml-auto mr-1 flex shrink-0 items-center" />
        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="md:hidden w-11 h-11 rounded-xl flex items-center justify-center text-[#0F172A] hover:text-[#163B65] hover:bg-white/70 transition-colors"
          aria-label={mobileMenuOpen ? 'Đóng menu' : 'Mở menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div id="mobile-navigation" className="md:hidden bg-[#F8FAFC] border-b border-[#DCE4EE] px-5 sm:px-6 py-5 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200 max-h-[calc(100vh-64px)] overflow-y-auto">
          <nav className="flex flex-col" aria-label="Điều hướng trên thiết bị di động">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); scrollToAnchor(link.href, 120); }}
                  aria-current={isActive ? 'location' : undefined}
                  className={`min-h-12 flex items-center justify-between text-base font-medium py-3 border-b border-[#DCE4EE]/70 transition-colors ${
                    isActive ? 'text-[#163B65]' : 'text-[#0F172A] hover:text-[#163B65]'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#0D9488]" aria-hidden="true" />}
                </a>
              );
            })}
          </nav>
          <div className="pt-4 flex flex-col gap-3">
 <a href={`tel:${PERSONAL_INFO.phone}`} className="min-h-[44px] text-sm text-[#475569] flex items-center gap-2 py-2">
              <Phone className="w-4 h-4 text-[#163B65]" />
              {PERSONAL_INFO.phone}
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onContactClick();
              }}
              className="w-full min-h-12 py-3 rounded-xl bg-[#163B65] text-white font-medium text-sm text-center shadow-xs flex items-center justify-center gap-2"
            >
              <span>Liên hệ trực tiếp</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
