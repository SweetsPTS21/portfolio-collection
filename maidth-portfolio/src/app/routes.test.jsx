import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";
import { routes } from "./routes";

describe("portfolio routes", () => {
  it("defines exactly the three required routes", () => {
    expect(routes.map((route) => route.path)).toEqual(["/about", "/projects", "/conclution"]);
  });

  it("renders the about route from source content", () => {
    window.history.pushState({}, "", "/about");
    render(<App />);
    expect(screen.getAllByText(/Đỗ Thị Huyền Mai/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Luật học/i).length).toBeGreaterThan(0);
  });

  it("renders the projects route with six chapter cards", () => {
    window.history.pushState({}, "", "/projects");
    render(<App />);
    expect(screen.getAllByText(/Chương \d:/i).length).toBeGreaterThanOrEqual(6);
    expect(screen.getByText(/An toàn và liêm chính học thuật/i)).toBeInTheDocument();
  });

  it("renders the conclution route with final station content", () => {
    window.history.pushState({}, "", "/conclution");
    render(<App />);
    expect(screen.getByText(/Trải nghiệm và sự thay đổi/i)).toBeInTheDocument();
    expect(screen.getByText(/Định hướng chặng đường phía trước/i)).toBeInTheDocument();
  });
});
