import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import CreateUserForm from "../../components/CreateUserForm/CreateUserForm";
import LoginForm from "../../components/LoginForm/LoginForm";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <LoginForm /> },
      { path: "/create-user", element: <CreateUserForm /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
