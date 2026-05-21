import React, { useState, useEffect } from 'react';

export default function MainHeader({ activeView }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const breadcrumb = () => {
    switch (activeView) {
      case 'about': return 'Trang chủ / Giới thiệu';
      case 'project': return 'Trang chủ / Danh mục / Dự án';
      case 'course': return 'Trang chủ / Tổng kết';
      default: return 'Trang chủ';
    }
  };

  const dateStr = time.toLocaleDateString('vi-VN', {
    day: '2-digit', month: '2-digit', year: 'numeric',
  });
  const timeStr = time.toLocaleTimeString('vi-VN', {
    hour: '2-digit', minute: '2-digit', second: '2-digit',
  });

  return (
    <header className="unified-header">
      <div className="header-top">
        <span className="breadcrumb">{breadcrumb()}</span>
        <div className="header-meta">
          <span className="header-date">📅 {dateStr}</span>
          <span className="header-time">⏰ {timeStr}</span>
        </div>
      </div>
      <div className="header-title">
        <h2>Học phần CS300</h2>
        <p>Kỹ năng mềm & Công cụ số</p>
      </div>
    </header>
  );
}
