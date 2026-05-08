import { CheckCircle2, Compass, Sparkles } from 'lucide-react';
import { conclusion } from '../../data/portfolioData.js';
import PostcardFrame from '../summer/PostcardFrame.jsx';

export default function ConclusionSection() {
  return (
    <PostcardFrame
      id="conclusion"
      title={conclusion.title}
      eyebrow={conclusion.futureTitle}
      accent="blue"
    >
      <p className="conclusion-lead">{conclusion.intro}</p>

      <div className="subsection">
        <h3>{conclusion.mindsetTitle}</h3>
        <div className="timeline-list">
          {conclusion.mindsetItems.map((item) => (
            <article className="timeline-item" key={item.title}>
              <Sparkles size={19} strokeWidth={2.4} />
              <div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="reflection-grid">
        <article>
          <h3>Những điểm tâm đắc</h3>
          {conclusion.highlights.map((item) => (
            <div className="reflection-card" key={item.title}>
              <CheckCircle2 size={18} strokeWidth={2.3} />
              <div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </article>
        <article>
          <h3>Những thách thức</h3>
          {conclusion.challenges.map((item) => (
            <div className="reflection-card" key={item.title}>
              <Compass size={18} strokeWidth={2.3} />
              <div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </article>
      </div>

      <div className="future-board">
        <h3>{conclusion.futureTitle}</h3>
        <p>{conclusion.futureIntro}</p>
        <div className="future-grid">
          {conclusion.futureItems.map((item) => (
            <article key={item.title}>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </PostcardFrame>
  );
}
