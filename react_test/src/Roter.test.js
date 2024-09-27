import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

describe("Router", () => {
  test("Roter test", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const mainLink = screen.getByTestId("main-link");
    const aboutLink = screen.getByTestId("about-link");
    userEvent.click(aboutLink);
    expect(screen.getByTestId("about-page")).toBeInTheDocument();
  });

  test("Roter Error page", () => {
    render(
      <MemoryRouter initialEntries={["/asdfasdfasdf"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByTestId("error-page")).toBeInTheDocument();
  });
});
