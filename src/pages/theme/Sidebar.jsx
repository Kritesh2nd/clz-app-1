import React from 'react'
// import { Outlet, Link } from "react-dom";
import { Outlet, Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div>
      <ul className="sidebar-nav">
        <li>
          <Link to="/user-management" className='txt'>User Management</Link>
        </li>
        <li>
          <Link to="/faq" className='txt'>FAQ</Link>
        </li>
        <li>
          <Link to="/contact" className='txt'>Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar