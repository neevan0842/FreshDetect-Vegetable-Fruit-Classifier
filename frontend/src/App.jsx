import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./components/NotFound";
import Home from "./pages/Home";
import Navbar from "./components/NavBar";
import About from "./pages/About";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <div className="container my-3">
              <About />
            </div>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
