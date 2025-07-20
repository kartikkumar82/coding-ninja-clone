import React from 'react'
import {GrFormNext} from 'react-icons/gr'

const ExpBox = ({img,exp,desc}) => {
  return (
    <div className="exp-box">
        <div className="exp-img">
            <img src={img} alt="exp" />
        </div>
        <div className="ex-co">
        <p>{exp}</p>
        <GrFormNext size="50px" />
        </div>
        <p>{desc}</p>
    </div>
  )
}

export default ExpBox
