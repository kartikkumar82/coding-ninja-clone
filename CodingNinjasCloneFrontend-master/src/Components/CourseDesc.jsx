import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import { AiFillHome } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { MdNavigateNext } from "react-icons/md";
import courseInner from '../images/Caro/course-inner.webp'
import PayAccept from "./PayAccept";
import ImportantLinks from "./ImportantLinks";
import FooterTop from "./FooterTop";
import BuyButton from "./BuyButton";
import axios from "axios";

const CourseDesc = () => {
  
  const location = useLocation();
  const course = location.state;
  const userId = localStorage.getItem("userId");
  const courseId = course._id;

  const enrollCourse = () => {
    axios
      .post(`https://codingninjasclonebackend.onrender.com/user/${userId}/enrollCourse/${courseId}`)
      .then((response) => {
        console.log('Course Enrolled');
      })
      .catch((error) => {
        console.error("Error enrolling in the course:", error);
      });
  };

  return (
    <div className="course-desc">
      <div style={{ background: "indigo" }}>
        <NavBar />
      </div>
      <div className="inner-path">
        <AiFillHome color="black" />
        <p>Home</p>
        <MdNavigateNext color="black" size={30} />
        <p>Courses</p>
        <MdNavigateNext color="black" size={30} />
        <p>{course.name}</p>
      </div>
      <div className="main-desc">
        <div className="course-cont">
          <p>{course.name}</p>
          <p>
            {course.description}Top product companies that hire software
            developers require {course.name} as an essential skill set.
          </p>
          <div className="course-choi">
            <Link to={'/onboarding'}>
            <button>Start your free trial</button>
            </Link>
            <div onClick={enrollCourse} >
            <BuyButton courseId={course._id} amount={course.fees} />
            </div>
          </div>
          <div className="other-desc">
            <div className="desc-feat">
              <p>{course.duration}</p>
              <p>Duration of Lectures</p>
            </div>
            <hr />
            <div className="desc-feat">
              <p>₹ {course.fees}</p>
              <p>Fees of Course</p>
            </div>
            <hr />
            <div className="desc-feat">
              <p>4.8 <AiFillStar color="yellow"/></p>
              <p>30K+ Learners enrolled</p>
            </div>
          </div>
        </div>
        <div className="course-img">
          <img src={courseInner} alt="hero" />
        </div>
      </div>
      <FooterTop/>
      <ImportantLinks/>
      <PayAccept/>
    </div>
  );
};

export default CourseDesc;
