import React from 'react'
import feat1 from '../images/feature1.svg'
import feat2 from '../images/feature2.svg'
import feat3 from '../images/feature3.svg'
import BannerFeature from './BannerFeature'

const Banner = () => {
  return (
    <div className="banner">
        <p>If you have the courage and the commitment to learn coding, then Coding Ninjas will empower you.</p>
        <p>NO MATTER WHAT IT TAKES!</p>
        <div className="features">
            <BannerFeature pic={feat1} text='Content designed by IIT & Stanford alumni'/>
            <BannerFeature pic={feat2}text='Instant 1:1 doubt resolution'/>
            <BannerFeature pic={feat3}text='Practical learning with 100+ problems & 10+ projects in each course'/>
        </div>
    </div>
  )
}

export default Banner
