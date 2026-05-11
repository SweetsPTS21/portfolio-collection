// Ant Design 6 theme tokens — "Magazine Editorial" design system
export const theme = {
  token: {
    // ── Colors ──────────────────────────────────────
    colorBgBase: "#F7F4EE",         // Trắng ngà giấy magazine
    colorBgContainer: "#FFFFFF",
    colorBgElevated: "#FFFFFF",
    colorPrimary: "#1A0A00",        // Đen espresso
    colorTextBase: "#1A0A00",
    colorTextSecondary: "#7A6A5A",
    colorError: "#7A1E2E",          // Đỏ rượu vang
    colorBorder: "#E8E0D4",
    colorFillSecondary: "#F0EBE3",
    colorFill: "rgba(26, 10, 0, 0.05)",

    // ── Border radius — Editorial flat ───────────────
    borderRadius: 0,
    borderRadiusLG: 0,
    borderRadiusSM: 0,

    // ── Typography ──────────────────────────────────
    fontFamily: "'Libre Franklin', -apple-system, sans-serif",
    fontSize: 15,
    fontSizeLG: 17,
    fontSizeSM: 13,
    fontSizeXL: 20,
    fontSizeHeading1: 56,
    fontSizeHeading2: 32,
    fontSizeHeading3: 22,
    fontSizeHeading4: 17,
    lineHeight: 1.75,

    // ── Spacing ─────────────────────────────────────
    padding: 24,
    paddingLG: 40,
    paddingSM: 14,
    margin: 20,
    marginLG: 40,
    marginSM: 10,

    // ── Motion ──────────────────────────────────────
    motionDurationSlow: "0.6s",
    motionDurationMid: "0.35s",
    motionDurationFast: "0.18s",
    motionEaseInOut: "cubic-bezier(0.77, 0, 0.18, 1)",
  },
  components: {
    Card: {
      paddingLG: 32,
      borderRadiusLG: 0,
      boxShadowTertiary: "none",
    },
    Tag: {
      borderRadius: 0,
      fontSize: 11,
    },
    Button: {
      borderRadius: 0,
      fontWeight: 500,
    },
    Menu: {
      itemBorderRadius: 0,
      itemHoverBg: "rgba(26, 10, 0, 0.04)",
      itemSelectedBg: "rgba(26, 10, 0, 0.08)",
      itemSelectedColor: "#1A0A00",
    },
    Typography: {
      titleMarginTop: 0,
      titleMarginBottom: "0.4em",
    },
    Divider: {
      colorSplit: "#E8E0D4",
    },
  },
};
