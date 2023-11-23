import { render, screen } from "@testing-library/react";

import Calendar from "../calendar.component";

describe("Calender Icon", () => {
  it("should render on load", () => {
    const { asFragment } = render(<Calendar />);

    expect(screen.getByTestId('calender-svg-icon')).toBeTruthy();
    expect(asFragment()).toMatchSnapshot();
  })
})