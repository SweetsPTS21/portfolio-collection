import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { portfolioContent } from "./portfolioContent";
import { ConclusionArrivalPanel } from "./ConclusionArrivalPanel";

describe("ConclusionArrivalPanel", () => {
  it("splits conclusion content into smaller arrival note cards", () => {
    render(<ConclusionArrivalPanel />);

    const noteCards = screen.getAllByTestId("arrival-note-card");
    expect(noteCards.length).toBeGreaterThan(portfolioContent.conclusion.sections.length);
    expect(screen.queryByText(portfolioContent.conclusion.sections[4].body)).not.toBeInTheDocument();
    expect(screen.getByText(/Em sẽ mang theo tư duy tối giản/i)).toBeInTheDocument();
    expect(screen.getByText(/Việc làm chủ công nghệ/i)).toBeInTheDocument();
    expect(screen.getByText(/Em xin cảm ơn các thầy cô/i)).toBeInTheDocument();
  });
});
