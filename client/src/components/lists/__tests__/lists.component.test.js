import { render, screen } from "@testing-library/react";

import Lists from "../lists.component";

describe("List", () => {
  it("should render the list container with respective items", () => {
    const mockData = {
      id: 5,
      username: "mario.bros",
      jobs: [{
        id: 2,
        tier: "Plumbers", 
        headline: "Leaky tap needs fixing", 
        description: "The tap in my kitchen is dripping all of the time, please fix it.", 
        date_added: "2020-11-05T15:47:54Z", 
        area: "Brooklyn, NYC"
      }]
    }
    const { asFragment } = render(
      <Lists {...mockData} />
    );

    expect(screen.getByText("Leaky tap needs fixing")).toBeInTheDocument();
    expect(screen.getByTestId("list-container")).toHaveAttribute("data-username", "mario.bros");
    expect(screen.getByTestId("calender-svg-icon")).toBeInTheDocument();
    expect(screen.getByTestId("map-pin-svg-icon")).toBeInTheDocument();
    expect(screen.getByTestId("formatted-date").textContent).toBe("11/5/2020, 15:47");
    expect(screen.getByTestId("list-item")).toHaveAttribute("id", "2");
    expect(asFragment()).toMatchSnapshot();
  });

  it("should show info box with respective message if its not error but not able to find in the list items", () => {
    const mockData = {
      id: 5,
      username: "mario.bros",
      jobs: []
    }
    const { asFragment } = render(
      <Lists {...mockData} hasError={false} />
    );

    expect(screen.getByTestId("list-container")).toHaveAttribute("data-username", "mario.bros");
    expect(screen.queryByTestId("calender-svg-icon")).not.toBeInTheDocument();
    expect(screen.queryByTestId("map-pin-svg-icon")).not.toBeInTheDocument();

    expect(screen.getByTestId("info-box")).toBeInTheDocument();
    expect(screen.getByText("No jobs available at the moment.")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  })

});
