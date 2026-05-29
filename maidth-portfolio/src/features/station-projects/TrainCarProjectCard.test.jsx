import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { portfolioContent } from "../journey-content/portfolioContent";
import { TrainCarProjectCard } from "./TrainCarProjectCard";

describe("TrainCarProjectCard details", () => {
  it("keeps long process text off the card and delegates selection to the detail screen", () => {
    const project = portfolioContent.projects[0];
    const onSelect = vi.fn();

    render(<TrainCarProjectCard project={project} onSelect={onSelect} />);

    expect(screen.getByText(project.title)).toBeInTheDocument();
    expect(screen.queryByText(project.process)).not.toBeInTheDocument();
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /xem chi tiết chương 1/i }));

    expect(onSelect).toHaveBeenCalledWith(project);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
