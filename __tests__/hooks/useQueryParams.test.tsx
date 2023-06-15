import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { render, act } from "@testing-library/react";

import useQueryParams from "@/hooks/useQueryParams";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
  useSearchParams: jest.fn(),
}));

interface QueryParams {
  param1?: string;
  param2?: string;
  param3?: string;
  param4?: string;
}

describe("useQueryParams", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: jest.fn(),
    });

    (usePathname as jest.Mock).mockReturnValue("/example");
    (useSearchParams as jest.Mock).mockReturnValue(
      new URLSearchParams("param1=value1&param2=value2")
    );
  });

  it("should initialize queryParams correctly", () => {
    let queryParams: Partial<QueryParams> = {};

    const TestComponent = (): null => {
      queryParams = useQueryParams<QueryParams>().queryParams;
      return null;
    };

    render(<TestComponent />);

    expect(queryParams).toEqual({ param1: "value1", param2: "value2" });
  });

  it("should call router.push with the correct URL", () => {
    const pushMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      push: pushMock,
    });

    let setQueryParams: (params: Partial<QueryParams>) => void;

    const TestComponent = (): null => {
      const hookResult = useQueryParams<QueryParams>();
      setQueryParams = hookResult.setQueryParams;
      return null;
    };

    render(<TestComponent />);

    act(() => {
      setQueryParams({ param3: "value3", param4: "value4" });
    });

    render(<TestComponent />);

    expect(pushMock).toHaveBeenCalledWith(
      "/example?param1=value1&param2=value2&param3=value3&param4=value4"
    );
  });
});
