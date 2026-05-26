import React from 'react';
import { X } from 'lucide-react';

const profileDetails = [
  ['Chuyên ngành', 'major'],
  ['Đơn vị học tập', 'school'],
  ['Sở thích', 'hobby'],
  ['Phong cách', 'style'],
  ['Định hướng tương lai', 'future'],
];

const ProfileModal = ({ isOpen, profile, goals, onClose }) => {
  React.useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="profile-modal-backdrop"
      role="presentation"
      onMouseDown={onClose}
    >
      <section
        className="profile-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="profile-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          className="profile-modal-close"
          type="button"
          aria-label="Đóng modal"
          onClick={onClose}
        >
          <X size={18} aria-hidden="true" />
        </button>
        <div className="profile-modal-hero">
          <p className="profile-modal-kicker">About me</p>
          <h2 id="profile-modal-title">{profile.name}</h2>
          <p className="profile-modal-intro">{profile.intro}</p>
        </div>

        <dl className="profile-modal-details-grid">
          {profileDetails.map(([label, key]) => (
            <div className="profile-info-card" key={key}>
              <dt>{label}</dt>
              <dd>{profile[key]}</dd>
            </div>
          ))}
        </dl>

        <div className="profile-modal-goals">
          <h3>Mục tiêu làm Portfolio</h3>
          <ol className="profile-goals-grid">
            {goals.map((goal, index) => (
              <li className="profile-goal-card" key={goal.title}>
                <span className="profile-goal-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <strong>{goal.title}</strong>
                <span>{goal.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
};

export default ProfileModal;
