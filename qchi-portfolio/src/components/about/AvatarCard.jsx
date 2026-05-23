import React from "react";
import avatar from "../../assets/azure-study-desk/avatar.jpg";
import kraftTags from "../../assets/azure-study-desk/kraft-paper-tags.svg";
import notebookPages from "../../assets/azure-study-desk/notebook-pages.svg";
import penWritingSet from "../../assets/azure-study-desk/pen-writing-set.svg";

export default function AvatarCard() {
    return (
        <div className="avatar-card">
            <img className="avatar-notebook" src={notebookPages} alt="" />
            <img className="avatar" src={avatar} alt="Vũ Thị Quỳnh Chi" />
            <img className="avatar-kraft" src={kraftTags} alt="" />
            <img className="avatar-pen" src={penWritingSet} alt="" />
        </div>
    );
}
