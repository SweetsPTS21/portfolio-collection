export const palette = {
  milk: '#FDF9F7',
  surface: '#FFFFFF',
  powderPink: '#E8A0BF',
  text: '#2D2D35',
  textSoft: '#8A8498',
  sky: '#B8D8F5',
  lavender: '#D4C5F9',
  beige: '#F5EDE8',
  peach: '#FFD6C0',
  border: '#F0E6EC',
  mint: '#DFF3EA',
};

export const theme = {
  token: {
    colorBgBase: palette.milk,
    colorBgContainer: palette.surface,
    colorPrimary: palette.powderPink,
    colorTextBase: palette.text,
    colorTextSecondary: palette.textSoft,
    colorInfo: palette.sky,
    colorSuccess: palette.lavender,
    colorBorder: palette.border,
    borderRadius: 24,
    fontFamily: "'Plus Jakarta Sans', 'Noto Sans KR', sans-serif",
    boxShadow: '0 18px 50px rgba(232, 160, 191, 0.16)',
  },
  components: {
    Button: {
      borderRadius: 999,
      controlHeight: 44,
      fontWeight: 700,
    },
    Modal: {
      borderRadiusLG: 28,
    },
    Tag: {
      borderRadiusSM: 999,
    },
  },
};
