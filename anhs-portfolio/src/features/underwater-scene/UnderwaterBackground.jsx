export default function UnderwaterBackground() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
      style={{
        background:
          'linear-gradient(180deg, #E8F8FF 0%, #F0FBFF 30%, #FFFFFF 100%)',
      }}
    />
  );
}
