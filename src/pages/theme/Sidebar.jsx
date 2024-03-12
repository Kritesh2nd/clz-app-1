import React from 'react'
// import { Outlet, Link } from "react-dom";
import { Outlet, Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div>
      <ul className="sidebar-nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar