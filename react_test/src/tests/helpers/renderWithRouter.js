import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AppRouter from "src/router/AppRouter";

export const renderWithRouter = (component, initialRouter) => {
  return render(
    <MemoryRouter initialEntries={initialRouter}>
      <AppRouter />
      {component}
    </MemoryRouter>
  );
};
