import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import useDeviceSize from "@/hooks/useDeviceSize";

describe("useDeviceSize", () => {
  beforeAll(() => {
    // Fixed window size
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      value: 1024,
    });

    Object.defineProperty(window, "innerHeight", {
      writable: true,
      value: 768,
    });
  });

  it("should return initial device size", () => {
    let hookResult: any;

    const TestComponent = () => {
      hookResult = useDeviceSize();
      return null;
    };

    render(<TestComponent />);

    expect(hookResult[0]).toBe(1024);
    expect(hookResult[1]).toBe(768);
  });

  it("should update device size on window resize", () => {
    let hookResult: any;

    const TestComponent = () => {
      hookResult = useDeviceSize();
      return null;
    };

    render(<TestComponent />);

    // Simulate window resizing
    act(() => {
      window.innerWidth = 800;
      window.innerHeight = 600;

      window.dispatchEvent(new Event("resize"));
    });

    expect(hookResult[0]).toBe(800);
    expect(hookResult[1]).toBe(600);
  });
});
