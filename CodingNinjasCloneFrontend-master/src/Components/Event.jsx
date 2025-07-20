import React from 'react'

const Event = ({img,title,time}) => {
  return (
    <div className="event">
        <img src={img} alt="event" />
        <div className="event-cont">
            <p>{title}</p>
            <p>Starts on</p>
            <p>{time}</p>
        </div>
    </div>
  )
}

export default Event
