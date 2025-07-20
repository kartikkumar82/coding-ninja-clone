import React from 'react'

const Stats = ({head,desc}) => {
  return (
    <div className="stat-in">
      <p className="stat-head">{head}</p>
      <p className="stat-desc">{desc}</p>
    </div>  
  )
}

export default Stats
