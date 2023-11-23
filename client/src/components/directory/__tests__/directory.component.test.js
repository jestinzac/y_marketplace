import { render, screen } from "@testing-library/react";

import Directory from "../directory.component";

describe("ListItem", () => {
  const mockData = [{
    id: 1,
    username: "mario.bros",
    display_name: "Mario Bros.",
    jobs: [{
      id: 2,
      tier: "Plumbers", 
      headline: "Leaky tap needs fixing", 
      description: "The tap in my kitchen is dripping all of the time, please fix it.", 
      date_added: "2020-11-05T15:47:54Z", 
      area: "Brooklyn, NYC"
    }]
  }]

  it("should render the component", () => {
    const { asFragment } = render(
      <Directory  data={mockData} hasError={false} />
    );
    
    expect(screen.getByTestId("directory")).toBeInTheDocument();
    expect(screen.getByTestId("column-1-search")).toBeInTheDocument();
    expect(screen.getByTestId("column-2-jobs")).toBeInTheDocument();
    
    expect(screen.getByText("Leaky tap needs fixing")).toBeInTheDocument();
    expect(screen.getByTestId("calender-svg-icon")).toBeInTheDocument();
    expect(screen.getByTestId("map-pin-svg-icon")).toBeInTheDocument();
    
    expect(screen.getByTestId("formatted-date").textContent).toBe("11/5/2020, 15:47");
    expect(screen.getByTestId("list-item")).toHaveAttribute("id", "2");
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render info box if there is no data available", () => {
    const { asFragment } = render(
      <Directory  data={[]} hasError={false} />
    );
    
    expect(screen.getByTestId("directory")).toBeInTheDocument();
    expect(screen.getByTestId("column-1-search")).toBeInTheDocument();
    expect(screen.getByTestId("column-2-jobs")).toBeInTheDocument();
    
    expect(screen.getByTestId("info-box")).toHaveAttribute("data-type", "info");
    expect(screen.getByText("No jobs available at the moment.")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render error info box if there is failure in service or any other errors", () => {
    const { asFragment } = render(
      <Directory  data={[]} hasError={true} />
    );
    
    expect(screen.getByTestId("directory")).toBeInTheDocument();
    expect(screen.getByTestId("column-1-search")).toBeInTheDocument();
    expect(screen.getByTestId("column-2-jobs")).toBeInTheDocument();
    
    expect(screen.getByTestId("info-box")).toHaveAttribute("data-type", "error");
    expect(screen.getByText("Something went wrong, please check again later.")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
