import React from 'react'
import RCard from './RCard'
import flogo from '../images/fblogo.svg'
import qlogo from '../images/qlogo.svg'
import glogo from '../images/glogo.svg'

const Reviews = () => {
  return (
    <div className="reviews">
        <RCard rating='4.9' no='100+' logo={flogo}/>
        <RCard rating='4.8' no='1000+' logo={glogo}/>
        <div className="r-card">
        <p>50+</p>
        <div className="stars">
            <p>Questions asked</p>
            <p>5000 answered</p>
        </div>
        <img src={qlogo} alt="logo" />
    </div>
    </div>
  )
}

export default Reviews
