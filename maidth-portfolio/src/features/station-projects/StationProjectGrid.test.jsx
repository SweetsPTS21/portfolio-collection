import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { StationProjectGrid } from "./StationProjectGrid";

describe("StationProjectGrid detail screen", () => {
  it("opens a full detail screen with real PDF preview and split process steps", () => {
    render(<StationProjectGrid />);

    fireEvent.click(screen.getByRole("button", { name: /xem chi tiết chương 1/i }));

    const detail = screen.getByRole("region", { name: /chi tiết tổ chức, sắp xếp và lưu trữ dữ liệu/i });
    expect(detail).toBeInTheDocument();
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(within(detail).getByTitle(/PDF Chương 1/i)).toHaveAttribute("src", expect.stringContaining("bt1.pdf"));
    expect(within(detail).getByText(/Process 01/i)).toBeInTheDocument();
    expect(within(detail).getByText(/Em áp dụng tư duy tối giản/i)).toBeInTheDocument();
  });
});
