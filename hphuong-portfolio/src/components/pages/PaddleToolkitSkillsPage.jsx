import PageTransition from "../ui/PageTransition.jsx";
import LagoonCard from "../ui/LagoonCard.jsx";
import { tools, strengths } from "../../data/portfolioData.js";
import toolkitIconsUrl from "../../assets/lagoon-kayak-adventure/paddle-toolkit-icons.svg";
import { Compass, CheckSquare, ShieldCheck } from "lucide-react";

export default function PaddleToolkitSkillsPage() {
  return (
    <PageTransition className="skills-page">
      <div className="page-heading">
        <span className="welcome-badge">Gear & Skills</span>
        <h2>Hộp dụng cụ Kỹ năng</h2>
        <p className="page-intro-text">
          Để thực hiện các bài tập một cách an toàn và đúng đắn trên không gian
          số, mình tự trang bị bộ quy tắc sinh tồn cùng hộp công cụ tối giản
          nhưng sắc bén.
        </p>
      </div>

      <div className="skills-layout-grid">
        {/* Left Side: Personal Core Strengths & Principles */}
        <div className="skills-sidebar">
          <LagoonCard title="Nguyên tắc Thực hiện" eyebrow="Survival Rules">
            <ul className="principles-list">
              <li>
                <CheckSquare className="icon-checkbox" size={16} />
                <div>
                  <strong>Chính xác về mặt dữ liệu</strong>
                  <p className="subtext">
                    Mọi thông tin pháp lý phải được đối chiếu đa chiều.
                  </p>
                </div>
              </li>
              <li>
                <CheckSquare className="icon-checkbox" size={16} />
                <div>
                  <strong>Tối giản về mặt hình thức</strong>
                  <p className="subtext">
                    Loại bỏ chi tiết rườm rà, tập trung vào giá trị cốt lõi.
                  </p>
                </div>
              </li>
              <li>
                <CheckSquare className="icon-checkbox" size={16} />
                <div>
                  <strong>Độc lập về mặt tư duy</strong>
                  <p className="subtext">
                    AI chỉ hỗ trợ lên khung, trí não là người quyết định lập
                    luận.
                  </p>
                </div>
              </li>
            </ul>
          </LagoonCard>

          <LagoonCard title="Thế mạnh cốt lõi" eyebrow="Explorer Strengths">
            <div className="strengths-wrapper">
              {strengths.map((str, i) => (
                <div key={i} className="strength-chip">
                  <ShieldCheck
                    size={18}
                    style={{ color: "var(--kayak-teal)", flexShrink: 0 }}
                  />
                  <span>{str}</span>
                </div>
              ))}
            </div>
          </LagoonCard>
        </div>

        {/* Right Side: Waterproof Toolkit Categories */}
        <div className="toolkit-main">
          <div className="toolkit-banner" aria-hidden="true">
            <h3>Explorer's Waterproof Toolkit</h3>
            <img
              src={toolkitIconsUrl}
              alt="Toolkit Strip"
              className="asset-toolkit-strip"
            />
          </div>

          <div className="toolkit-grid">
            {tools.map((group, index) => {
              // Map index to the x coordinate in the SVG strip (50, 150, 250, 350, 450)
              const svgX = 50 + index * 100;
              return (
                <div key={index} className="toolkit-gear-card">
                  {/* SVG clip extraction for individual gear icon */}
                  <div className="gear-icon-frame">
                    <svg
                      viewBox={`${svgX - 35} 15 70 70`}
                      className="gear-svg-icon"
                    >
                      <use href={`${toolkitIconsUrl}#svgView`} />
                      <image
                        href={toolkitIconsUrl}
                        x="0"
                        y="0"
                        width="500"
                        height="100"
                      />
                    </svg>
                  </div>

                  <div className="gear-content">
                    <h4>{group.group}</h4>
                    <div className="gear-tags">
                      {group.items.map((item, itemIdx) => (
                        <span key={itemIdx} className="gear-tag">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
