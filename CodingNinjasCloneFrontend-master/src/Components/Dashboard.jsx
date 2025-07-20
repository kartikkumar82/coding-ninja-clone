import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom';
import clslogo from '../images/Alum/cls-logo.jpg'
import  {BsArrowUpRight} from 'react-icons/bs'
import  {AiOutlineQuestionCircle} from 'react-icons/ai'
import  {BiMessageAltDetail} from 'react-icons/bi'
import  {FaWallet} from 'react-icons/fa'
import  expCourse  from '../images/explore-our-courses.svg'
import FooterTop from './FooterTop';
import ImportantLinks from './ImportantLinks';
import PayAccept from './PayAccept';

const Dashboard = () => {
  const {userId} = useParams()
  const [user, setUser] = useState(null);  
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`https://codingninjasclonebackend.onrender.com/user/dashboard/${userId}`); 
        setUser(response.data.user);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserData();
  }, []);

  useEffect(() => {
    fetchEnrolledCourses();
  }, []);

  const fetchEnrolledCourses = () => {
    axios.get(`https://codingninjasclonebackend.onrender.com/user/${userId}/enrolledCourses`)
      .then((response) => {
        setEnrolledCourses(response.data.courses);
      })
      .catch((error) => {
        console.error("Error fetching enrolled courses:", error);
      });
  };

 
  return (
    <div className="classroom">
      <div className="class-nav">
        <div className="left-nav">
          <div className="ln"><img src={clslogo} alt="logo" />
          <h1>Classroom</h1></div>
          <div className="ln">
            <h2>Placement Cell</h2><BsArrowUpRight size={20}/>
          </div>     
        </div>
        <div className="right-nav">
          <AiOutlineQuestionCircle size={30}/>
          <BiMessageAltDetail size={30}/>
          <div className="refer">
            <FaWallet/>
            <span> Refer and Earn</span>
          </div>
        </div>
      </div>
      <div className="dash-cont">
      <h1>Welcome to the Dashboard, {user && user.username}!</h1>
     {user && (
        <>
          <h2>Enrolled Courses</h2>
          <ol>
            {enrolledCourses.map((course) => (
              <li key={course._id}>{course.name}</li>
            ))}
          </ol>
        
        </>
      )}
      </div>
      <div className="explore-courses">
              <img src={expCourse} alt="course" />
              <div><h1>Boost your career with in-demand coding skills.</h1>
              <h1>Explore our coding courses.</h1></div>
              <button className="explore">
                <Link to={'/courses'}>Explore our Courses <BsArrowUpRight size={20}/></Link>
                
              </button>
      </div>
      <FooterTop/>
      <ImportantLinks/>
      <PayAccept/>
    </div>
  );
};

export default Dashboard;
