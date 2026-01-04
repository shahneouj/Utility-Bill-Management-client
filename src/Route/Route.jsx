import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import MyBill from "../Page/MyBill/MyBill";
import Bills from "../Page/Bills/Bills";
import Home from "../Page/Home/Home";
import BillDetails from "../Page/BillDetails/BillDetails";
import Loader from "../Component/Loader/Loader";
import About from "../Page/About/About";
import ContactUs from "../Page/ContactUs/ContactUs";
import PrivacyPolicy from "../Page/PrivacyPoliciy/PrivacyPolicy";
import TermPage from "../Page/TermPage/TermPage";
import Dashbord from "../Layout/Dashbord/Dashbord";
import DashboardOverview from "../Page/DashBord/Overview/DashboardOverview";
import ProfilePage from "../Page/DashBord/Profile/ProfilePage";
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
        path: "/about",
        element: <About />,
      }, {
        path: "/contactus",
        element: <ContactUs />,
      }
      , {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      }, {
        path: "/terms",
        element: <TermPage />,
      }
    ]

  }, {
    path: "/dashbord",
    element: <Dashbord />,
    children: [
      {
        index: true,
        element: <DashboardOverview />
      },
      {
        path: "my-bills",
        element: <MyBill></MyBill>,
      }, {
        path: "profile",
        element: <ProfilePage />,
      }
    ]

  }
]);
