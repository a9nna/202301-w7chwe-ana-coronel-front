import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "@fontsource/source-code-pro/700.css";
import "@fontsource/source-code-pro/600.css";
import "@fontsource/source-code-pro/400.css";
import GlobalStyles from "./styles/GlobalStyles";
import { store } from "./store";
import { RouterProvider } from "react-router-dom";
import { router } from "./pages/router/router";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
