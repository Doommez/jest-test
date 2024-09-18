import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders learn react link", () => {
    render(<App />);

    const HelloWorldElemnt = screen.getByText(/Hello world/i);
    const btn = screen.getByRole("button");
    const input = screen.getByPlaceholderText(/input/i);
    expect(HelloWorldElemnt).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toMatchSnapshot();
  });
  test("second", () => {
    render(<App />);

    const HelloWorldElemnt = screen.getByText(/Hello world/i);
  });
});
