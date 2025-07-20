import React from 'react'
import Stats from './Stats'
import guided from '../../images/guided.png'
import {AiFillCheckCircle} from 'react-icons/ai'

const GuidedProgram = () => {
  return (
    <div className="guided-prog">
        <div className="guid-cont">
            <p>Well Guided Program</p>
            <p>We have invented and perfected the best system to learn coding</p>
            <p>Your Journey will follow a tried & Tested method that delivers the best results. Each concept that you learn will follow the following structure.</p>
            <div className="points">
                <ul>
                    <li><AiFillCheckCircle/> Very short learning videos: 10-15 minutes</li>
                    <li><AiFillCheckCircle/> 2-3 Guided Problems & 5-10 practice problems to understand: 45 minutes</li>
                    <li><AiFillCheckCircle/> Doubts resolved instantly by our Teaching Assitants and Notes for Revision</li>
                </ul>
            </div>
            <div className="stats">
                <Stats head='100+' desc='average hours of learning per course'/>
                <Stats head='50+' desc='practice problems in each course'/>
                <Stats head='10+' desc='projects per course'/>
            </div>
        </div>
        <div className="guid-img">
            <img src={guided} alt="guided" />
        </div>
    </div>
  )
}

export default GuidedProgram
