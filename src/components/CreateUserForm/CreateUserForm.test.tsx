import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { routes } from "../../pages/router/router";

describe("Given a CreateUserForm component", () => {
  describe("When its rendered", () => {
    test("Then it should show an imput with text 'username'", () => {
      const expectedName = "username";

      const router = createMemoryRouter(routes, {
        initialEntries: ["/create-user"],
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
        initialEntries: ["/create-user"],
      });
      render(<RouterProvider router={router} />);

      const name = screen.getByRole("textbox", {
        name: expectedName,
      });

      expect(name).toBeInTheDocument();
    });

    test("Then it should show an imput with text 'email'", () => {
      const expectedName = "email";

      const router = createMemoryRouter(routes, {
        initialEntries: ["/create-user"],
      });
      render(<RouterProvider router={router} />);

      const name = screen.getByRole("textbox", {
        name: expectedName,
      });

      expect(name).toBeInTheDocument();
    });

    test("Then it should show an imput with text 'image'", () => {
      const expectedName = "image";

      const router = createMemoryRouter(routes, {
        initialEntries: ["/create-user"],
      });
      render(<RouterProvider router={router} />);

      const name = screen.getByRole("textbox", {
        name: expectedName,
      });

      expect(name).toBeInTheDocument();
    });

    test("Then it should show an button with text 'Join Bro community'", () => {
      const expectedName = "Join Bro community";

      const router = createMemoryRouter(routes, {
        initialEntries: ["/create-user"],
      });
      render(<RouterProvider router={router} />);

      const name = screen.getByRole("link", {
        name: expectedName,
      });

      expect(name).toBeInTheDocument();
    });
  });
});
