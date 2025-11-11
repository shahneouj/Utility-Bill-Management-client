import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
