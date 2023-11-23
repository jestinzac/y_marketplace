import { render, screen } from "@testing-library/react";

import Spinner from "../spinner.component";

describe("Spinner", () => {
  it("should render the component", () => {
    const { asFragment } = render(<Spinner />);

    expect(screen.getByTestId("loader")).toHaveClass("animate-pulse");
    expect(screen.getByTestId("loader")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
