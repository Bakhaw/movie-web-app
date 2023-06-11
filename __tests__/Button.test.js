import { render, screen } from "@testing-library/react";
import React from "react";
import Button from "../src/components/Button";

describe("Button tests", () => {
  it("should contains the heading 1", () => {
    render(<Button />);
    const heading = screen.getByText(/Button/i);
    expect(heading).toBeInTheDocument();
  });
});
