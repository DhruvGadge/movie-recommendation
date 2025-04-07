import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomePage.css"; // Ensure the correct path for CSS

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="hero">
        <div className="hero-content">
          <h1>Track films you’ve watched.</h1>
          <p>Save those you want to see. Tell your friends what’s good.</p>
          <Link to="/signup" className="cta-button">
            Get started — it’s free!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
