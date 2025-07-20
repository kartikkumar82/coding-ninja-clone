import React from 'react'
import {AiFillHome} from 'react-icons/ai'
import {MdNavigateNext} from 'react-icons/md'

const CourseHero = () => {
  return (
    <div className="course-hero">
        <div className="inner-path">
            <AiFillHome color='grey'/>
            <p>Home</p>
            <MdNavigateNext color='grey' size={30}/>
            <p>Courses</p>
        </div>
        <div className="main-hero">
            <p>Online Coding Courses</p>
            <div className="hero-desc">
            <p>Most loved online coding courses for college students and </p>
            <p>working professionals</p>
            </div>
            <div className="c-hero-btn">
                <button>Browse Popular Courses</button>
                <button>Try for Free</button>
            </div>

        </div>
    </div>
  )
}

export default CourseHero
