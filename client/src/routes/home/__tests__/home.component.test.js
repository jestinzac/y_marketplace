import { render, screen, waitFor } from "@testing-library/react";

import Home from "../home.component";
import mockData from "../../../mock.data"

describe("Home", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  const tillComponentIsReady = async () => {
    await waitFor(() => {
      expect(screen.getByText("Display Name:")).toBeTruthy();
    });
  };

  it("should render the component with loader", () => {
    const { asFragment } = render(<Home />);

    expect(screen.getByTestId("loader")).toHaveClass("animate-pulse");
    expect(screen.getByTestId("loader")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders users when API call succeeds", async () => {
    fetchMock
      .mockResolvedValueOnce({
        status: 200,
        json: jest.fn(() => mockData[0]),
      })
      .mockResolvedValueOnce({
        status: 200,
        json: jest.fn(() => mockData[1]),
      })
      .mockResolvedValueOnce({
        status: 200,
        json: jest.fn(() => mockData[2]),
      })
      .mockResolvedValue({
        status: 200,
        json: jest.fn(() => mockData[3]),
      });

    const { asFragment } = render(<Home />);

    await tillComponentIsReady();

    expect(screen.getByTestId("directory")).toBeInTheDocument();
    expect(screen.getByTestId("username")).toBeInTheDocument();
    expect(screen.getByTestId("option-value")).toHaveAttribute("value", "5");
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders error when API call fails", async () => {
    fetchMock.mockReject(() => Promise.reject("API error"));

    const { asFragment } = render(<Home />);

    await tillComponentIsReady();
    expect(screen.getByTestId("info-box")).toHaveAttribute("data-type", "error");
    expect(screen.getByText("Something went wrong, please check again later.")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });
});
