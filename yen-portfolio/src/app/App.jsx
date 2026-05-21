import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useLenis } from "./lenisSetup";
import FoldPageTransition from "../components/layout/FoldPageTransition";
import PaperNav from "../components/layout/PaperNav";
import PetalFallLayer from "../features/sakura-scene/PetalFallLayer";
import SakuraBranch from "../features/sakura-scene/SakuraBranch";
import SparrowBird from "../features/sakura-scene/SparrowBird";

export default function SakuraLetterDeskApp() {
  useLenis();

  return (
    <BrowserRouter>
      <div className="app-shell">
        <SakuraBranch />
        <PetalFallLayer count={28} />
        <SparrowBird />
        <PaperNav />
        <FoldPageTransition />
      </div>
    </BrowserRouter>
  );
}
