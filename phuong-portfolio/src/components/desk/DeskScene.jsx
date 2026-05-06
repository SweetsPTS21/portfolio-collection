import { profile } from "../../data/portfolioData.js";
import DeskDecor from "./DeskDecor.jsx";
import FolderObject from "./FolderObject.jsx";
import LaptopObject from "./LaptopObject.jsx";
import NotebookObject from "./NotebookObject.jsx";

export default function DeskScene({ activeSection, onOpen }) {
    return (
        <main className="desk-scene">
            <DeskDecor />

            <header className="desk-header">
                <div>
                    <p className="panel-kicker">PersonalPortfolio</p>
                    <h1 className="desk-title">{profile.name}</h1>
                    <p className="desk-subtitle">
                        {profile.major} - {profile.university}
                    </p>
                </div>

                <div className="profile-polaroid">
                    <img src={profile.avatar} alt={profile.name} />
                </div>
            </header>

            <section className="desk-board" aria-label="Các phần portfolio">
                <NotebookObject
                    active={activeSection === "about"}
                    onClick={() => onOpen("about")}
                />
                <LaptopObject
                    active={activeSection === "projects"}
                    onClick={() => onOpen("projects")}
                />
                <FolderObject
                    active={activeSection === "conclusion"}
                    onClick={() => onOpen("conclusion")}
                />
            </section>
        </main>
    );
}
