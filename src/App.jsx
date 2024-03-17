import React, { useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/theme/Layout';
import "./App.css";

import UserManagement from './pages/UserManagement'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import AddUser from './pages/userManagment/AddUser';

const App = () => {
    const [userData, setUserData] = useState([
      {
        id:1,
        username:'kritesh01',
        email:'kritesh01@gmail.com',
        age:21,
        city:'lalitpur',
      },
      {
        id:2,
        username:'shadow',
        email:'shadow@gmail.com',
        age:18,
        city:'void',
      },
      {
        id:3,
        username:'skyblue',
        email:'skyblue@gmail.com',
        age:506,
        city:'sky',
      },
    ]);
  const addUser = (newUserData) => {
    setUserData([
      ...userData,
      newUserData
    ]);
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/user-management" element={<UserManagement userData={userData}/>}/>
          <Route path="/add-user" element={<AddUser addUser={addUser}/>}/>
          <Route path="/faq" element={<FAQ/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App