import React from "react";
import Header from "../Component/Header/Header";
import { Outlet } from "react-router";
import Footer from "../Component/Footer/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      <Toaster></Toaster>
    </>
  );
};

export default Root;
