import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import MovieList from "@/components/MovieList";

const mockMovies = [
  { id: 1, title: "Movie 1", poster_path: "/path/to/poster1.jpg" },
  { id: 2, title: "Movie 2", poster_path: "/path/to/poster2.jpg" },
];

describe("MovieList", () => {
  it("should render MovieList component with correct title", () => {
    render(<MovieList movies={mockMovies} />);
    const titleElement = screen.getByText("Movies");
    expect(titleElement).toBeInTheDocument();
  });

  it("should render MovieList component with correct number of movies", () => {
    render(<MovieList movies={mockMovies} />);
    const movieElements = screen.getAllByRole("link");
    expect(movieElements.length).toBe(mockMovies.length);
  });
});
