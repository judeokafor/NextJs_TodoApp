import React from 'react'
import Head from 'next/head';
import Footer from './Footer'

import Navbar from './Navbar';
const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>
            My Next React Todo App
        </title>
        <link rel="stylesheet" href="../../static/css/bootstrap.min.css"/>
      </Head>
      <Navbar/>
        <div className = "container">
            {props.children}
        </div>
       <Footer/>
    </div>
  )
}

export default Layout


