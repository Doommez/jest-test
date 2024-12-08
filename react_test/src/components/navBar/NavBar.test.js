import { render, screen } from "@testing-library/react";
import { renderWithRouter } from "src/tests/helpers/renderWithRouter";
import NavBar from "./NavBar";
import userEvent from "@testing-library/user-event";

describe("NavBar", () => {
  test("Render ", () => {
    renderWithRouter(<NavBar />, ["/"]);
    const mainLink = screen.getByTestId("main-link");
    const aboutLink = screen.getByTestId("about-link");
    const usersLink = screen.getByTestId("users-link");
    userEvent.click(aboutLink);
    expect(screen.getByTestId("about-page")).toBeInTheDocument();
    userEvent.click(mainLink);
    expect(screen.getByTestId("main-page")).toBeInTheDocument();
    userEvent.click(usersLink);
    expect(screen.getByTestId("users-page")).toBeInTheDocument();
  });
});
