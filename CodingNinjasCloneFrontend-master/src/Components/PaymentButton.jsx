import React, { useState } from 'react';
import Razorpay from 'razorpay';

const PaymentButton = ({ courseId, amount }) => {
  const [paymentError, setPaymentError] = useState(null);

  const handlePayment = async () => {
    try {
      const response = await axios.post('/generate-order', {
        courseId: courseId,
        amount: amount,
      });
  
      const { order_id } = response.data;
  
      const options = {
        key: 'rzp_test_a882Sur4g0c07Y',
        amount: amount * 100,
        currency: 'INR',
        name: 'Course Payment',
        description: 'Payment for Course',
        image: 'https://cdn.shopify.com/s/files/1/0709/7774/9269/files/logo..png?v=1674475838',
        order_id: order_id, // Use the received order ID
        handler: (response) => {
          console.log(response);
        },
        prefill: {
          name: '<CUSTOMER_NAME>',
          email: '<CUSTOMER_EMAIL>',
        },
        theme: {
          color: '#F37254',
        },
      };
  
      const razorpayInstance = new Razorpay(options);
      razorpayInstance.open();
    } catch (error) {
      console.log(error);
      setPaymentError('Failed to initiate payment');
    }
  };

  return (
    <div>
      <button onClick={handlePayment}>Pay Now</button>
      {paymentError && <p>{paymentError}</p>}
    </div>
  );
};

export default PaymentButton;