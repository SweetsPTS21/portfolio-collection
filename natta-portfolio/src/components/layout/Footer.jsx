export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span className="footer-berry">🍓</span>
        <p>© 2026 • Tống Thị An Na • Digital Portfolio</p>
      </div>

      <style>{`
        .footer {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 40px 20px;
          color: var(--text-secondary);
          font-size: 0.85rem;
        }
        .footer-content {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .footer-berry {
          font-size: 1.2rem;
          animation: gentleFloat 3s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
}
