import { render, screen } from "@testing-library/react";

import ListItem from "../list-item.component";

describe("ListItem", () => {
  const mockData = {
    id: 1,
    tier: "plumber", 
    headline: "My toilet won't flush", 
    description: "There is a problem with my toilet and I need someone to fix it.", 
    date_added: "2020-01-15T10:47:54Z", 
    area: "Brooklyn, NYC"
  };

  it("should render the respective list item", () => {
    Object.defineProperty(global.navigator, "language", {
      get: () => "en-GB",
      enumerable: true,
      configurable: true,
    });

    const { asFragment } = render(
      <ListItem {...mockData} />
    );

    expect(screen.getByText("My toilet won't flush")).toBeInTheDocument();
    expect(screen.getByTestId("calender-svg-icon")).toBeInTheDocument();
    expect(screen.getByTestId("map-pin-svg-icon")).toBeInTheDocument();
    expect(screen.getByTestId("formatted-date").textContent).toBe("15/01/2020, 10:47");
    expect(screen.getByTestId("list-item")).toHaveAttribute("id", "1");
    expect(asFragment()).toMatchSnapshot();
  });
});
