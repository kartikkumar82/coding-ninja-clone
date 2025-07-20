import React from 'react'

const AlumNews = ({img,title,cont}) => {
  return (
    <div className="alum-other-news">
        <img src={img} alt="logo" />
        <p>{title}</p>
        <p>{cont}</p>
        <p>See More</p>
    </div>
  )
}

export default AlumNews
