import { personalInfo } from "../../data/portfolioData.js";

export default function Footer() {
  return (
    <footer className="editorial-footer">
      <p>{personalInfo.footer}</p>
    </footer>
  );
}
