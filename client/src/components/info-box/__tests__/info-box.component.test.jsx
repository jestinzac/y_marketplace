import { render, screen } from "@testing-library/react";

import InfoBox from "../info-box.component";

describe("InfoBox", () => {
  it("should render of type info", () => {
    const { asFragment } = render(
      <InfoBox classStyleRule="bg-blue-100" text="Test 1" />
    );

    expect(screen.getByText("Test 1")).toBeInTheDocument();
    expect(screen.getByTestId("info-box")).toHaveAttribute("data-type", "info");
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render of type error", () => {
    const { asFragment } = render(
      <InfoBox classStyleRule="bg-red-100" text="Error Text" type="error" />
    );

    expect(screen.getByText("Error Text")).toBeInTheDocument();
    expect(screen.getByTestId("info-box")).toHaveAttribute("data-type", "error");
    expect(asFragment()).toMatchSnapshot();
  });
});
