import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { routes } from "../../pages/router/router";
import { store } from "../../store";

describe("Given a CreateUserForm component", () => {
  describe("When its rendered", () => {
    test("Then it should show an imput with text 'username'", () => {
      const expectedName = "username";

      const router = createMemoryRouter(routes, {
        initialEntries: ["/create-user"],
      });
      render(
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      );

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
      render(
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      );

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
      render(
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      );

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
      render(
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      );

      const name = screen.getByRole("button", {
        name: expectedName,
      });

      expect(name).toBeInTheDocument();
    });
  });
});
