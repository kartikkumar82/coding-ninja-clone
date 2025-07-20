import React from "react";
import ExpBox from "./ExpBox";
import noexp from '../images/noexp.png'
import yesexp from '../images/yesexp.png'

const Experience = ({scrollRef}) => {
  return (
    <div className="exp" ref={scrollRef}>
      <p>What is your work experience?</p>
      <p>This will help us recommend the best programs for you.</p>
      <div className="exp-check">
        <ExpBox img={noexp} exp='No work experience' desc='Designed as per college student schedule' />
        <ExpBox img={yesexp} exp='Having work experience' desc='Designed as per working professional schedule' />
      </div>
    </div>
  );
};

export default Experience;
