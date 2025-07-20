import React from 'react';
import { loadScript } from './utils'; 
import { BiChevronsDown } from "react-icons/bi";

const BuyButton = ({ courseId, amount }) => {
  const handleClick = async () => {
    const razorpayScriptUrl = 'https://checkout.razorpay.com/v1/checkout.js';
    await loadScript(razorpayScriptUrl); 

    const options = {
      key: 'rzp_test_HKvXR6PLLW4ZtV', 
      amount: amount * 100, 
      currency: 'INR',
      name: 'Course Purchase',
      description: 'Purchase Course',
      image: 'https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/1323/original/Coding_Ninjas_logo.jpeg', 
      order_id: '', 
      handler: function (response) {
        if (response.razorpay_payment_id) {            
          const data = {
            courseId: courseId,
            paymentId: response.razorpay_payment_id,
          };

          fetch('/api/user/courses', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log('Course purchased:', data.courseId);
            })
            .catch((error) => {
              console.error('Error:', error);
            });
        }
      },
      prefill: {
        name: 'John Doe', 
        email: 'john.doe@example.com', 
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return <button onClick={handleClick} className="buy">Enroll Now <BiChevronsDown /></button>;
};

export default BuyButton;