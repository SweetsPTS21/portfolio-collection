// Ant Design theme tokens — "Candy Pop Editorial" design system
export const theme = {
  token: {
    // ── Colors ──────────────────────────────────────
    colorBgBase: '#FFF0F5',
    colorBgContainer: '#FFFFFF',
    colorBgElevated: '#FFFFFF',
    colorPrimary: '#FF6B9D',
    colorTextBase: '#2D2040',
    colorTextSecondary: '#7A6B8A',
    colorBorder: '#F5D5E0',
    colorSuccess: '#7DCEA0',
    colorWarning: '#FFD93D',
    colorFill: 'rgba(255, 107, 157, 0.06)',
    colorFillSecondary: '#FFF0F5',

    // ── Border radius (all sharp) ───────────────────
    borderRadius: 0,
    borderRadiusLG: 0,
    borderRadiusSM: 0,

    // ── Typography ──────────────────────────────────
    fontFamily: "'Quicksand', 'Nunito', sans-serif",
    fontSize: 19,
    fontSizeLG: 22,
    fontSizeSM: 17,
    fontSizeXL: 24,
    fontSizeHeading1: 56,
    fontSizeHeading2: 40,
    fontSizeHeading3: 28,
    fontSizeHeading4: 22,
    lineHeight: 1.85,

    // ── Spacing ─────────────────────────────────────
    padding: 20,
    paddingLG: 36,
    paddingSM: 12,
    margin: 16,
    marginLG: 40,
    marginSM: 8,

    // ── Motion ──────────────────────────────────────
    motionDurationSlow: '0.6s',
    motionDurationMid: '0.35s',
    motionDurationFast: '0.2s',
    motionEaseInOut: 'cubic-bezier(0.65, 0, 0.35, 1)',
  },
  components: {
    Button: {
      borderRadius: 0,
      controlHeight: 44,
      controlHeightLG: 52,
      fontWeight: 600,
    },
    Card: {
      borderRadiusLG: 0,
      paddingLG: 28,
    },
    Tag: {
      borderRadiusSM: 0,
      fontSize: 12,
    },
    Menu: {
      itemBorderRadius: 0,
      itemHoverBg: 'rgba(255, 107, 157, 0.08)',
      itemSelectedBg: 'rgba(255, 107, 157, 0.12)',
      itemSelectedColor: '#FF6B9D',
    },
    Typography: {
      titleMarginTop: 0,
      titleMarginBottom: '0.5em',
    },
    Tabs: {
      itemSelectedColor: '#FF6B9D',
      inkBarColor: '#FF6B9D',
      itemHoverColor: '#FF85B1',
    },
  },
};

// Palette export for custom usage
export const palette = {
  primary: '#FF6B9D',
  primaryHover: '#FF85B1',
  secondary: '#7EC8E3',
  accent: '#FFB347',
  bgBase: '#FFF0F5',
  text: '#2D2040',
  textSecondary: '#7A6B8A',
  border: '#F5D5E0',
  gradientStart: '#FFDEE9',
  gradientMid: '#FFD4A8',
  gradientEnd: '#B5DEFF',
};
