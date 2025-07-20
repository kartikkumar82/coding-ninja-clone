import React from 'react'

const BannerFeature = ({pic,text}) => {
  return (
    <div className="feature">
        <img src={pic} alt='feature'/>
        <p>{text}</p>
    </div>
  )
}

export default BannerFeature
