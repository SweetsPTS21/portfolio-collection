import { Heart, Music } from 'lucide-react';
import { EqualizerBars } from './Decorative';

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--gradient-main)',
        padding: '48px 32px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decoration text */}
      <span
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: "'Fredoka', sans-serif",
          fontSize: 'clamp(60px, 10vw, 100px)',
          fontWeight: 700,
          textTransform: 'uppercase',
          color: 'var(--color-primary)',
          opacity: 0.05,
          whiteSpace: 'nowrap',
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      >
        STAY TUNED
      </span>

      <div style={{ position: 'relative', zIndex: 2, maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 12 }}>
          <EqualizerBars size={28} />
          <div style={{ width: 36, height: 36, background: 'rgba(255,255,255,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Music size={20} color="var(--color-primary)" />
          </div>
          <EqualizerBars size={28} />
        </div>
        <p
          style={{
            fontFamily: "'Fredoka', sans-serif",
            fontSize: 22,
            fontWeight: 600,
            color: 'var(--color-text)',
            marginBottom: 8,
          }}
        >
          Cảm ơn bạn đã ghé thăm trạm phát sóng nhỏ!
        </p>
        <p style={{ fontSize: 18, color: 'var(--color-text-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
          Made with <Heart size={14} color="var(--color-primary)" fill="var(--color-primary)" /> by Phương Anh
        </p>
      </div>
    </footer>
  );
}
