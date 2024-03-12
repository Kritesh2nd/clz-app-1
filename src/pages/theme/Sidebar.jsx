import React from 'react'
// import { Outlet, Link } from "react-dom";
import { Outlet, Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div>
      <ul className="sidebar-nav">
        <li className='bor'>
          <Link to="/user-management" className='sidebar-nav-link'>User Management</Link>
        </li>
        <li className='bor'>
          <Link to="/faq" className='sidebar-nav-link'>FAQ</Link>
        </li>
        <li>
          <Link to="/contact" className='sidebar-nav-link'>Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar