import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home.jsx";
import About from "./pages/About/About";
import Tutorials from "./pages/Tutorials/Tutorials";
import Detect from "./pages/Detect.jsx";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start" element={<Detect />} />
        <Route path="/about" element={<About />} />
        <Route path="/tutorials" element={<Tutorials />} />
      </Routes>
    </Router>
  );
}
