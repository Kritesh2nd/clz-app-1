import React, { useState } from 'react'
import { Outlet, Link } from "react-router-dom";
const UserManagement = ({userData}) => {
  

 
  return (
    <div className='flexcol'>
      <h2>User Management Page</h2>
      <div className='flex jcc jcfs bor'>
        <div><Link to="/add-user" className='sidebar-nav-link borx1 br3 mtb10 mb20' style={{display:'block'}}>Add User</Link></div>
        <div className='fg1'></div>
      </div>
      <table className="umTable">
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Age</th>
          <th>City</th>
        </tr>
        {
          userData.map(d=>(
            <tr>
              <td>{d.username}</td>
              <td>{d.email}</td>
              <td>{d.age}</td>
              <td>{d.city}</td>
            </tr>
          ))
        }
      </table>
    </div>
  )
}

export default UserManagement