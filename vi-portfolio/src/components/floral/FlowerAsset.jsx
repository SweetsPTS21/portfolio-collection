export default function FlowerAsset({
  src,
  alt = '',
  className = '',
  decorative = true,
}) {
  return (
    <img
      className={className}
      src={src}
      alt={decorative ? '' : alt}
      aria-hidden={decorative ? 'true' : undefined}
      loading="lazy"
    />
  );
}
