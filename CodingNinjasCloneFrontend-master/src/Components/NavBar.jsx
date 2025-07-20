import React, { useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import careercamp from "../images/careercamp.svg";
import axios from "axios";
import Experience from "./Experience";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import {ImCross} from 'react-icons/im'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ComDrop from "./ComDrop";

const NavBar = ({ handleScroll }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleDropdownOpen = () => {
    setIsDropdownOpen(true);
  };
  const handleDropdownClose = () => {
    setIsDropdownOpen(false);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInUsername, setSignInUsername] = useState("");
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const handleToggleModal = () => {
    setShowLogin(!showLogin);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSignInUsernameChange = (e) => {
    setSignInUsername(e.target.value);
  };
  const handleSignInEmailChange = (e) => {
    setSignInEmail(e.target.value);
  };
  const handleSignInPasswordChange = (e) => {
    setSignInPassword(e.target.value);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://codingninjasclonebackend.onrender.com/login",{email,password});
      toast.success(res.data.message);
      if (res.data.message == "Login successful") {
        setLoggedIn(true);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userId", res.data.userId);
      }
    } catch (error) {
      console.log(error);
    }
    setEmail("");
    setPassword("");
    handleCloseModal();
  };

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://codingninjasclonebackend.onrender.com/register", {
        signInUsername,
        signInEmail,
        signInPassword,
      });
      console.log(res);
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
    }
    setSignInUsername("");
    setSignInEmail("");
    setSignInPassword("");
    handleCloseModal();
  };

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await axios.get("https://codingninjasclonebackend.onrender.com/protected-route",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setLoggedIn(true);
          setUsername(response.data.user);
        }
      } catch (error) {
        console.error(error);
      }
    };
    checkLogin();
  }, [loggedIn]);

  const handleLogout = async () => {
    try {
      const res = await axios.post("https://codingninjasclonebackend.onrender.com/logout");
      toast.success(res.data.message);
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      setLoggedIn(false);
      setUsername("");
    } catch (error) {
      console.error(error);
    }
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setScrollPosition(currentPosition);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navbarBackground = scrollPosition > 60 ? "indigo" : "transparent";

  const [menuBar, setMenuBar] = useState(false);
  const userId = localStorage.getItem("userId");
  return (<>
      <div id='ham-icon'>{menuBar ? <IoMdClose size={30} color="#e1e1e3" onClick={()=>{ setMenuBar( !menuBar )}} />
    : <GiHamburgerMenu color="#e1e1e3" size={30} onClick={()=>{ setMenuBar( !menuBar )}}/> }<img className="logo" src={logo} /></div>
    <div className={menuBar ? 'navbar mobile-nav' :  'navbar'}style={{ backgroundColor: navbarBackground }}    >
    {/*  */}
      <nav>
        <ul>
          <li>
            <Link to={"/"}>
              <img className="logo" src={logo} />
            </Link>
          </li>
          <li>
            <Link
              to={"/courses"}
              onMouseEnter={handleDropdownOpen}
              onMouseLeave={handleDropdownClose}
            >
              Courses <IoMdArrowDropdown color="grey" />{" "}
              {isDropdownOpen && (
                <div
                  className="dropdown-modal"
                  onMouseEnter={handleDropdownOpen}
                  onMouseLeave={handleDropdownClose}
                >
                  <Experience />
                </div>
              )}
            </Link>
          </li>
          <li>
            <Link to={"https://www.codingninjas.com/landing/scholarship-test/"}>
              Scholarship <span>Upto 100% Off</span>{" "}
            </Link>
          </li>
          <li>
            <Link onMouseEnter={handleDropdownOpen}
              onMouseLeave={handleDropdownClose}>
              Community
              {isDropdownOpen && (
                <div
                  className="dropdown-modal"
                  onMouseEnter={handleDropdownOpen}
                  onMouseLeave={handleDropdownClose}
                >
                  <ComDrop />
                </div>
              )}
            </Link>
          </li>
          <li>
            <Link
              to={"https://www.codingninjas.com/codestudio/home"}
              onMouseEnter={handleDropdownOpen}
              onMouseLeave={handleDropdownClose}
            >
              Practice <IoMdArrowDropdown color="grey" />
              {isDropdownOpen && (
                <div
                  className="dropdown-modal modal"
                  onMouseEnter={handleDropdownOpen}
                  onMouseLeave={handleDropdownClose}
                >
                  <p>Coding Ninjas Studio</p>
                  <hr style={{ color: "orange", width: "50%" }} />
                  <p>Contests</p>
                  <br />
                  <p>Guided Paths</p> <br />
                  <p>Code Problems</p> <br />
                  <p>Interview Experiences</p> <br />
                  <p>Mock Tests</p>
                </div>
              )}
            </Link>
          </li>
          <li>
            {/* <Link to={"/careercamp"}> */}
              <img src={careercamp} alt="careercamp" />
            {/* </Link> */}
          </li>

          {loggedIn ? (
            <div className="log">
              <Link to={`/dashboard/${userId}`}>My ClassRoom</Link>
              
              <li>
                <button onClick={handleLogout} className="login-btn">
                  Logout
                </button>
              </li>
              <li><Link to={`/user/${userId}`}>{username}</Link></li>
      
            </div>
          ) : (
            <li>
              <div className="login-modal-container">
                <button className="login-btn" onClick={handleOpenModal}>
                  Login
                </button>
                {isOpen && (
                  <div className="modal-overlay">
                    <div className="modal-content">
                      {showLogin ? (
                        <form onSubmit={handleLoginSubmit} >
                          <div onClick={()=>handleCloseModal()}><ImCross/></div>
                          <h2>Login</h2>
                          <label>
                            Email:
                            <input
                              type="text"
                              value={email}
                              onChange={handleEmailChange}
                            />
                          </label>
                          <label>
                            Password:
                            <input
                              type="password"
                              value={password}
                              onChange={handlePasswordChange}
                            />
                          </label>
                          <div className="modal-buttons">
                            <button type="submit">Login</button>
                            <button onClick={handleToggleModal}>Sign In</button>
                          </div>
                        </form>
                      ) : (
                        <form onSubmit={handleSignInSubmit} >
                          <div onClick={()=>handleCloseModal()}><ImCross/></div>
                          <h2>Sign In</h2>
                          <label>
                            Username:
                            <input
                              type="text"
                              value={signInUsername}
                              onChange={handleSignInUsernameChange}
                            />
                          </label>
                          <label>
                            Email:
                            <input
                              type="text"
                              value={signInEmail}
                              onChange={handleSignInEmailChange}
                            />
                          </label>
                          <label>
                            Password:
                            <input
                              type="password"
                              value={signInPassword}
                              onChange={handleSignInPasswordChange}
                            />
                          </label>
                          <div className="modal-buttons">
                            <button type="submit">Sign In</button>
                            <button onClick={handleToggleModal}>Login</button>
                          </div>
                        </form>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </li>
          )}
          <li>
            <button className="enroll-btn" onClick={handleScroll}>
              Enroll Now
            </button>
          </li>
        </ul>
      </nav>
    </div>
    </>
  );
};

export default NavBar;
