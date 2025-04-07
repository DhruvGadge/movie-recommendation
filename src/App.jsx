import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Login from "./pages/login"; // Fixed incorrect import casing
import Navbar from "./components/navbar"; // Ensure this matches the filename
import Footer from "./components/footer"; // Ensure this matches the filename
import Signup from "./pages/signup";
import "./App.css";

function App() {
  return (
    <Router>
      {/* Navbar stays fixed at the top */}
      <Navbar />

      {/* Main content container */}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>

      {/* Footer stays at the bottom */}
      <Footer />
    </Router>
  );
}

export default App;
