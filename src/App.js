import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import TOC from "./Components/TOC";
import Breadcrumbs from "./Components/Breadcrumbs";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="initial-content">
          <Breadcrumbs />
          <div className="main">
            <TOC className="toc" />
            <div className="content">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />}></Route>
              </Routes>
            </div>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
