import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import BottomNavigation from "@/components/BottomNavigation";

describe("BottomNavigation", () => {
  it("should be empty if the device is not a mobile", () => {
    window.innerWidth = 1200; // mock desktop device

    const { container } = render(<BottomNavigation />);
    expect(container).toBeEmptyDOMElement();
  });

  it("should not be empty if the device is a mobile", () => {
    window.innerWidth = 350; // mock mobile device

    const { container } = render(<BottomNavigation />);
    expect(container).not.toBeEmptyDOMElement();
  });
});
