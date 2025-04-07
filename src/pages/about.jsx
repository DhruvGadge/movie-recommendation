import React from "react";
import "../styles/about.css";
const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About MovieApp</h1>
        <p>
          MovieApp is a platform for movie lovers. Track the movies you've watched, save those you want to see, and share your opinions with friends.  
          Discover new films based on recommendations and ratings from the community.
        </p>

        <div className="about-sections">
          <div className="section">
            <h2>🎬 Discover</h2>
            <p>Explore a vast collection of movies across various genres, handpicked by film enthusiasts.</p>
          </div>
          <div className="section">
            <h2>⭐ Rate & Review</h2>
            <p>Give ratings, write reviews, and help others decide what to watch next.</p>
          </div>
          <div className="section">
            <h2>📌 Your Watchlist</h2>
            <p>Keep track of the movies you love and the ones you plan to watch in the future.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
