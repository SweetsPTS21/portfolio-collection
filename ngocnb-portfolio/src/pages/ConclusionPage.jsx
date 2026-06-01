import React from 'react';
import PageShell from '../components/layout/PageShell';
import { conclusion } from '../data/portfolioData';
import { Award, Compass, HelpCircle, Heart, ArrowUpRight } from 'lucide-react';
import decoRibbon from '../assets/ngocnb-afternoon-coffee/deco-ribbon.svg';

export default function ConclusionPage() {
  return (
    <PageShell eyebrow="HÀNH TRÌNH SỐ" title="Tổng Kết & Trải Nghiệm">
      <div className="notebook-container">
        <div className="notebook-inner">
          {/* Left Page: Experience & Highlights */}
          <div className="notebook-page left">
            <h2 className="page-title">
              <Compass size={20} style={{ color: '#6F4E37' }} />
              Nhật Ký Trải Nghiệm
            </h2>
            <div className="lined-content">
              {conclusion.experience.map((p, idx) => (
                <p key={idx} style={{ margin: '0 0 12px', textIndent: '20px', fontSize: '0.92rem', lineHeight: '1.7', color: '#2C1E16' }}>
                  {p}
                </p>
              ))}
            </div>


            <h2 className="page-title" style={{ marginTop: '20px' }}>
              <Award size={20} style={{ color: '#6F4E37' }} />
              Điểm Tâm Đắc Nhất
            </h2>
            <ul className="bullet-list">
              {conclusion.highlights.map((highlight, idx) => (
                <li key={idx}>{highlight}</li>
              ))}
            </ul>
          </div>

          {/* Right Page: Challenges, Next Steps & Thanks */}
          <div className="notebook-page right" style={{ position: 'relative', overflow: 'hidden' }}>
            <img 
              src={decoRibbon} 
              alt="" 
              style={{ 
                position: 'absolute', 
                top: '-5px', 
                right: '-5px', 
                width: '60px', 
                opacity: 0.15, 
                pointerEvents: 'none' 
              }} 
            />
            <h2 className="page-title">

              <HelpCircle size={20} style={{ color: '#6F4E37' }} />
              Thách Thức Đối Mặt
            </h2>
            <ul className="bullet-list" style={{ marginBottom: '20px' }}>
              {conclusion.challenges.map((challenge, idx) => (
                <li key={idx}>{challenge}</li>
              ))}
            </ul>

            <h2 className="page-title">
              <ArrowUpRight size={20} style={{ color: '#6F4E37' }} />
              Hành Trang Phía Trước
            </h2>
            <div className="lined-content" style={{ paddingBottom: '10px' }}>
              <p style={{ margin: 0, fontSize: '0.92rem', color: '#2C1E16' }}>
                {conclusion.nextSteps}
              </p>
            </div>

            <div style={{ marginTop: 'auto', borderTop: '1px dashed #D4C4B7', paddingTop: '15px' }}>
              <h3 style={{ 
                fontFamily: "'Playfair Display', serif", 
                fontSize: '1.1rem', 
                margin: '0 0 6px',
                color: '#6F4E37',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <Heart size={14} style={{ fill: '#6F4E37', color: '#6F4E37' }} />
                Lời Cảm Ơn
              </h3>
              <p style={{ margin: 0, fontSize: '0.85rem', lineHeight: '1.5', color: '#8B7355', fontStyle: 'italic' }}>
                {conclusion.thanks}
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
