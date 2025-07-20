import React, { useState } from "react";
import contact from "../images/contact.svg";
import axios from "axios";

const Contact = () => {
  const [contactNumber, setContactNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [graduationYear, setGraduationYear] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    validateForm();
    const formData = {
      contactNumber,
      firstName,
      emailAddress,
      graduationYear,
    };
    try {
      const response = await axios.post(
        "https://codingninjasclonebackend.onrender.com/cbSubmitForm",
        formData
      );
        alert('Form Data Submitted')
      if (response.status === 200) {
        console.log("Form submitted successfully");
        setFirstName('');
        setContactNumber('')
        setEmailAddress('')
        setGraduationYear('')
      } else {
        console.log("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting the form", error);
    }
  };
  const validateForm = () => {
    const isContactNumberValid = /^\d{10}$/.test(contactNumber);
    const isGraduationYearValid = /^\d{4}$/.test(graduationYear);
    const isEmailAddressValid = /\S+@\S+\.\S+/.test(emailAddress);

    setIsFormValid(
      isContactNumberValid &&
        isGraduationYearValid &&
        isEmailAddressValid &&
        firstName.length > 0
    );
  };
  return (
    <div className="cout">
      <div className="contact">
        <div className="queries">
          <p>Have any queries?</p>
          <p>Get a free counselling session from our experts</p>
          <div className="toll-free">
            <img src={contact} alt="contact" />
            <div className="call">
              <p>Call us on our toll free number</p>
              <p>1800-123-3598</p>
            </div>
          </div>
        </div>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <input
              type="number"
              placeholder="Contact Number"
              value={contactNumber}
              name="contact number"
              onChange={(e) => {
                setContactNumber(e.target.value);
              }}
              required
            />
            <input
              type="text"
              placeholder="First Name *"
              value={firstName}
              name="first name"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              required
            />
            <input
              type="email"
              placeholder="Email Address *"
              value={emailAddress}
              name="email address"
              onChange={(e) => {
                setEmailAddress(e.target.value);
              }}
              required
            />
            <input
              type="number"
              placeholder="Graduation Year *"
              value={graduationYear}
              name="graduation year"
              onChange={(e) => {
                setGraduationYear(e.target.value);
              }}
              required
            />
            <button type="submit" >
              Request Callback
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
