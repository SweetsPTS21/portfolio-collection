export default function GlowButton({ children, onClick, style = {} }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '10px 24px',
        background: 'var(--forest-primary)',
        color: 'white',
        border: 'none',
        borderRadius: 18,
        fontWeight: 600,
        fontSize: 15,
        cursor: 'pointer',
        boxShadow: '0 0 12px rgba(52, 211, 153, 0.3)',
        transition: 'all 0.3s',
        ...style,
      }}
      onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 24px rgba(52, 211, 153, 0.5)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 0 12px rgba(52, 211, 153, 0.3)'; e.currentTarget.style.transform = 'translateY(0)'; }}
    >
      {children}
    </button>
  );
}
