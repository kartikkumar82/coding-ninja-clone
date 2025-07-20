import React from "react";
import Carousel from "./Carousel";
import { Link } from "react-router-dom";
import caro1 from '../images/Caro/1.jpg'
import caro2 from '../images/Caro/2.jpg'
import caro3 from '../images/Caro/3.jpg'

const AlumHero = () => {
  const carouselItems = [
    <div key={1}><img src={caro1} alt="caro" /></div>,
    <div key={2}><img src={caro2} alt="caro" /></div>,
    <div key={3}><img src={caro3} alt="caro" /></div>,
  ];
  return (
    <div className="alum-hero">
      <div className="ah">
        <div className="alum-hero-cont">
          <p>Putting a smile on every student’s face</p>
          <p>
            We’re happy to have been a part of our students’ successful journey
            by landing them a job with their dream company.
          </p>
          <p>Give your career the Ninja Edge</p>
          <Link to={'/courses'}>
          <button className="explore">EXPLORE OUR COURSES</button>
          </Link>
        </div>
        <div className="alum-hero-img">
          <Carousel items={carouselItems} />
        </div>
      </div>
    </div>
  );
};

export default AlumHero;
