import React, { useEffect, useRef, useMemo, memo } from 'react';
import { themeConfig } from '../../data/portfolioData';

const SCATTER_COUNT = 30;
const MIN_ICON_SIZE = 15;
const MAX_ICON_SIZE = 40;

function SeasonalScene({ theme }) {
  const drifterRef = useRef(null);
  const intervalRef = useRef(null);
  const scatterRef = useRef(null);

  // Stable positions — never change
  const scatterPositions = useMemo(() => {
    return Array.from({ length: SCATTER_COUNT }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      rotate: Math.random() * 360,
      size: MIN_ICON_SIZE + Math.random() * (MAX_ICON_SIZE - MIN_ICON_SIZE),
      delay: Math.random() * 5,
    }));
  }, []);

  // Update scatter icon text when theme changes (no remount)
  useEffect(() => {
    const icons = themeConfig[theme]?.icons || themeConfig.spring.icons;
    if (scatterRef.current) {
      const els = scatterRef.current.querySelectorAll('.scatter-icon');
      els.forEach((el, i) => {
        el.textContent = icons[i % icons.length];
      });
    }
  }, [theme]);

  // Drifters — restart interval on theme change
  useEffect(() => {
    const container = drifterRef.current;
    if (!container) return;

    // Clear old drifters
    container.innerHTML = '';
    clearInterval(intervalRef.current);

    const icons = themeConfig[theme]?.icons || themeConfig.spring.icons;

    const createDrifter = () => {
      const emoji = icons[Math.floor(Math.random() * icons.length)];
      const el = document.createElement('span');
      el.className = 'drifter-icon';
      el.textContent = emoji;
      el.style.left = `${Math.random() * 100}%`;
      el.style.fontSize = `${20 + Math.random() * 30}px`;
      el.style.animationDuration = `${8 + Math.random() * 15}s`;
      el.style.opacity = `${0.3 + Math.random() * 0.5}`;
      container.appendChild(el);

      setTimeout(() => {
        if (el.parentNode) el.remove();
      }, 23000);
    };

    intervalRef.current = setInterval(createDrifter, 1500);

    return () => clearInterval(intervalRef.current);
  }, [theme]);

  const icons = themeConfig[theme]?.icons || themeConfig.spring.icons;

  return (
    <div id="bg-container" aria-hidden="true">
      {/* Giant background props */}
      <span className="giant-prop" id="prop-1">{icons[0]}</span>
      <span className="giant-prop" id="prop-2">{icons[1]}</span>
      <span className="giant-prop" id="prop-3">{icons[2] || icons[0]}</span>

      {/* Static scattered icons — positions stable, text updated via ref */}
      <div ref={scatterRef}>
        {scatterPositions.map((pos, i) => (
          <span
            key={i}
            className="scatter-icon"
            style={{
              top: `${pos.top}vh`,
              left: `${pos.left}vw`,
              transform: `rotate(${pos.rotate}deg)`,
              fontSize: `${pos.size}px`,
              animationDelay: `-${pos.delay}s`,
            }}
          >
            {icons[i % icons.length]}
          </span>
        ))}
      </div>

      {/* Drifter container */}
      <div ref={drifterRef} className="drifter-container" />
    </div>
  );
}

export default memo(SeasonalScene);
