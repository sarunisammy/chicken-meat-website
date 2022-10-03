import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Layout from "./component/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";

import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/">
          <Route path="/Layout" element={<Layout />} />
          <Route index element={<Home />}></Route>
          <Route path="Menu" element={<Menu />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
