import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Body from './Body'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
// import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div class="container">
      <div class="header">
        <Header/>
      </div>  
      <div class="row"> 
        <div class="sidebar">
          <Sidebar/>
        </div>
        <div class="body">
          <Outlet/>
        </div>
      </div>
      <div class="footer">
        <Footer/>
      </div>
    </div>
  )
}

export default Layout