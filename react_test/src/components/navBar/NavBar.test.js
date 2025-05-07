import {  screen } from "@testing-library/react";
import { renderWithRouter } from "src/tests/helpers/renderWithRouter";
import NavBar from "./NavBar";
import userEvent from "@testing-library/user-event";

describe("NavBar", () => {

  test("route about page ", () => {
    renderWithRouter(<NavBar />, ["/"]);
    const aboutLink = screen.getByTestId("about-link");
    userEvent.click(aboutLink);
    expect(screen.getByTestId("about-page")).toBeInTheDocument();
  });
  test("route user page ", () => {
    renderWithRouter(<NavBar />, ["/"]);
    const usersLink = screen.getByTestId("users-link");
    userEvent.click(usersLink);
    expect(screen.getByTestId("users-page")).toBeInTheDocument();
  });
  test("test navbar mainLink ", () => {
    renderWithRouter(<NavBar />, ["/"]);
    const mainLink = screen.getByTestId("main-link");
    userEvent.click(mainLink);
    expect(screen.getByTestId("main-page")).toBeInTheDocument();
  });
});
