import React from "react";
import heroimg from "../images/hero.webp";
import Typed from 'react-typed'

const Hero = () => {
  return (
    <div className="hero">
    <div className="hero-sec">
      <div className="hero-content">
        <div className="type">
          <Typed strings={['World has enough coders','Chasing Jobs? Let the jobs chase you.','Be more than a coder']} 
          typeSpeed={150} backSpeed={80} loop/>
        </div>
        <p className="hero-highlight">Be a Coding Ninja</p>
        <p>50,000 Students from 300 colleges have trusted us</p>
        <button className="explore">Explore Our Programs</button>
      </div>
      <div className="hero-image">
        <img src={heroimg} alt="hero" className="image-animation"/>
      </div>
    </div>
    </div>
  );
};

export default Hero;
