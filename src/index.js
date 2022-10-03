import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route>
          <Route path="/*" element={<App />} />
        </Route>
      </Routes>
      < Footer/>
    </Router>
  </React.StrictMode>
);
