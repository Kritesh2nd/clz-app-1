import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/theme/Layout';

const App2 = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="faq" element={<h2>FAQ</h2>}/>
          <Route path="contact" element={<h2>contact</h2>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App2