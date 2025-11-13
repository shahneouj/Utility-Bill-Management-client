import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import MyBill from "../Page/MyBill/MyBill";
import Bills from "../Page/Bills/Bills";
import Home from "../Page/Home/Home";
import BillDetails from "../Page/BillDetails/BillDetails";
import Loader from "../Component/Loader/Loader";
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
        hydrateFallbackElement: <Loader></Loader>,
        element: <Register></Register>,
      },
      { path: "/all-bills", element: <Bills></Bills> },
      {
        path: "/bills/:id",
        element: <BillDetails />,
      },
      {
        path: "/my-bills",
        element: <MyBill></MyBill>,
      },
    ],
  },
]);
