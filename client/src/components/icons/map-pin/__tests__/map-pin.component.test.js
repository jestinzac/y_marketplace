import { render, screen } from "@testing-library/react";

import MapPin from "../map-pin.component";

describe("Calender Icon", () => {
  it("should render on load", () => {
    const { asFragment } = render(<MapPin />);

    expect(screen.getByTestId('map-pin-svg-icon')).toBeTruthy();
    expect(asFragment()).toMatchSnapshot();
  })
})