import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import BistroPage from "./pages/bistro/BistroPage";
import Menu from "./pages/bistro/menu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/bistro",
    element: <BistroPage />,
  },
  {
    path: "/bistro/menu",
    element: <Menu />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
