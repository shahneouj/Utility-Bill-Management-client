import React from 'react';
import Header from '../Component/Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Component/Footer/Footer';

const Root = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Root;