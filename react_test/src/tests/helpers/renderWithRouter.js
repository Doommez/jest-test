import { MemoryRouter } from "react-router-dom";
import AppRouter from "src/router/AppRouter";

export const renderWithRouter = (component, initialRouter) => {
  return (
    <MemoryRouter initialEntries={initialRouter}>
      <AppRouter />
      {component}
    </MemoryRouter>
  );
};
