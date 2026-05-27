import { LanNav } from "./LanNav";
import { SvgSceneLayer } from "../ui/SvgSceneLayer";

export function AppShell({ children }) {
  return (
    <div className="appShell">
      <SvgSceneLayer />
      <LanNav />
      <main className="mainContent">{children}</main>
      <footer className="siteFooter">
        <span>Nguyễn Ngọc Lan</span>
        <span>Sunset Concert Law Diary</span>
      </footer>
    </div>
  );
}
