import React from 'react'
import visa from '../images/Pay/visa.png'
import paypal from '../images/Pay/paypal.png'
import upi from '../images/Pay/upi.png'
import secure from '../images/Pay/secure.png'
import encrypt from '../images/Pay/encrypt.png'
import razorpay from '../images/Pay/razorpay.png'
import emi from '../images/Pay/no-cost-emi.png'

const PayAccept = () => {
  return (
    <div className="pay-accept">
        <div className="methods">
            <span>We accept payments using:</span>
            <img src={visa} alt="pay-method" />
            <img src={paypal} alt="pay-method" />
            <img src={upi} alt="pay-method" />
            <img src={emi} alt="pay-method" />
        </div>
        <div className="methods">
            <img src={secure} alt="pay-method" />
            <img src={encrypt} alt="pay-method" />
            <img src={razorpay} alt="pay-method" />
        </div>
    </div>
  )
}

export default PayAccept
