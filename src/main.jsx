import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/root";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu from "./components/Menu";
import BookTable from "./components/BookTable";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/contact",
        element: <BookTable></BookTable>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
