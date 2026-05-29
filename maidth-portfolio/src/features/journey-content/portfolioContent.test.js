import { describe, expect, it } from "vitest";
import { portfolioContent } from "./portfolioContent";

describe("portfolio content mapping", () => {
  it("maps source markdown into three route content groups", () => {
    expect(portfolioContent.about.name).toBe("Đỗ Thị Huyền Mai");
    expect(portfolioContent.about.studentId).toBe("24061270");
    expect(portfolioContent.projects).toHaveLength(6);
    expect(portfolioContent.conclusion.sections).toHaveLength(5);
  });

  it("preserves required project chapter titles", () => {
    expect(portfolioContent.projects.map((project) => project.title)).toEqual([
      "Tổ chức, sắp xếp và lưu trữ dữ liệu",
      "Khai thác dữ liệu và thông tin",
      "Tổng quan về trí tuệ nhân tạo",
      "Giao tiếp và hợp tác trong môi trường số",
      "Sáng tạo nội dung số",
      "An toàn và liêm chính học thuật trong môi trường số",
    ]);
  });
});

