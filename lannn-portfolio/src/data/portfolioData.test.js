import { describe, expect, it } from "vitest";
import { portfolioData } from "./portfolioData";

describe("portfolioData", () => {
  it("keeps Lan identity and source-only content", () => {
    expect(portfolioData.person).toEqual({
      fullName: "Nguyễn Ngọc Lan",
      studentId: "24062017",
      major: "Luật",
      university: "Đại học Luật - Đại học Quốc gia Hà Nội",
      interests: ["Đọc sách", "Nghe nhạc", "Xem concert"],
    });
    expect(portfolioData.about.tools).toContain("File Explorer");
    expect(portfolioData.about.tools).toContain("Canva");
    expect(portfolioData.about.tools).not.toContain("Tailwind CSS");
  });

  it("maps exactly six project chapters to six evidence PDFs", () => {
    expect(portfolioData.projects).toHaveLength(6);
    expect(portfolioData.projects.map((project) => project.evidence)).toEqual([
      "docs/bt1.pdf",
      "docs/bt2.pdf",
      "docs/bt3.pdf",
      "docs/bt4.pdf",
      "docs/bt5.pdf",
      "docs/bt6.pdf",
    ]);
    expect(portfolioData.projects.map((project) => project.chapter)).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
