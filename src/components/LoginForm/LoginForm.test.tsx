import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { routes } from "../../pages/router/router";

describe("Given a LoginForm component", () => {
  describe("When its rendered", () => {
    test("Then it should show an imput with text 'username'", () => {
      const expectedName = "username";

      const router = createMemoryRouter(routes, {
        initialEntries: ["/"],
      });
      render(<RouterProvider router={router} />);

      const name = screen.getByRole("textbox", {
        name: expectedName,
      });

      expect(name).toBeInTheDocument();
    });

    test("Then it should show an imput with text 'password'", () => {
      const expectedName = "password";

      const router = createMemoryRouter(routes, {
        initialEntries: ["/"],
      });
      render(<RouterProvider router={router} />);

      const name = screen.getByRole("textbox", {
        name: expectedName,
      });

      expect(name).toBeInTheDocument();
    });
  });
});
