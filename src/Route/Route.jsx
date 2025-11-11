import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import MyBill from "../Page/MyBill/MyBill";
import Bills from "../Page/Bills/Bills";
import Home from "../Page/Home/Home";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      { path: "/all-bills", element: <Bills></Bills> },
      {
        path: "/my-bills",
        element: <MyBill></MyBill>,
      },
    ],
  },
]);
