export default function AuroraGradient() {
  // TODO: Aurora gradient động tạm thời bị disable vì màu quá đậm, làm lu mờ các asset.
  // Để bật lại: dùng lại block style bên dưới (animated version).
  //
  // Animated version (disabled):
  // style={{
  //   background:
  //     'linear-gradient(135deg, #FFF0F5 0%, #FFD6EC 20%, #E8D5FF 40%, #D4A0FF 60%, #B8D4FF 80%, #FFF0F5 100%)',
  //   backgroundSize: '400% 400%',
  //   animation: 'aurora-shift 25s ease infinite',
  // }}

  return (
    <div
      className="fixed inset-0 z-0"
      aria-hidden="true"
      style={{
        // Nền tĩnh nhẹ nhàng, sáng để không lấn át assets
        background:
          'linear-gradient(135deg, #FFF6FA 0%, #FFF0F7 50%, #FBF4FF 100%)',
      }}
    />
  );
}
