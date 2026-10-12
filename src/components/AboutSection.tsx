import React from 'react';
import { GraduationCap, Languages, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { CERTIFICATIONS, PERSONAL_INFO } from '../data/portfolioData';

const university = PERSONAL_INFO.education[0];
const hsk = CERTIFICATIONS.find((cert) => cert.name.includes('HSK5'));
const toeic = CERTIFICATIONS.find((cert) => cert.name.includes('TOEIC'));
const mos = CERTIFICATIONS.filter((cert) => cert.name.includes('MOS'));

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-14 sm:py-16 md:py-20 bg-[#F1F5F9] border-b border-[#DCE4EE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="lg:col-span-5 space-y-5">
            <div>
              <h2 className="font-serif-title text-[30px] sm:text-4xl lg:text-5xl font-normal text-[#0F172A] leading-[1.08]">
                About
              </h2>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#CBD5E1] shadow-sm">
              <div className="inline-flex items-center gap-2 text-[10px] font-mono-code uppercase tracking-[0.14em] text-[#0D9488] font-semibold mb-4">
                <Sparkles className="w-3.5 h-3.5" /> Cách tôi làm việc
              </div>
              <p className="text-sm sm:text-[15px] text-[#475569] leading-relaxed" style={{ whiteSpace: 'pre-line' }}>{PERSONAL_INFO.bio}</p>
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2 text-[11px] font-mono-code uppercase tracking-[0.14em] text-[#526179] font-semibold border-b border-[#CBD5E1] pb-2">Background &amp; Credentials</div>
            {university && (
              <div className="sm:col-span-2 p-5 sm:p-6 rounded-2xl bg-white border border-[#CBD5E1]">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#163B65]/10 text-[#163B65] flex items-center justify-center shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div>
                        <div className="text-[10px] font-mono-code uppercase tracking-[0.14em] text-[#526179] mb-1">Education</div>
                        <h3 className="font-serif-title text-xl sm:text-2xl text-[#0F172A]">{university.school}</h3>
                        <p className="text-sm font-medium text-[#163B65] mt-1">{university.major}</p>
                      </div>
                      <span className="w-max shrink-0 whitespace-nowrap text-[11px] font-mono-code px-3 py-1.5 rounded-full bg-[#E8F0F8] text-[#11263E] font-semibold">{university.gpa}</span>
                    </div>
                    <p className="text-xs text-[#526179] mt-3">{university.period}</p>
                  </div>
                </div>
              </div>
            )}

            {hsk && (
              <div className="p-5 rounded-2xl bg-white border border-[#CBD5E1]">
                <div className="flex items-center gap-3 mb-4">
                  <Languages className="w-5 h-5 text-[#0D9488]" />
                  <div className="text-[10px] font-mono-code uppercase tracking-[0.14em] text-[#526179]">Language</div>
                </div>
                <h3 className="text-sm font-semibold text-[#0F172A]">Tiếng Trung · HSK5</h3>
                <div className="font-tech-display text-2xl font-bold text-[#163B65] mt-2">{hsk.score}</div>
                <p className="text-[11px] text-[#94A3B8] mt-2">09/2018 – 07/2021 · THPT Chuyên Thái Nguyên · Lớp chuyên tiếng Trung</p>
              </div>
            )}

            {toeic && (
              <div className="p-5 rounded-2xl bg-white border border-[#CBD5E1]">
                <div className="flex items-center gap-3 mb-4">
                  <Languages className="w-5 h-5 text-[#0D9488]" />
                  <div className="text-[10px] font-mono-code uppercase tracking-[0.14em] text-[#526179]">Language</div>
                </div>
                <h3 className="text-sm font-semibold text-[#0F172A]">Tiếng Anh · TOEIC</h3>
                <div className="font-tech-display text-2xl font-bold text-[#163B65] mt-2">{toeic.score}</div>
              </div>
            )}

            {mos.length > 0 && (
              <div className="sm:col-span-2 flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-white border border-[#CBD5E1]">
                <ShieldCheck className="w-4 h-4 text-[#163B65] shrink-0" />
                <p className="text-xs text-[#526179]">
                  <span className="font-semibold text-[#0F172A]">MOS 2019</span>
                  {' — '}
                  {mos.map((cert) => `${cert.name.replace('Tin học văn phòng MOS ', '').replace(' 2019', '')} ${cert.score.split(' / ')[0]}`).join(' · ')}
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
