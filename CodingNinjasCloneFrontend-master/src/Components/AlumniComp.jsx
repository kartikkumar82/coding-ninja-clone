import React from "react";
import NavBar from "./NavBar";
import AlumHero from "./AlumHero";
import Reviews from "./Reviews";
import test1 from "../images/Caro/test1.jpg";
import test2 from "../images/Caro/test2.jpg";
import test3 from "../images/Caro/test3.jpg";
import test4 from "../images/Caro/test4.jpg";
import test5 from "../images/Caro/test5.jpg";
import test6 from "../images/Caro/test6.jpg";
import DiveDeep from "./DiveDeep";
import dd1 from "../images/Caro/dd1.png";
import dd2 from "../images/Caro/dd2.png";
import dd3 from "../images/Caro/dd3.png";
import dd4 from "../images/Caro/dd4.png";
import {GrNext} from  'react-icons/gr'
import {AiFillCaretDown} from  'react-icons/ai'
import l1 from '../images/Caro/l1.png'
import l2 from '../images/Caro/l2.png'
import l3 from '../images/Caro/l3.png'
import l4 from '../images/Caro/l4.png'
import l5 from '../images/Caro/l5.png'
import l6 from '../images/Caro/l6.png'
import l7 from '../images/Caro/l7.png'
import l8 from '../images/Caro/l8.png'
import l9 from '../images/Caro/l9.png'
import l10 from '../images/Caro/l10.png'
import AlumNews from "./AlumNews";
import na1 from '../images/Caro/na1.jpg'
import na2 from '../images/Caro/na2.jpg'
import na3 from '../images/Caro/na3.png'
import na4 from '../images/Caro/na4.png'
import na5 from '../images/Caro/na5.png'
import na6 from '../images/Caro/na6.png'
import na7 from '../images/Caro/na7.jpg'
import na8 from '../images/Caro/na8.png'
import na9 from '../images/Caro/na9.jpg'
import na10 from '../images/Caro/na10.jpg'
import na11 from '../images/Caro/na11.png'
import na12 from '../images/Caro/na12.webp'
import na13 from '../images/Caro/na13.jpg'
import na14 from '../images/Caro/na14.jpg'
import { Link } from "react-router-dom";
import FooterTop from "./FooterTop";
import ImportantLinks from "./ImportantLinks";
import PayAccept from "./PayAccept";

const AlumniComp = () => {
  return (
    <>
      <div className="alumni-comp">
        <NavBar />
        <AlumHero />
        <p>Coding Ninjas Review by the Students</p>
        <Reviews />
        <div className="testimonies">
          <img src={test1} alt="test" />
          <img src={test2} alt="test" />
          <img src={test3} alt="test" />
          <img src={test4} alt="test" />
          <img src={test5} alt="test" />
          <img src={test6} alt="test" />
        </div>
        <div className="blue">
          <p>Dive deeper into the world of programming!</p>
          <div className="dive-deeper">
            <DiveDeep
              img={dd1}
              title="10 Best Android projects for beginners"
              cont="Android application developer sounds like a
fascinating profession, doesn't it? According to a
report by Statista, over 88% of the world uses
Android-enabled devices. What if we tell you that
you can develop applications that you use on your
mobile and millions of others. Here are some of the
most enthralling Android-based projects focused on
beginners that could help you work on and become
leading Android developer one day. Before we get
into the list, let's have a quick tour of Android and
why it is used by the majority of the human
population."
            />
            <DiveDeep
              img={dd2}         
              title="Data Theft: An Underestimated Threat"
              cont="With the plethora of technological advancements,
              increasing internet speed and reducing costs of
              accessing the internet, we are constantly
              generating large amounts of data every second"
            />
            <DiveDeep
              img={dd3}
              title="The importance of Aptitude "
              cont="Development for Placements
              If you are a final year student, placements season
              would surely be an overwhelming time which
              requires a rigorous approach to improve your
              Aptitude skills for the job opportunities."
            />
            <DiveDeep
              img={dd4}
              title="Top 10 React. Js books to enhance your"
              cont="web development skills
              We know you are here to learn React.Js in a single
              book and master it. Let's make it clear, JavaScript is
              the only basic skill you need to know to learn
              React.js"
            />            
          </div>
          <p>Read More <GrNext color="orangered"/></p>
        </div>
        <div className="alum-news">
            <p>Coding Ninjas in the News</p>
            <div className="logos">
                <img src={l1} alt="logos" />
                <img src={l2} alt="logos" />
                <img src={l3} alt="logos" />
                <img src={l4} alt="logos" />
                <img src={l5} alt="logos" />
                <img src={l6} alt="logos" />
                <img src={l7} alt="logos" />
                <img src={l8} alt="logos" />
                <img src={l9} alt="logos" />
                <img src={l10} alt="logos" />
            </div>
            <div className="other-news">
                <AlumNews img={na1} title="Coding during COVID-19" cont="Being at home during the lockdown and practising social distancing can give you the time to pick up some skills. Many are using it to learn to code, learn new programming languages. Abhinav S, who has been a .net developer since 2015, is using the lockdown to get an introduction to Python, a programming language that forms the base for data science, analytics and machine learning." />
                <AlumNews img={na2} title="How Coding is becoming child's play" cont="Kids as young as 4 and 5 are becoming adept at basic coding. Slightly older ones are going way beyond their school curriculum to understand how to use tech. Siddhant Attavar, 14, of National Public School, Bengaluru, started with robotics lessons when he was in class four. Gradually, he began doing online courses on app development." />
                <AlumNews img={na3} title="Coding Ninjas bags the Best Education Startup Of The Year Award 2020" cont="" />
                <AlumNews img={na4} title="Demand, Supply, Run! | Ankush Singla | TEDxBVCOE" cont="A former techie at a Fortune 500 MNC now one of the leading tech entrepreneur Mr. Ankush Singla talked about his journey of Entrepreneurship, he shared his vision and the value of coding, talked about his support system and how he turned his startup into one of the most demanding tech institution." />
                <AlumNews img={na5} title="Learn Now, Pay Later!" cont="Student loans disbursed by banks have been declining through much of 2018 and 2019. While to a certain extent it is true that banks have become reluctant given non-performing assets in this category, the other reason is also that education cost is going up and many students find it difficult to repay due to low salaries post-course completion. And so decide not to opt for upfront loans." />
                <AlumNews img={na6} title="Education Sector में हुए नए बदलाव से बढ़ेंगे रोजगार के अवसर?" cont="देश भर में इस वक़्त शिक्षा का विस्तार हो रहा है, नयी प्रणाली की शुरुआत हो चुकी है. Lockdown के चलते e-learning में लगातार ग्रोथ दर्ज़ हुई है तो दूसरी और नई education policy को भी सरकार एक्शन में ला चुकी है, जानिए क्या है NEP में खास और इससे कैसे बदलेगी स्कूलों की कार्य प्रणाली इस खासचर्चा में |" />
                <AlumNews img={na7} title="Coding Ninjas Turns Past Learners Into Teachers" cont="With all major edtech startups BYJU’S, Vedantu, Toppr focussing heavily on coding and programming courses for kids, this has emerged as the new battleground for edtech in India. What is most lucrative about these homegrown coding platforms is that not only are they seeing traction in India, but they also have great adoption in international markets." />
                <AlumNews img={na8} title="India Inc on Reviving Our Economy NewsX & BW Special" cont="Ankush Singla, Co-Founder, Coding Ninjas joins a panel discussion with other industry stalwarts to talk about the economy in the times of COVID-19." />
                <AlumNews img={na9} title="How the pandemic proved to be rocket fuel for India's EdTech platforms" cont="Amidst layoffs, shutdowns, and closure due to the pandemic and lockdown, one of the few sectors that have seen an upturn is India's burgeoning EdTech industry. Not only have these platforms come to the forefront in terms of its relevance in the current COVID-ridden scenario, but they have also seen tremendous growth." />
                <AlumNews img={na10} title="Why learn programming?" cont="Programming is becoming increasingly popular among kids and adults for all the right reasons. Different programming languages emerge that are suited for very different categories of developers beginners, intermediate and experts. Part of the importance of programming literacy is the problem-solving mentality it induces, but more importantly, the ability to build and/or understand systems." />
                <AlumNews img={na11} title="Coding Ninjas aims to crack the edtech code by reskilling and upskilling college students" cont="While working for the likes of Facebook and Amazon, Ankush Singla realised that college students were finding it hard to get jobs due to the lack of appropriate skills. A coding enthusiast and techie himself, it was a moment of truth for Ankush. He realised the education system needed a drastic shift." />
                <AlumNews img={na12} title="Coding-enabled world and workforce" cont="Machine code is the language that computers understand and in which they accept instructions. Coding, or developing machine code, is at the heart of computers, robotics, artificial intelligence, websites, apps, games, and more. Coding, or scripting, is the language used to provide a set of instructions for an environment such as a PC, robot, or browser, to perform specific tasks." />
                <AlumNews img={na13} title="Platforms To Watch Out For If You Want To Learn Coding" cont="In the technologically advanced 21st century, coding has become an important part of creations such as websites, mobile applications, and software. The vital skills of coding and programming are in demand, and the opportunities in the respective fields are expected to rise in the future. Coding has become a part of the curriculum for school going students." />
                <AlumNews img={na14} title="Coding Ninjas aims for coding curiosity among students" cont="Ed-tech platform, Coding Ninjas has launched a new brand campaign ‘BeCurious’, encouraging young brains to learn to code. The campaign video featuring Jitendra Kumar aka Jeetu Bhaiya has been released on Hotstar and on the social media channels of Coding Ninjas including YouTube, Twitter, Facebook, Instagram and LinkedIn." />
            </div>
            <p>View More <AiFillCaretDown/> </p>
            <div className="alum-links">
                <button className="login-btn share">SHARE YOUR EXPERIENCE</button>
                <Link to={'/courses'}>
                <button className="explore">EXPLORE OUR COURSES</button>
                </Link>
            </div>
        </div>
        <FooterTop/>
      <ImportantLinks/>
      <PayAccept/>
      </div>
    </>
  );
};

export default AlumniComp;
