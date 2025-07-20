import React, { useEffect, useState } from 'react'
import doubt from '../images/doubt.png'
import code from '../images/code.png'
import mock from '../images/mock.png'
import free from '../images/free.png'
import placement from '../images/placement.png'
import GuidedProgram from './SecondNavComponents/GuidedProgram';
import BasicComp from './SecondNavComponents/BasicComp';

const OneStop = () => {
  const [activeComponent, setActiveComponent] = useState("GUIDED PROGRAM");

  useEffect(() => {
    const interval = setInterval(() => {
      switch (activeComponent) {
        case "GUIDED PROGRAM":
          setActiveComponent("DOUBT RESOLUTION");
          break;
        case "DOUBT RESOLUTION":
          setActiveComponent("CODESTUDIO");
          break;
        case "CODESTUDIO":
          setActiveComponent("MOCK INTERVIEW");
          break;
        case "MOCK INTERVIEW":
          setActiveComponent("PLACEMENT CELL");
          break;
        case "PLACEMENT CELL":
          setActiveComponent("FREE RESOURCES");
          break;
        case "FREE RESOURCES":
          setActiveComponent("GUIDED PROGRAM");
          break;
        default:
          setActiveComponent("GUIDED PROGRAM");
          break;
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [activeComponent]);


  const renderComponent = () => {
    switch (activeComponent) {
      case "GUIDED PROGRAM":
        return <GuidedProgram/>;
      case "DOUBT RESOLUTION":
        return <BasicComp p1='Doubt Resolution' p2='Get your doubts resolved instantly with live 1:1 mentor support.' 
        p3='In case you have any doubt at any time while you are watching a video, with an MCQ, a coding assignment or a test - We have you covered!'
        p4='We have a network of dedicated teaching assistants to make sure your doubts get resolved quickly and you dont miss on deadlines.'
        h1='20 min' d1='avg. doubt resolution time' h2='100+' d2='doubts resolved per hour' imag={doubt}/>;
      case "CODESTUDIO":
        return <BasicComp p1='Coding Ninjas Studio' p2='A platform to help you practice, compete & get ready for interviews.' 
        p3='A place for aspiring and experienced programmers to prepare for tech interviews, practice problems, compete in challenges, discuss and stay up to date with the latest developments in the tech world.'
        p4='Our expert designed curated guided paths will help you save time and energy to figure out which coding questions to be solved and give you a perfect sequence to maximise your learning experience.'
        h1='500+' d1='Interview problems with solutions' h2='250+' d2='Interview experiences' imag={code}/>;
      case "MOCK INTERVIEW":
        return <BasicComp p1='Mock Interviews' p2='Mock Interviews to help you get prepared for your real interview' 
        p3='Industry experts from top product companies like Amazon, Facebook, Google and working in the US will take your mock interviews.'
        p4='The focus will be on both technical and interpersonal skills. Get instant feedback at the end of the interview.'
        h1='10' d1='Mock Interviews (with selected course plans)' h2='500+' d2='Industry mentors' imag={mock}/>;
      case "PLACEMENT CELL":
        return <BasicComp p1='Placement cell' p2='Placement Cell - A dedicated team to help you land the best opportunities' 
        p3='Curated openings and industry referrals to ensure you have access to the best opportunities out there.'
        p4='Our placement cell works closely with you to help you reach closer to your professional goals.'
        h1='7.6 LPA' d1='Average CTC' h2='300+' d2='Hiring partners' imag={placement}/>;
      case "FREE RESOURCES":
        return <BasicComp p1='Free Resources' p2='Tons of resources to enable you to learn for free & stay up to date' 
        p3='We regularly conduct webinars & coding events on various topics to answer your burning questions & to keep you up to date with the latest happenings in the tech world.'
        p4='A blog with the latest articles to ensure you are reading & constantly in touch with your interest areas.'
        h1='15+' d1='events conducted every month' h2='30+' d2='articles published every month' imag={free}/>;
      default:
        return null;
    }
  };
  return (
    <div className="one-stop">
      <h1>A One stop Platform</h1>
      <p>Practice and learn till you are perfect</p>
      <div className="feature-bar">
        <nav>
          <ul>
            <li onClick={() => setActiveComponent("GUIDED PROGRAM")}>
              GUIDED PROGRAM
            </li>
            <li onClick={() => setActiveComponent("DOUBT RESOLUTION")}>
              DOUBT RESOLUTION
            </li>
            <li onClick={() => setActiveComponent("CODESTUDIO")}>CODESTUDIO</li>
            <li onClick={() => setActiveComponent("MOCK INTERVIEW")}>
              MOCK INTERVIEW
            </li>
            <li onClick={() => setActiveComponent("PLACEMENT CELL")}>
              PLACEMENT CELL
            </li>
            <li onClick={() => setActiveComponent("FREE RESOURCES")}>
              FREE RESOURCES
            </li>            
          </ul>
        </nav>
        <div className="feature-content">{renderComponent()}</div>
      </div>
    </div>
  );
};

export default OneStop;
