import { createElement } from "react";

export default function StudyNoteSection({
    heading,
    HeadingIcon,
    ItemIcon,
    items,
    getTitle,
    getText,
    columns = "three",
}) {
    return (
        <section>
            <h3 className="study-section-heading">
                {createElement(HeadingIcon, {
                    className: "text-[var(--lamp-green)]",
                    size: 24,
                })}
                {heading}
            </h3>
            <div
                className={`study-note-sheet ${columns === "two" ? "two-col" : ""}`}
            >
                {items.map((item, index) => (
                    <div className="study-note-row" key={getTitle(item)}>
                        <span className="study-note-index">
                            {String(index + 1).padStart(2, "0")}
                        </span>
                        <div className="study-note-copy">
                            <h4>
                                {createElement(ItemIcon, { size: 17 })}
                                {getTitle(item)}
                            </h4>
                            <p>{getText(item)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
