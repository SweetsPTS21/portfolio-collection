export const theme = {
  id: 'pastel-glass-dreamscape',
  token: {
    colorBgBase: '#FFF0F5',
    colorBgContainer: 'rgba(255, 255, 255, 0.18)',
    colorPrimary: '#FF8EC7',
    colorTextBase: '#3D1F33',
    colorTextSecondary: '#8A5A72',
    colorSuccess: '#8EECD4',
    colorWarning: '#FFE4A8',
    colorInfo: '#B8D4FF',
    colorBorder: 'rgba(255, 142, 199, 0.25)',
    borderRadius: 24,
    fontFamily: "'Quicksand', 'Nunito', sans-serif",
  },
};

export const glassStyles = {
  card: {
    background: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '24px',
    boxShadow: '0 8px 32px rgba(255, 182, 217, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
  },
  cardHover: {
    boxShadow: '0 12px 40px rgba(255, 142, 199, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
    transform: 'translateY(-8px)',
  },
};
