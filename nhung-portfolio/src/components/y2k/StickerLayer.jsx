import butterfly from '../../assets/dreamy-y2k/butterfly-sticker.svg';
import icons from '../../assets/dreamy-y2k/cloud-rainbow-icons.svg';
import heart from '../../assets/dreamy-y2k/retro-pixel-heart.svg';
import sparkles from '../../assets/dreamy-y2k/sparkle-stars.svg';
import sheet from '../../assets/dreamy-y2k/holo-sticker-sheet.svg';

const stickers = [
  { src: butterfly, className: 'sticker-layer__item sticker-layer__item--butterfly' },
  { src: sparkles, className: 'sticker-layer__item sticker-layer__item--sparkles' },
  { src: heart, className: 'sticker-layer__item sticker-layer__item--heart' },
  { src: icons, className: 'sticker-layer__item sticker-layer__item--icons' },
  { src: sheet, className: 'sticker-layer__item sticker-layer__item--sheet' },
];

export default function StickerLayer() {
  return (
    <div className="sticker-layer" aria-hidden="true">
      {stickers.map((sticker) => (
        <img key={sticker.className} src={sticker.src} alt="" className={sticker.className} />
      ))}
    </div>
  );
}
