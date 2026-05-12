import { flowerAssets } from '../../data/portfolioData.js';

export default function VineDivider({ compact = false }) {
  return (
    <div
      className={compact ? 'vine-divider vine-divider--compact' : 'vine-divider'}
      aria-hidden="true"
    >
      <img src={flowerAssets.vineDivider} alt="" />
    </div>
  );
}
