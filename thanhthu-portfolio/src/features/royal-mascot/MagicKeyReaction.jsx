import { personalInfo } from '../../data/portfolioData.js';

export default function MagicKeyReaction() {
  return (
    <div className="book-page">
      <span>{personalInfo.major}</span>
      <strong>{personalInfo.school}</strong>
    </div>
  );
}
