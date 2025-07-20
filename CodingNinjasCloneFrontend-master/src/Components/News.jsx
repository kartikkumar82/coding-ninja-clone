import React, { useState } from "react";
import { CgChevronDoubleRightR } from "react-icons/cg";
import { CgChevronDoubleLeftR } from "react-icons/cg";
import arti1 from "../images/News/1.jpg";
import arti2 from "../images/News/2.jpg";
import arti3 from "../images/News/3.jpg";
import arti4 from "../images/News/4.png";
import arti5 from "../images/News/5.jpg";
import arti6 from "../images/News/6.png";
import arti7 from "../images/News/7.webp";
import arti8 from "../images/News/8.jpg";
import arti9 from "../images/News/9.png";
import arti10 from "../images/News/10.jpg";
import arti11 from "../images/News/11.jpg";
import arti12 from "../images/News/12.jpg";
import arti13 from "../images/News/13.png";
import arti14 from "../images/News/14.jpg";
import arti15 from "../images/News/15.png";
import arti16 from "../images/News/16.png";

const News = () => {
  const [showFirstPage, setShowFirstPage] = useState(true);

  const togglePage = () => {
    setShowFirstPage(!showFirstPage);
  };

  const Page1 = [
    {
      title: "Platforms To Watch Out For If You Want To Learn Coding",
      image: arti1,
    },
    { title: "Why learn programming?", image: arti2 },
    {
      title: "Coding Ninjas aims for coding curiosity among students",
      image: arti3,
    },
    {
      title:
        "Coding Ninjas Collaborates With Chitkara University To Offer Programming Courses",
      image: arti4,
    },
    { title: "Coding Ninjas Turns Past Learners Into Teachers", image: arti5 },
    {
      title:
        "Coding Ninjas aims to crack the edtech code by reskilling and upskilling college students",
      image: arti6,
    },
    { title: "Coding-enabled world and workforce", image: arti7 },
    {
      title:
        "Ed-tech start-up Coding Ninjas to offer coding, programming courses for students",
      image: arti8,
    },
  ];

  const Page2 = [
    { title: "Coding Ninjas Launches Ninjas Junior Program", image: arti9 },
    { title: "Coding Bootcamps: Silver lining and beyond", image: arti10 },
    {
      title:
        "How the pandemic proved to be rocket fuel for India's EdTech platforms",
      image: arti11,
    },
    {
      title: "How Will The New Education Policy Make India AI-Ready",
      image: arti12,
    },
    {
      title:
        "Coding Ninjas partners with recruitment platform Hirist.com to offer tech-related jobs",
      image: arti13,
    },
    {
      title: "5 platforms placing and up skilling graduates remotely",
      image: arti14,
    },
    {
      title: "Coding Ninjas Collaborates With Chitkara University",
      image: arti15,
    },
    {
      title:
        "Coding Ninjas bags the Best Education Startup Of The Year Award 2020",
      image: arti16,
    },
  ];

  const display = showFirstPage ? Page1 : Page2;
  return (
    <div className="news">
      <p>Coding Ninjas in the News</p>
      <div className="news-grid">
        {display.map((item, index) => (
          <div className="news-item" key={index}>
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
      <button onClick={togglePage}>
        {showFirstPage ? (
          <CgChevronDoubleRightR size={40} color="grey" />
        ) : (
          <CgChevronDoubleLeftR size={40} color="grey" />
        )}
      </button>
    </div>
  );
};

export default News;
