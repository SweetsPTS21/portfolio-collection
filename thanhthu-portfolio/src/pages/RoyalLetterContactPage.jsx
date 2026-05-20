import { Mail, ScrollText } from 'lucide-react';
import carriageLanternSet from '../assets/storybook-royal-forest/carriage-lantern-set.svg';
import scrollLetterSet from '../assets/storybook-royal-forest/scroll-letter-set.svg';
import { reflections } from '../data/portfolioData.js';
import SealBadge from '../components/ui/SealBadge.jsx';
import SectionShell from './SectionShell.jsx';

export default function RoyalLetterContactPage() {
  return (
    <SectionShell
      eyebrow="Epilogue"
      id="reflection"
      lead="Phần kết giữ lại tinh thần chính của portfolio: tối giản, lãng mạn, có phản biện và có trách nhiệm với tri thức."
      title="Lời kết sau chuyến đi"
    >
      <div className="letter-asset-row" aria-hidden="true">
        <img src={scrollLetterSet} alt="" />
        <img src={carriageLanternSet} alt="" />
      </div>
      <div className="reflection-grid">
        {reflections.map((item) => (
          <article className="reflection-card" key={item.title}>
            <ScrollText size={22} />
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>

      <a className="letter-cta" href="mailto:thanhthu@example.com">
        <Mail size={19} />
        Send a royal letter
        <SealBadge>TT</SealBadge>
      </a>
    </SectionShell>
  );
}
