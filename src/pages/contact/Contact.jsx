import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../home/home";
import About from "../about/About";
const Contact = () => {
  return (
    <Router>
      <Headers />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About></About>} />
        <Route path="/contact" element={<Contact></Contact>} />
      </Routes>
    </Router>
  );
};

export default Contact;
