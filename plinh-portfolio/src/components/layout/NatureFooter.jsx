import React from 'react';
import { personalInfo } from '../../data/portfolioData';

export default function NatureFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative z-10 border-t border-[#A3B18A]/30 py-8 px-6 md:px-12 bg-[#DAD7CD]/20 text-center flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3 justify-center md:justify-start">
        {/* Seal Stamp */}
        <div 
          className="w-12 h-12 flex-shrink-0"
          style={{
            backgroundImage: `url('./src/assets/botanical/legal-leaf-seal.svg')`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div className="text-left">
          <p className="font-bold text-sm text-[#3A5A40] leading-tight">Đặng Phương Linh</p>
          <p className="text-xs text-[#588157]">Lớp K69LKD-C • Luật Kinh doanh • Trường Đại học Luật - ĐHQGHN</p>
        </div>
      </div>
      
      <div className="text-xs text-[#588157]/80">
        <p>© {currentYear} plinh-portfolio. Thiết kế dạng Nhật ký Lá xanh tự nhiên.</p>
        <p className="mt-0.5">Tôn trọng chất xám • Tự nghĩ, tự làm</p>
      </div>
    </footer>
  );
}
