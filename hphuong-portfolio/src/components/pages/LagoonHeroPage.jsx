import { Navigation } from "lucide-react";
import PageTransition from "../ui/PageTransition.jsx";
import LagoonCard from "../ui/LagoonCard.jsx";
import { profile, direction, portfolioGoal } from "../../data/portfolioData.js";
import compassIconUrl from "../../assets/lagoon-kayak-adventure/paddle-toolkit-icons.svg";

export default function LagoonHeroPage() {
  return (
    <PageTransition className="hero-page">
      <div className="hero-grid">
        {/* Left Side: Text and Profile Info */}
        <div className="hero-intro">
          <div className="hero-title-area">
            <span className="welcome-badge">Explore the Lagoon</span>
            <h2>{profile.headline}</h2>
            <p className="hero-subtitle">{profile.subtitle}</p>
          </div>

          <blockquote>
            <p className="motto-text">“ {profile.motto} ”</p>
          </blockquote>

          {/* About Quick Facts Table/Grid */}
          <div className="profile-facts-grid">
            <div className="fact-item">
              <span className="fact-label">Ngành học</span>
              <strong className="fact-value">{profile.major}</strong>
            </div>
            <div className="fact-item">
              <span className="fact-label">Trường</span>
              <strong className="fact-value">{profile.university}</strong>
            </div>
            <div className="fact-item">
              <span className="fact-label">Sở thích</span>
              <strong className="fact-value font-small">{profile.hobbies}</strong>
            </div>
            <div className="fact-item">
              <span className="fact-label">Phong cách</span>
              <strong className="fact-value">{profile.style}</strong>
            </div>
          </div>
        </div>

        {/* Right Side: Portrait Avatar Frame */}
        <div className="hero-visual">
          <div className="portrait-canvas">
            <img className="avatar-img" src={profile.avatarUrl} alt={profile.name} />
            <span className="explorer-badge">
              <Navigation size={14} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
              <span>Explorer</span>
            </span>
          </div>
        </div>
      </div>

      {/* Two Column details cards (Direction & Goal) */}
      <div className="details-columns">
        <LagoonCard title={direction.title} eyebrow="Career Journey">
          <p>{direction.text}</p>
        </LagoonCard>

        <LagoonCard title={portfolioGoal.title} eyebrow="Digital Space">
          <p>{portfolioGoal.text}</p>
          {/* Compass graphic trick */}
          <div className="interactive-compass" aria-hidden="true">
            <img src={compassIconUrl} alt="" className="asset-compass-decor" />
            <span className="compass-tip">Hover me!</span>
          </div>
        </LagoonCard>
      </div>
    </PageTransition>
  );
}
