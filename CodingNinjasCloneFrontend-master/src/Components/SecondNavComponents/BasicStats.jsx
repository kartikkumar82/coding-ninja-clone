import React from 'react'

const BasicStats = (h1,h2,d1,d2) => {
  return (
    <div className="stat-out">
    <div className="stat-in">
      <p className="stat-head">{h1}</p>
      <p className="stat-desc">{d1}</p>
    </div>  
    <div className="stat-in">
      <p className="stat-head">{h2}</p>
      <p className="stat-desc">{d2}</p>
    </div> 
    </div>
  )
}

export default BasicStats
