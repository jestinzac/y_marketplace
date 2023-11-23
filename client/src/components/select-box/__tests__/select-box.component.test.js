import { render, screen, fireEvent } from "@testing-library/react";

import SelectBox from "../select-box.component";

describe("SelectBox", () => {
  let dataItems;
  beforeAll(() => {
    dataItems = [
      {
        id: 1,
        username: "John",
      },
      {
        id: 2,
        username: "Smith",
      },
    ];
  });

  it("should render the element without any values", () => {
    const { asFragment } = render(<SelectBox type="username" />);
    const options = screen.queryAllByTestId("option-value");

    expect(screen.getByTestId("username")).toHaveAttribute("id", "username");
    expect(screen.getByTestId("username")).toBeInTheDocument();
    expect(options.length).toBe(0);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render the element with values if passed", () => {
    const { asFragment } = render(
      <SelectBox type="username" dataItems={dataItems} />
    );
    const options = screen.queryAllByTestId("option-value");

    expect(screen.getByTestId("username")).toHaveAttribute("id", "username");
    expect(screen.getByTestId("username")).toBeInTheDocument();
    expect(options.length).toBe(2);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render the element with values and trigger event on change", async () => {
    const onChangeHandlerMock = jest.fn(() => "Change triggered");
    const { asFragment } = render(
      <SelectBox
        type="username"
        dataItems={dataItems}
        onChangeHandler={onChangeHandlerMock}
      />
    );
    const options = screen.queryAllByTestId("option-value");

    fireEvent.change(screen.getByTestId("username"));

    expect(screen.getByTestId("username")).toHaveAttribute("id", "username");
    expect(screen.getByTestId("username")).toBeInTheDocument();
    expect(options.length).toBe(2);

    await expect(onChangeHandlerMock).toHaveReturnedWith("Change triggered");
    expect(asFragment()).toMatchSnapshot();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });
});
