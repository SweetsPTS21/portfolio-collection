import React from "react";
import studyDeskTop from "../../assets/azure-study-desk/study-desk-top.svg";
import notebookPages from "../../assets/azure-study-desk/notebook-pages.svg";
import penWritingSet from "../../assets/azure-study-desk/pen-writing-set.svg";
import lampWindowLight from "../../assets/azure-study-desk/lamp-window-light.svg";
import paperDustParticles from "../../assets/azure-study-desk/paper-dust-particles.svg";

export default function StudyDeskScene() {
    return (
        <div className="study-desk-scene" aria-hidden="true">
            <img className="scene-desk" src={studyDeskTop} alt="" />
            <img className="scene-window-light" src={lampWindowLight} alt="" />
            <img className="scene-notebook" src={notebookPages} alt="" />
            <img className="scene-pen" src={penWritingSet} alt="" />
            <img className="scene-paper paper-a" src={paperDustParticles} alt="" />
            <img className="scene-paper paper-b" src={paperDustParticles} alt="" />
            <span className="dust-mote mote-a" />
            <span className="dust-mote mote-b" />
            <span className="dust-mote mote-c" />
        </div>
    );
}
