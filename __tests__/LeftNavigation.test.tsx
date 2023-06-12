import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import LeftNavigation from "@/components/LeftNavigation";

describe("LeftNavigation", () => {
  it("should be empty if the device is not a desktop", () => {
    window.innerWidth = 300; // mock mobile device

    const { container } = render(<LeftNavigation />);
    expect(container).toBeEmptyDOMElement();
  });

  it("should not be empty if the device is a desktop", () => {
    window.innerWidth = 1200; // mock desktop device

    const { container } = render(<LeftNavigation />);
    expect(container).not.toBeEmptyDOMElement();
  });
});
