import React from "react";
import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";
const Layout = props => {
  return (
    <div>
      <Head>
        <title>My Next React Todo App</title>
        <link rel="stylesheet" href="../../static/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous"/>
      </Head>
      <div className="d-flex flex-column justify-content-between">
        <Navbar />
        <div className="container">{props.children}</div>
       
      </div>
    </div>
  );
};

export default Layout;
