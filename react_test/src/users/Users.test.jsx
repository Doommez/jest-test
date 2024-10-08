import { render, screen } from "@testing-library/react";
import axios from "axios";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Users from "./Users";
import UsersDetailsPage from "src/pages/UsersDetailsPage";
import AppRouter from "src/router/AppRouter";

jest.mock("axios");

describe("Users", () => {
  let res;
  beforeEach(() => {
    res = {
      data: [
        {
          id: 1,
          name: "Leanne Graham",
        },
        {
          id: 2,
          name: "Ervin Howell",
        },
        {
          id: 3,
          name: "Clementine Bauch",
        },
      ],
    };
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  test("Item", async () => {
    // @ts-ignore
    axios.get.mockReturnValue(res);
    render(
      <MemoryRouter>
        <Users />
      </MemoryRouter>
    );

    const users = await screen.findAllByTestId("user-item");

    expect(users.length).toBe(3);
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  test("Redirect", async () => {
    // @ts-ignore
    axios.get.mockReturnValue(res);
    render(
      <MemoryRouter initialEntries={["/users"]}>
        <AppRouter />
      </MemoryRouter>
    );

    const users = await screen.findAllByTestId("user-item");
    expect(users.length).toBe(3);
    expect(axios.get).toHaveBeenCalledTimes(1);
    userEvent.click(users[0]);
    expect(screen.getByTestId("UsersDetailsPage")).toBeInTheDocument();
  });
});
