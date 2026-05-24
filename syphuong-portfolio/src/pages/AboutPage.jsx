import AboutBoard from "../components/about/AboutBoard.jsx";
import CompassSkills from "../components/about/CompassSkills.jsx";
import HeroDock from "../components/about/HeroDock.jsx";
import PageTransition from "../components/ui/PageTransition.jsx";

export default function AboutPage() {
  return (
    <PageTransition className="about-page">
      <HeroDock />
      <AboutBoard />
      <CompassSkills />
    </PageTransition>
  );
}
