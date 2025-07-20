import React from 'react'
import {MdOutlineStar} from 'react-icons/md'
import {MdOutlineStarHalf} from 'react-icons/md'

const RCard = ({rating,no,logo}) => {
  return (
    <div className="r-card">
        <p>{rating}</p>
        <div className="stars">
            <MdOutlineStar/><MdOutlineStar/><MdOutlineStar/><MdOutlineStar/><MdOutlineStarHalf/>
            <p>{no} reviews</p>
        </div>
        <img src={logo} alt="logo" />
    </div>
  )
}

export default RCard
