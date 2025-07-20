import React from "react";
import BasicStats from "./BasicStats";

const BasicComp = ({ p1, p2, p3, p4, h1, h2, d2, d1, imag }) => {
  return (
    <div className="guided-prog">
      <div className="guid-cont">
        <p>{p1}</p>
        <p>{p2}</p>
        <p>{p3}</p>
        <p>{p4}</p>
        <div className="stats">          
            <div className="stat-in">
              <p className="stat-head">{h1}</p>
              <p className="stat-desc">{d1}</p>
            </div>
            <div className="stat-in">
              <p className="stat-head">{h2}</p>
              <p className="stat-desc">{d2}</p>
            </div>          
        </div>
      </div>
      <div className="guid-img">
        <img src={imag} alt="images" />
      </div>
    </div>
  );
};

export default BasicComp;
