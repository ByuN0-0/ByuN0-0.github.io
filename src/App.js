import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Study from "./pages/Study";
import Project from "./pages/Project";
import Books from "./pages/Books";
import NotFound from "./pages/NotFound";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import TOC from "./Components/TOC";
import Breadcrumbs from "./Components/Breadcrumbs";
import MarkDown from "./Components/MarkDown";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header className="header" />
        <div className="initial-content">
          <Breadcrumbs className="breadcrumbs" />
          <div className="main">
            <TOC className="toc" />
            <div className="content">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/study" element={<Study />} />
                <Route exact path="/:category/:link/:title" element={<MarkDown />} />
                <Route exact path="/Project" element={<Project />} />
                <Route exact path="/Books" element={<Books />} />
                <Route path="*" element={<NotFound />}></Route>
              </Routes>
            </div>
          </div>
        </div>
        <Footer className="footer" />
      </BrowserRouter>
    </div>
  );
}

export default App;
