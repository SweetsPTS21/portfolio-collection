import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Waves, Heart } from 'lucide-react';
import bottleSvg from '@/assets/ocean-wave-diary/bottle-message.svg';
import BubbleTrail from '@/components/ocean-scene/BubbleTrail';

export default function FooterShore() {
  return (
    <footer
      role="contentinfo"
      style={{
        position: 'relative',
        background: 'linear-gradient(180deg, rgba(47,143,200,0.06) 0%, rgba(24,56,74,0.12) 100%)',
        borderTop: '1px solid rgba(191,234,248,0.5)',
        padding: 'var(--space-16) 0 var(--space-8)',
        marginTop: 'var(--space-8)',
        overflow: 'hidden',
      }}
    >
      {/* Bottle message CTA */}
      <div
        style={{
          maxWidth: 700,
          margin: '0 auto',
          padding: '0 var(--space-6)',
          textAlign: 'center',
        }}
      >
        {/* Animated bottle */}
        <motion.div
          style={{ display: 'inline-block', marginBottom: 'var(--space-6)' }}
          animate={{ y: [0, -10, 4, -8, 0], rotate: [-3, 2, -5, 2, -3] }}
          transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity }}
          id="footer-bottle"
        >
          <img src={bottleSvg} alt="Chai thư" width={80} height={160} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'var(--text-3xl)',
              fontWeight: 'var(--weight-bold)',
              color: 'var(--color-deep-navy)',
              marginBottom: 'var(--space-4)',
              letterSpacing: '-0.01em',
            }}
          >
            Cảm ơn đã ghé thăm 🌊
          </h2>
          <p
            style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--color-deep-navy)',
              lineHeight: 'var(--leading-relaxed)',
              marginBottom: 'var(--space-6)',
              fontStyle: 'italic',
              fontWeight: 'var(--weight-medium)',
              opacity: 0.85,
            }}
          >
            Nếu bạn muốn đọc thêm về hành trình, hãy khám phá các trang nhật ký bên dưới.
          </p>

          {/* Quick links */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
            {[
              { to: '/', label: 'Bờ Biển' },
              { to: '/projects', label: 'Nhật Ký' },
              { to: '/reflection', label: 'Suy Ngẫm' },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                id={`footer-link-${label}`}
                style={{
                  padding: 'var(--space-3) var(--space-6)',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(124,205,242,0.2)',
                  border: '2px solid var(--color-ocean-blue)',
                  color: 'var(--color-deep-navy)',
                  fontSize: 'var(--text-base)',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 'var(--weight-bold)',
                  textDecoration: 'none',
                  transition: 'all var(--transition-base)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(124,205,242,0.35)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(167,228,255,0.25)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {label}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Credits */}
        <div
          style={{
            marginTop: 'var(--space-12)',
            paddingTop: 'var(--space-6)',
            borderTop: '1px solid rgba(191,234,248,0.4)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
            <Waves size={18} color="var(--color-deep-blue)" />
            <span style={{ fontSize: 'var(--text-base)', color: 'var(--color-deep-navy)', fontFamily: 'var(--font-heading)', fontWeight: 'var(--weight-semibold)' }}>
              Nguyễn Thị Thu — 24061410 — Đại học Luật, ĐHQGHN
            </span>
          </div>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-deep-navy)', marginTop: 'var(--space-2)', fontWeight: 'var(--weight-medium)', opacity: 0.75 }}>
            Made with <Heart size={12} style={{ display: 'inline', verticalAlign: 'middle', color: '#FF7AAA' }} /> ocean-wave-diary theme
          </p>
        </div>
      </div>
    </footer>
  );
}
