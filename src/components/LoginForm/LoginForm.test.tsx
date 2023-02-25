import { render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";

describe("Given a LoginForm component", () => {
  describe("When its rendered", () => {
    test("Then it should show an imput with text 'username'", () => {
      const expectedName = "username";

      render(<LoginForm />);

      const name = screen.getByRole("textbox", {
        name: expectedName,
      });

      expect(name).toBeInTheDocument();
    });

    test("Then it should show an imput with text 'password'", () => {
      const expectedName = "password";

      render(<LoginForm />);

      const name = screen.getByRole("textbox", {
        name: expectedName,
      });

      expect(name).toBeInTheDocument();
    });
  });
});
