import React from 'react'
import fcoding from '../images/fcoding.svg'
import ff from '../images/ff.png'
import fi from '../images/fi.png'
import fy from '../images/fy.png'
import ftw from '../images/ftw.png'
import fl from '../images/fl.png'
import fte from '../images/fte.svg'
import fc from '../images/fc.png'
import fm from '../images/fm.png'

const FooterTop = () => {
  return (
    <div className="footer-top">
        <div className="f-logo">
            <img src={fcoding} alt="coding" />
            <p>Copyright © Sunrise Mentors Pvt. Ltd.</p>
        </div>
        <div className="f-options">
            <div className="f-list">
                <p>CODING NINJAS</p>
                <ul>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                    <li>Pricing & Refund Policy</li>
                    <li>Bug Bounty</li>
                    <li>Our Students</li>
                    <li>Press Release</li> 
                </ul>
            </div>
            <div className="f-list">
                <p>PRODUCTS</p>
                <ul>
                    <li>Courses</li>
                    <li>Try courses for Free</li>
                    <li>Career Camp</li>
                    <li>Mock Interviews</li>
                    <li>Hire Talent</li>
                </ul>
            </div>
            <div className="f-list">
                <p>COMMUNITY</p>
                <ul>
                    <li>Coding Ninjas Studio</li>
                    <li>Blog</li>
                    <li>Events</li>
                    <li>Campus Ninja</li>
                    <li>Affiliate</li>
                    <li>Scholarship Event</li>
                    <li>Placement cell</li>
                </ul>
            </div>
        </div>
        <div className="f-socials">
            <p>FOLLOW US ON</p>
            <div className="soc-link">
                <img src={ff} alt="link" />
                <img src={fi} alt="link" />
                <img src={fy} alt="link" />
                <img src={ftw} alt="link" />
                <img src={fl} alt="link" />
                <img src={fte} alt="link" />
            </div>
            <p>CONTACT US</p>
            <div className="f-contact">
                <img src={fc} alt="call" />
                <p>1800-123-3598</p>
            </div>
            <div className="f-contact">
                <img src={fm} alt="call" />
                <p>contact@codingninjas.com</p>
            </div>
        </div>
    </div>
  )
}

export default FooterTop
