import React, { useState } from 'react';
import { themeConfig } from '../../data/portfolioData';

export default function SettingsSidebar({ theme, onThemeChange, onSettingsChange }) {
  const [driftersEnabled, setDriftersEnabled] = useState(true);
  const [scatterEnabled, setScatterEnabled] = useState(true);
  const [fallSpeed, setFallSpeed] = useState(50);
  const [expanded, setExpanded] = useState(true);

  const handleDrifterToggle = () => {
    const next = !driftersEnabled;
    setDriftersEnabled(next);
    // Toggle drifter visibility
    document.querySelectorAll('.drifter-icon').forEach((el) => {
      el.style.display = next ? '' : 'none';
    });
  };

  const handleScatterToggle = () => {
    const next = !scatterEnabled;
    setScatterEnabled(next);
    document.querySelectorAll('.scatter-icon, .giant-prop').forEach((el) => {
      el.style.display = next ? '' : 'none';
    });
  };

  const handleSpeedChange = (e) => {
    const val = parseInt(e.target.value, 10);
    setFallSpeed(val);
    // Adjust CSS variable for drift speed
    document.documentElement.style.setProperty('--drift-duration', `${60 - val * 0.4}s`);
  };

  const handleReset = () => {
    setDriftersEnabled(true);
    setScatterEnabled(true);
    setFallSpeed(50);
    document.querySelectorAll('.drifter-icon, .scatter-icon, .giant-prop').forEach((el) => {
      el.style.display = '';
    });
    document.documentElement.style.removeProperty('--drift-duration');
    onThemeChange('spring');
  };

  return (
    <aside className="settings-sidebar">
      <div className="settings-header">
        <button
          className={`nav-btn ${expanded ? 'expanded' : ''}`}
          onClick={() => setExpanded(!expanded)}
        >
          <span className="plus-badge">⚙️</span>
          <span>Cài đặt</span>
        </button>
      </div>

      {expanded && (
        <div className="settings-content">
          {/* Theme selector */}
          <div className="setting-row">
            <span className="label-text">Giao diện</span>
          </div>
          <div className="theme-selector">
            {Object.entries(themeConfig).map(([key, cfg]) => (
              <button
                key={key}
                className={`theme-circle ${theme === key ? 'active' : ''}`}
                onClick={() => onThemeChange(key)}
                title={cfg.label}
                aria-label={cfg.label}
              >
                <span className="theme-circle-inner">{cfg.emoji}</span>
              </button>
            ))}
          </div>

          {/* Fall speed slider */}
          <div className="setting-row slider-row">
            <span className="label-text">Tốc độ rơi</span>
            <input
              type="range"
              min="0"
              max="100"
              value={fallSpeed}
              onChange={handleSpeedChange}
              className="setting-slider"
            />
          </div>

          {/* Drifter toggle */}
          <div className="setting-row toggle-row">
            <span className="label-text">Hiệu ứng rơi</span>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={driftersEnabled}
                onChange={handleDrifterToggle}
              />
              <span className="toggle-slider" />
            </label>
          </div>

          {/* Scatter icons toggle */}
          <div className="setting-row toggle-row">
            <span className="label-text">Icon tĩnh</span>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={scatterEnabled}
                onChange={handleScatterToggle}
              />
              <span className="toggle-slider" />
            </label>
          </div>

          {/* Reset button */}
          <button className="btn-reset" onClick={handleReset}>
            Đặt lại cài đặt
          </button>
        </div>
      )}
    </aside>
  );
}
