import React from 'react'
import google from '../images/google.svg'
import microsoft from '../images/microsoft.svg'
import flipkart from '../images/flipkart.svg'
import amazon from '../images/amazon.svg'
import adobe from '../images/adobe.svg'
import facebook from '../images/facebook.svg'
import expedia from '../images/expedia.svg'
import walmart from '../images/walmart.svg'
import oyo from '../images/oyo.svg'
import morganstanley from '../images/morganstanley.svg'
import samsung from '../images/samsung.svg'

const Companies = () => {
  return (
    <div className="companies">
        <div className="com-top">
            <img src={google} alt="google" />
            <img src={microsoft} alt="microsoft" />
            <img src={adobe} alt="adobe" />
            <img src={walmart} alt="walmart" />
            <img src={amazon} alt="amazon" />
            <img src={oyo} alt="oyo" />
        </div>
        <div className="com-bot">
        <img src={flipkart} alt="flipkart" />
        <img src={morganstanley} alt="morganstanley" />
        <img src={samsung} alt="samsung" />
        <img src={expedia} alt="expedia" />
        <img src={facebook} alt="facebook" />
        </div>
    </div>
  )
}

export default Companies
