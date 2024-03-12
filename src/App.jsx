import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/theme/Layout';
import "./App.css";

import UserManagement from './pages/UserManagement'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/user-management" element={<UserManagement/>}/>
          <Route path="/faq" element={<FAQ/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App