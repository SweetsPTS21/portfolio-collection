import React from 'react';

export default function PulpCard({ children, className = '', hasClip = false, ...props }) {
  return (
    <div 
      className={`pulp-card p-6 md:p-8 rounded-[24px_8px_24px_8px] relative ${className}`}
      {...props}
    >
      {/* Decorative brass paper clip if hasClip is true */}
      {hasClip && (
        <div 
          className="absolute -top-2 left-8 w-12 h-8 z-10 pointer-events-none transform rotate-3"
          style={{
            backgroundImage: `url('./src/assets/botanical/specimen-paper-clips.svg')`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat'
          }}
        />
      )}
      
      {/* Fine inner gold double border */}
      <div className="card-double-border" />
      
      {/* Faint botanical leaf watermark pressed inside paper */}
      <div className="card-leaf-watermark" />
      
      {/* Fine organic fiber dot highlights */}
      <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-[#588157] opacity-[0.08] pointer-events-none z-0" />
      <div className="absolute bottom-6 left-6 w-1 h-1 rounded-full bg-[#D6A25F] opacity-[0.12] pointer-events-none z-0" />
      
      {/* Actual card content */}
      <div className="relative z-1">
        {children}
      </div>
    </div>
  );
}
