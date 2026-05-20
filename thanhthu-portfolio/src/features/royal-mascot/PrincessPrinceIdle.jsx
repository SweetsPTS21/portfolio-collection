import { Castle } from 'lucide-react';
import avatarUrl from '../../../docs/avatar.png';
import CrownSparkle from './CrownSparkle.jsx';

export default function PrincessPrinceIdle() {
  return (
    <div className="storybook-card">
      <div className="book-cover">
        <img className="storybook-avatar" src={avatarUrl} alt="Nguyễn Thanh Thư" />
        <div className="avatar-kitty cover-ornament book-cover__corner book-cover__corner--top">
          <Castle size={62} />
          <CrownSparkle />
        </div>
        <div className="book-cover__corner book-cover__corner--bottom">
          <p>Royal Forest</p>
          <strong>Portfolio</strong>
        </div>
      </div>
    </div>
  );
}
