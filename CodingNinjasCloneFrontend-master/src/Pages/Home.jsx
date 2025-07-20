import React, { useRef } from "react";
import "../App.css";
import NavBar from "../Components/NavBar";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import Alumni from "../Components/Alumni";
import WhyJoin from "../Components/WhyJoin";
import Companies from "../Components/Companies";
import Reviews from "../Components/Reviews";
import OneStop from "../Components/OneStop";
import Experience from "../Components/Experience";
import allCourses from "../images/ac1.svg";
import Contact from "../Components/Contact";
import News from "../Components/News";
import VideoSec from "../Components/VideoSec";
import UpcomingEvents from "../Components/UpcomingEvents";
import FooterTop from "../Components/FooterTop";
import ImportantLinks from "../Components/ImportantLinks";
import PayAccept from "../Components/PayAccept";
import { Link } from "react-router-dom";

const Home = () => {
  const scrollRef = useRef(null);
  const handleScroll = () => {
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (<div className="home">
      <NavBar handleScroll={handleScroll}/>
      <Hero />
      <Banner />      
      <p id="tag">14,000+ CODING NINJAS TO INSPIRE YOU</p>
      <Alumni />
      <Link to={'/alumni'}>
      <button className="hear-more">Hear more stories from our alumni</button>
      </Link>
      <WhyJoin />
      <p id="placed">Our students are placed at</p>
      <Companies />
      <button className="report-btn">Download Placement Report</button>
      <Reviews />
      <OneStop />
      <Experience scrollRef={scrollRef}/>
      <div className="all">
      <img src={allCourses} alt="all courses" />
      </div>      
      <div className="sub">
        <Contact />
        <News />
        <VideoSec />
        <p className="upcoming">UPCOMING EVENTS</p>
        <UpcomingEvents/>
      </div>
      <FooterTop/>
      <ImportantLinks/>
      <PayAccept/>
      </div>
  );
};
       
export default Home;

