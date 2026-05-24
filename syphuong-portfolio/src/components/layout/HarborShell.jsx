import lantern from "../../assets/lantern.png";
import HarborNav from "./HarborNav.jsx";

export default function HarborShell({ children }) {
  return (
    <div className="harbor-shell">
      <HarborNav />
      <img className="harbor-lantern" src={lantern} alt="" aria-hidden="true" />
      {children}
    </div>
  );
}
