import PageTransition from "../ui/PageTransition.jsx";
import { FileText, Navigation, CheckCircle } from "lucide-react";
import { projects, projectsIntro } from "../../data/portfolioData.js";
import buoyMarkerUrl from "../../assets/lagoon-kayak-adventure/checkpoint-markers.svg";

export default function CheckpointProjectsPage() {
  return (
    <PageTransition className="projects-page">
      <div className="page-heading">
        <span className="welcome-badge">Journey Logs</span>
        <h2>Hành trình Dự án</h2>
        <p className="page-intro-text">{projectsIntro}</p>
      </div>

      {/* Vertical Adventure Trail Timeline */}
      <div className="adventure-trail">
        {projects.map((project, idx) => {
          return (
            <div key={idx} className="trail-checkpoint">
              {/* Vertical node marker (Nautical buoy design) */}
              <div className="checkpoint-marker-container">
                <div className="checkpoint-node">
                  <span className="checkpoint-index">{idx + 1}</span>
                  <img
                    src={buoyMarkerUrl}
                    alt=""
                    className="asset-buoy-icon"
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* Checkpoint Detail Card */}
              <div className="checkpoint-card">
                <span className="checkpoint-label">{project.label}</span>
                <h3>{project.title}</h3>

                <div className="checkpoint-details">
                  <div className="detail-section">
                    <h4 className="detail-heading">
                      <Navigation size={14} className="icon-accent" />
                      <span>Mục tiêu (Goal)</span>
                    </h4>
                    <p className="detail-body">{project.goal}</p>
                  </div>

                  <div className="detail-section">
                    <h4 className="detail-heading">
                      <CheckCircle size={14} className="icon-accent" />
                      <span>Tiến trình (Process)</span>
                    </h4>
                    <p className="detail-body">{project.process}</p>
                  </div>
                </div>

                {/* PDF Action Link */}
                <div className="action-row">
                  <a
                    href={project.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pdf-action-btn"
                  >
                    <FileText size={16} />
                    <span>Xem báo cáo PDF</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </PageTransition>
  );
}
