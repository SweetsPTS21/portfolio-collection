import { render, screen } from "@testing-library/react";
import { readFileSync } from "node:fs";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import { portfolioData } from "./data/portfolioData";

function renderAt(path) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );
}

describe("nganntt cafe-bakery portfolio", () => {
  it("renders about route with cafe-bakery identity and personal content", () => {
    renderAt("/about");

    expect(screen.getByRole("heading", { name: /blue cafe counter/i })).toBeInTheDocument();
    expect(screen.getByText(portfolioData.person.fullName)).toBeInTheDocument();
    expect(screen.getAllByText(/đọc sách/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/vẽ tranh/i).length).toBeGreaterThan(0);
  });

  it("renders projects route as six bakery menu specials", () => {
    renderAt("/projects");

    expect(screen.getByRole("heading", { name: /six specials/i })).toBeInTheDocument();
    expect(screen.getAllByTestId("project-card")).toHaveLength(6);
    expect(screen.getByText("Fresh batch")).toBeInTheDocument();
    expect(screen.getByText("Art pastry")).toBeInTheDocument();
  });

  it("renders conclusion route as closing table reflection", () => {
    renderAt("/conclusion");

    expect(screen.getByRole("heading", { name: /closing table reflection/i })).toBeInTheDocument();
    expect(screen.getByText(/Total: tự do \+ ngăn nắp \+ sáng tạo cá nhân/i)).toBeInTheDocument();
  });

  it("renders ten enriched cafe-bakery background assets", () => {
    renderAt("/about");

    expect(screen.getAllByTestId("background-asset")).toHaveLength(10);
  });

  it("keeps background asset layer anchored to side gutters", () => {
    const css = readFileSync("src/index.css", "utf8");

    expect(css).not.toMatch(/\.assetAwning\s*{[^}]*left:\s*50%/);
  });
});
