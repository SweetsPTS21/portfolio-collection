import React from 'react';
import { personalInfo } from '../../data/portfolioData';
import { Sparkles, User, FileText, CheckCircle2 } from 'lucide-react';

export default function BotanicalNav({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'about', label: 'Về Mình', icon: User },
    { id: 'projects', label: 'Hành Trình Số', icon: FileText },
    { id: 'conclusion', label: 'Đúc Kết & Tương Lai', icon: CheckCircle2 }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#F5F5F5]/85 backdrop-blur-md border-b border-[#A3B18A]/30 py-4 px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
      {/* Brand logo / signature */}
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveTab('about')}>
        <div className="w-8 h-8 rounded-full bg-[#588157] flex items-center justify-center text-[#F5F5F5]">
          <Sparkles className="w-4 h-4" />
        </div>
        <div className="flex flex-col">
          <span className="text-base font-bold text-[#3A5A40] leading-none tracking-tight">
            {personalInfo.name}
          </span>
          <span className="text-[10px] uppercase tracking-widest text-[#588157] font-semibold mt-0.5">
            {personalInfo.major} • Portfolio
          </span>
        </div>
      </div>

      {/* Nav Menu tabs */}
      <nav className="flex items-center gap-1 bg-[#DAD7CD]/45 p-1 rounded-full border border-[#A3B18A]/45">
        {tabs.map((tab) => {
          const TabIcon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all relative ${
                isActive 
                  ? 'text-[#F5F5F5] bg-[#588157] shadow-sm' 
                  : 'text-[#3A5A40] hover:text-[#588157] hover:bg-[#DAD7CD]/30'
              }`}
            >
              <TabIcon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
              
              {/* Bottom organic leaf indicator when active */}
              {isActive && (
                <div 
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-3.5 pointer-events-none hidden sm:block"
                  style={{
                    backgroundImage: `url('./src/assets/botanical/nav-leaf-indicator.svg')`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat'
                  }}
                />
              )}
            </button>
          );
        })}
      </nav>
    </header>
  );
}
