import React from "react";
import { useEffect, useState } from "react";
import brassClipsPins from "../../assets/azure-study-desk/brass-clips-pins.svg";
import deskParticleSet from "../../assets/azure-study-desk/desk-particle-set.svg";
import deskSurfaceLayer from "../../assets/azure-study-desk/desk-surface-layer.svg";
import indexTabSet from "../../assets/azure-study-desk/index-tab-set.svg";
import kraftTapeTags from "../../assets/azure-study-desk/kraft-tape-tags.svg";
import openNotebookLayered from "../../assets/azure-study-desk/open-notebook-layered.svg";
import paperStackSet from "../../assets/azure-study-desk/paper-stack-set.svg";
import penUnderlineAnimated from "../../assets/azure-study-desk/pen-underline-animated.svg";
import studyDeskTop from "../../assets/azure-study-desk/study-desk-top.svg";
import windowLightLayer from "../../assets/azure-study-desk/window-light-layer.svg";

export default function StudyDeskScene() {
    const [sceneOffset, setSceneOffset] = useState({ x: 0, y: 0, scroll: 0 });

    useEffect(() => {
        const handlePointerMove = (event) => {
            const x = (event.clientX / window.innerWidth - 0.5) * 20;
            const y = (event.clientY / window.innerHeight - 0.5) * 16;
            setSceneOffset((current) => ({
                ...current,
                x: Number(x.toFixed(2)),
                y: Number(y.toFixed(2)),
            }));
        };

        const handleScroll = () => {
            const scroll = Math.min(window.scrollY / 18, 44);
            setSceneOffset((current) => ({
                ...current,
                scroll: Number(scroll.toFixed(2)),
            }));
        };

        window.addEventListener("pointermove", handlePointerMove, { passive: true });
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener("pointermove", handlePointerMove);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className="study-desk-scene"
            style={{
                "--scene-x": `${sceneOffset.x}px`,
                "--scene-y": `${sceneOffset.y}px`,
                "--scene-scroll": `${sceneOffset.scroll}px`,
            }}
            aria-hidden="true"
        >
            <span className="scene-layer scene-window-light">
                <img src={windowLightLayer} alt="" />
            </span>
            <span className="scene-layer scene-desk-poster">
                <img src={studyDeskTop} alt="" />
            </span>
            <span className="scene-layer scene-desk-surface">
                <img src={deskSurfaceLayer} alt="" />
            </span>
            <span className="scene-layer scene-open-notebook">
                <img src={openNotebookLayered} alt="" />
            </span>
            <span className="scene-layer scene-paper-stack stack-a">
                <img src={paperStackSet} alt="" />
            </span>
            <span className="scene-layer scene-paper-stack stack-b">
                <img src={paperStackSet} alt="" />
            </span>
            <span className="scene-layer scene-kraft-tags">
                <img src={kraftTapeTags} alt="" />
            </span>
            <span className="scene-layer scene-pen-underline">
                <img src={penUnderlineAnimated} alt="" />
            </span>
            <span className="scene-layer scene-brass-clips">
                <img src={brassClipsPins} alt="" />
            </span>
            <span className="scene-layer scene-index-tabs">
                <img src={indexTabSet} alt="" />
            </span>
            <span className="scene-layer scene-particles">
                <img src={deskParticleSet} alt="" />
            </span>
            <span className="dust-mote mote-a" />
            <span className="dust-mote mote-b" />
            <span className="dust-mote mote-c" />
            <span className="dust-mote mote-d" />
        </div>
    );
}
