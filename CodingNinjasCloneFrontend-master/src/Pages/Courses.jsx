import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../Components/NavBar';
import CourseHero from '../Components/CourseHero';
import newbanner from '../images/Alum/newbanner.svg'
import '../Components/style.css'
import {AiOutlineClockCircle} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import FooterTop from '../Components/FooterTop';
import ImportantLinks from '../Components/ImportantLinks';
import PayAccept from '../Components/PayAccept';

const Courses= () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('https://codingninjasclonebackend.onrender.com/courses');
        setCourses(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCourses();
  }, []);

  const handleSearch = async () => {
    try {
      const response = await axios.get('https://codingninjasclonebackend.onrender.com/courses/search', {
        params: {
          keyword: searchKeyword,
        },
      });
      setSearchResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  const handleNavigation = (id, course) => {
    navigate(`/courses/${id}`, { state: course })
  }
  return (
    <div className="courses">
      <NavBar/>
      <CourseHero/>
      <div className="cou-bann">
      <img src={newbanner} alt="banner" />
      </div>

      <h2>Search Courses</h2>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>

      {searchResults.length > 0 && (
        <div className="search-results">
          <h3>Search Results</h3>
          <ul className="course-items">
            {searchResults.map((course) => (
              <li key={course._id} className="course-item" >
                <div className="course-name">{course.name}</div>
                <div className="course-description">{course.description}</div>
                <div className="course-duration">Duration: {course.duration}</div>
                <div className="course-fees">Fees: {course.fees}</div>
              </li>
            ))}
          </ul>
        </div>
      )}

    <div className="course-list">
      <h2>All Courses</h2>
      <ul className="course-items">
        {courses.map((course) => (
          <li key={course._id} className="course-item" onClick={() => handleNavigation(course._id, course)}>
            <div className="course-name"><span>{course.name}</span> <img src={course.image} alt="logos" /></div>  
            <div className="course-description">{course.description}</div>
            <div className="course-duration"><AiOutlineClockCircle/>  {course.duration}</div>
            <div className="course-fees">Fees: {course.fees}</div>                       
          </li>
        ))}
      </ul>      
    </div> 
    <FooterTop/>
      <ImportantLinks/>
      <PayAccept/>     
    </div>
  );
};

export default Courses
