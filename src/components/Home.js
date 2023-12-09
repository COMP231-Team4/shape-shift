import React from "react";
import "../styles/Hero.css";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  const handleExploreClick = () => {
    navigate("/workouts");
  };
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="text-content">
          <h1>Ready. Set.</h1>
          <h1>Go!</h1>
          <p>
            Our goal is to spark your enthusiasm for a healthier, more resilient
            version of yourself.
          </p>
          <p>Be the best version of yourself.</p>
          <button onClick={handleExploreClick}>Explore</button>
        </div>
        <div className="feature-image">
          <img src="exercise-illustration.png" alt="Exercise Illustration" />
        </div>
      </div>
    </div>
  );
}

export default Home;
