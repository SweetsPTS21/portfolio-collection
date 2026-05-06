// Ant Design 6 theme tokens — "Legal Archive" design system
export const theme = {
  token: {
    // ── Colors ──────────────────────────────────────
    colorBgBase: "#FAFAF7",
    colorPrimary: "#1B3A5C",
    colorTextBase: "#1A1A2E",
    colorTextSecondary: "#5C6B7A",
    colorBorder: "#D4C9B8",
    colorBgContainer: "#FFFFFF",
    colorBgElevated: "#FFFFFF",
    colorFillSecondary: "#F2EFE8",
    colorFill: "rgba(27, 58, 92, 0.06)",

    // ── Border radius ───────────────────────────────
    borderRadius: 4,
    borderRadiusLG: 6,
    borderRadiusSM: 2,

    // ── Typography ──────────────────────────────────
    fontFamily: "'Inter', -apple-system, sans-serif",
    fontSize: 15,
    fontSizeLG: 17,
    fontSizeSM: 13,
    fontSizeXL: 20,
    fontSizeHeading1: 42,
    fontSizeHeading2: 28,
    fontSizeHeading3: 20,
    fontSizeHeading4: 16,
    lineHeight: 1.7,

    // ── Spacing ─────────────────────────────────────
    padding: 20,
    paddingLG: 32,
    paddingSM: 12,
    margin: 16,
    marginLG: 32,
    marginSM: 8,

    // ── Motion ──────────────────────────────────────
    motionDurationSlow: "0.4s",
    motionDurationMid: "0.25s",
    motionDurationFast: "0.15s",
    motionEaseInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
  components: {
    Card: {
      paddingLG: 28,
      borderRadiusLG: 4,
      boxShadowTertiary: "none",
    },
    Tag: {
      borderRadius: 2,
      fontSize: 12,
    },
    Button: {
      borderRadius: 3,
      fontWeight: 500,
    },
    Menu: {
      itemBorderRadius: 2,
      itemHoverBg: "rgba(27, 58, 92, 0.06)",
      itemSelectedBg: "rgba(27, 58, 92, 0.10)",
      itemSelectedColor: "#1B3A5C",
    },
    Typography: {
      titleMarginTop: 0,
      titleMarginBottom: "0.5em",
    },
    Divider: {
      colorSplit: "#D4C9B8",
    },
    Tabs: {
      itemSelectedColor: "#1B3A5C",
      inkBarColor: "#1B3A5C",
      itemHoverColor: "#1B3A5C",
    },
  },
};
