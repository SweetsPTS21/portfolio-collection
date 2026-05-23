import React from "react";
import clipboardContact from "../../assets/azure-study-desk/clipboard-contact.svg";
import deskToolIcons from "../../assets/azure-study-desk/desk-tool-icons.svg";
import notebookPages from "../../assets/azure-study-desk/notebook-pages.svg";
import ChipCloud from "../ui/ChipCloud";

export default function ReflectionHero({ summary, skills }) {
    return (
        <section className="reflection-grid">
            <div className="mirror-card">
                <img src={notebookPages} alt="" />
                <p>{summary}</p>
            </div>
            <div className="constellation-card">
                <img src={clipboardContact} alt="" />
                <img className="panel-tool-icons" src={deskToolIcons} alt="" />
                <ChipCloud items={skills} variant="dark" />
            </div>
        </section>
    );
}
