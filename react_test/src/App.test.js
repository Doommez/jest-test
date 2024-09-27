import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { toBeInTheDocument } from "@testing-library/jest-dom/matchers";
import { MemoryRouter } from "react-router-dom";

describe("App", () => {
  test("link", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });
  // test("link", () => {
  //   render(<App />);
  //   const HelloWorldElemnt = screen.getByText(/Hello world/i);
  //   const btn = screen.getByRole("button");
  //   const input = screen.getByPlaceholderText(/input/i);
  //   expect(HelloWorldElemnt).toBeInTheDocument();
  //   expect(btn).toBeInTheDocument();
  //   expect(input).toMatchSnapshot();
  // });
  // test("second", async () => {
  //   render(<App />);
  //   const HelloWorldElemnt = await screen.findByText(/kkk/i);
  //   expect(HelloWorldElemnt).toBeInTheDocument();
  // });
  // test("toggle", () => {
  //   render(<App />);
  //   const btn = screen.getByTestId("toggle-btn");
  //   const div = screen.queryByTestId("toggle-elem");
  //   expect(div).toBeNull();
  //   fireEvent.click(btn);
  //   expect(screen.getByTestId("toggle-elem")).toBeInTheDocument();
  // });
  // test("input", () => {
  //   render(<App />);
  //   const input = screen.getByPlaceholderText(/input/i);
  //   expect(input).toContainHTML("");
  //   fireEvent.input(input, {
  //     target: {
  //       value: "12341234",
  //     },
  //   });
  //   expect(input).toContainHTML("12341234");
  // });
});
