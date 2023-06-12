import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import TvList from "@/components/TvList";

const mockTv = [
  { id: 1, name: "TV Show 1", poster_path: "/path/to/poster1.jpg" },
  { id: 2, name: "TV Show 2", poster_path: "/path/to/poster2.jpg" },
];

describe("TvList", () => {
  it("should render TvList component with correct title", () => {
    render(<TvList tv={mockTv} />);
    const titleElement = screen.getByText("TV");
    expect(titleElement).toBeInTheDocument();
  });

  it("should render TvList component with correct number of TV shows", () => {
    render(<TvList tv={mockTv} />);
    const tvElements = screen.getAllByRole("link");
    expect(tvElements.length).toBe(mockTv.length);
  });
});
