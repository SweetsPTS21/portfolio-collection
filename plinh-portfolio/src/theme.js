// src/theme.js
export const theme = {
  token: {
    colorBgBase: "#F5F5F5",         // Nền off-white giấy sần dịu chói
    colorBgContainer: "#DAD7CD",    // Khối Cream tự nhiên ấm cúng
    colorPrimary: "#588157",        // Màu xanh Leaf thương hiệu
    colorTextBase: "#3A5A40",       // Chữ xanh rêu đậm Moss cực kỳ sang trọng
    colorTextSecondary: "#588157",  // Chữ phụ Leaf green
    colorSuccess: "#A3B18A",        // Màu Beige thanh bình
    colorWarning: "#D6A25F",        // Màu Wood Gold (Accent) nắng lọc qua lá
    colorError: "#C96A6A",
    colorBorder: "#A3B18A",         // Đường viền mềm mại màu Sage/Beige
    borderRadius: 18,               // Bo tròn hình chiếc lá
    fontFamily: "'Quicksand', sans-serif",
    fontSize: 18,
    fontSizeSM: 16,
    fontSizeLG: 20,
  },
  components: {
    Button: {
      colorPrimary: "#588157",
      colorPrimaryHover: "#3A5A40",
      colorTextLightSolid: "#F5F5F5",
      borderRadius: 24,             // Bo tròn pill dễ thương
      fontWeight: 600,
    },
    Card: {
      colorBgContainer: "#DAD7CD",
      colorBorderSecondary: "#A3B18A",
      borderRadiusLG: 18,
    },
    Timeline: {
      colorConnector: "#A3B18A",
      colorTextSecondary: "#588157",
    },
    Modal: {
      colorBgMask: "rgba(58, 90, 64, 0.45)", // Moss green transparent mask
      colorBgContainer: "#F5F5F5",          // Modal background off-white
      borderRadiusLG: 24,
    },
    Tabs: {
      colorPrimary: "#588157",
      colorText: "#3A5A40",
      fontFamily: "'Quicksand', sans-serif",
      fontSize: 18,
    }
  }
};
