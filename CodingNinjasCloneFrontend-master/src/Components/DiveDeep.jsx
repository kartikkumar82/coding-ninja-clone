import React from 'react'

const DiveDeep = ({img,title,cont}) => {
  return (
    <div className="dive-deep">
        <img src={img} alt="para" />
        <p>{title}</p>
        <p>{cont}</p>
    </div>
  )
}

export default DiveDeep
