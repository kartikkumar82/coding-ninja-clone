import React, { useState } from "react";
import formwelcome from "../images/Pay/formwelcome.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Step1 = ({ data, onChange, onNext}) => {
  const { studentType, name, phoneNumber, addressLine1, addressLine2, pinCode, state, city, country } = data;

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!studentType) {
      errors.studentType = "Please select student type";
    }

    if (!name.trim()) {
      errors.name = "Name is required";
    }

    if (!phoneNumber.trim()) {
      errors.phoneNumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(phoneNumber)) {
      errors.phoneNumber = "Invalid phone number";
    }

    if (!addressLine1.trim()) {
      errors.addressLine1 = "Address line 1 is required";
    }

    if (!pinCode.trim()) {
      errors.pinCode = "Pin code is required";
    } else if (!/^\d{6}$/.test(pinCode)) {
      errors.pinCode = "Invalid pin code";
    }

    if (!state.trim()) {
      errors.state = "State is required";
    }

    if (!city.trim()) {
      errors.city = "City is required";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      onNext();
      // onNext({
      //   studentType,
      //   name,
      //   phoneNumber,
      //   addressLine1,
      //   addressLine2,
      //   pinCode,
      //   state,
      //   city,
      //   country,
      // });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="multi-form">
      <h2>Welcome to the Ninja Family!</h2>
      <img src={formwelcome} alt="welcome" />
      <h3>Personal Details</h3>
      <div>
        <label>Student Type *</label>
        <div>
          <label htmlFor="indianStudent">
            <input
              type="radio"
              name="studentType"
              id="indian"
              value="indian"
              checked={studentType === "indian"}
              onChange={(e) => onChange(e, 'studentType')}
              required
            />
            I am an Indian student
          </label>
        </div>
        <div>
          <label htmlFor="internationalStudent">
            <input
              type="radio"
              name="studentType"
              id="international"
              value="international"
              checked={studentType === "international"}
              onChange={(e) => onChange(e, 'studentType')}
              required
            />
            I am an international student
          </label>
        </div>
        {errors.studentType && <p className="error">{errors.studentType}</p>}
      </div>
      <div>
        <label htmlFor="name">Name *</label>
        <input
          type="text"
          id="name"
          placeholder="Name"
          value={name}
          onChange={(e) =>onChange(e, 'name')}
          required
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number *</label>
        <input
          type="number"
          id="phoneNumber"
          placeholder="Phone Number" 
          value={phoneNumber}
          onChange={(e) => onChange(e, 'phoneNumber')}
          required
        />
        {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
      </div>
      <div>
        <label htmlFor="addressLine1">Address Line 1 *</label>
        <input
          type="text"
          id="addressLine1"
          placeholder="Address Line 1"
          value={addressLine1}
          onChange={(e) => onChange(e, 'addressLine1')}
          required
        />
        {errors.addressLine1 && (
          <p className="error">{errors.addressLine1}</p>
        )}
      </div>
      <div>
        <label htmlFor="addressLine2">Address Line 2</label>
        <input
          type="text"
          id="addressLine2"
          placeholder="Address Line 2"
          value={addressLine2}
          onChange={(e) => onChange(e, 'addressLine2')}
        />
      </div>
      <div>
        <label htmlFor="pinCode">Pin Code *</label>
        <input
          type="number"
          id="pinCode"
          placeholder="Pin Code"
          value={pinCode}
          onChange={(e) => onChange(e, 'pinCode')}
          required
        />
        {errors.pinCode && <p className="error">{errors.pinCode}</p>}
      </div>
      <div>
        <label htmlFor="state">State *</label>
        <select
          id="state"
          value={state}
          onChange={(e) => onChange(e, 'state')}
          required
        >
          <option value="">Select State</option>
          <option value="uttarakhand">Uttarakhand</option>
          <option value="maharastra">Maharastra</option>
        </select>
        {errors.state && <p className="error">{errors.state}</p>}
      </div>
      <div>
        <label htmlFor="city">City *</label>
        <select
          id="city"
          value={city}
          onChange={(e) => onChange(e, 'city')}
          required
        >
          <option value="">Select City</option>
          <option value="almora">Almora</option>
          <option value="dehradun">Dehradun</option>
        </select>
        {errors.city && <p className="error">{errors.city}</p>}
      </div>
      <div>
        <label htmlFor="country">Country *</label>
        <select
          id="country"
          value={country}
          onChange={(e) => onChange(e, 'country')}
          required
        >
          <option value="India">India</option>
        </select>
      </div>
      <button type="submit">Next</button>
    </form>
  );
};

const Step2 = ({ data, onChange, onPrevious, onNext }) => {
  const { graduationYear, degree, collegeName, companyName } = data;

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!graduationYear) {
      errors.graduationYear = "Graduation year is required";
    }

    if (!degree) {
      errors.degree = "Degree is required";
    }

    if (!collegeName.trim()) {
      errors.collegeName = "College name is required";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      onNext();
      // onNext({
      //   graduationYear,
      //   degree,
      //   collegeName,
      //   companyName,
      // });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="multi-form">
      <h2>Academic/Professional Details</h2>
      <h3>
        Help us understand more about you to help us deliver a tailored
        experience.
      </h3>
      <div>
        <label htmlFor="graduationYear">Graduation Year *</label>
        <select
          id="graduationYear"
          placeholder="Graduation Year"
          value={graduationYear}
          onChange={(e) => onChange(e, 'graduationYear')}
          required
        >
          <option value="">- Select Graduation Year -</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
        {errors.graduationYear && (
          <p className="error">{errors.graduationYear}</p>
        )}
      </div>
      <div>
        <label htmlFor="degree">Degree *</label>
        <select
          id="degree"
          placeholder="Degree"
          value={degree}
          onChange={(e) => onChange(e, 'degree')}
          required
        >
          <option value="">- Select Degree -</option>
          <option value="bachelors">Bachelor's</option>
          <option value="masters">Master's</option>
        </select>
        {errors.degree && <p className="error">{errors.degree}</p>}
      </div>
      <div>
        <label htmlFor="collegeName">College Name *</label>
        <input
          type="text"
          id="collegeName"
          placeholder="College Name"
          value={collegeName}
          onChange={(e) => onChange(e, 'collegeName')}
          required
        />
        {errors.collegeName && <p className="error">{errors.collegeName}</p>}
      </div>
      <div>
        <label htmlFor="companyName">Company Name (Optional)</label>
        <input
          type="text"
          id="companyName"
          placeholder="Company Name" 
          value={companyName}
          onChange={(e) => onChange(e, 'companyName')}
        />
      </div>
      <button type="button" onClick={onPrevious}>
        Back
      </button>
      <button type="submit">Next</button>
    </form>
  );
};

const Step3 = ({ data, onChange, onPrevious, onSubmit }) => {
  const { courseGoal, targetCompany, targetRole, placementDate } = data;

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!courseGoal) {
      errors.courseGoal = "Course goal is required";
    }

    if (!targetCompany) {
      errors.targetCompany = "Target company is required";
    }

    if (!targetRole) {
      errors.targetRole = "Target role is required";
    }

    if (!placementDate) {
      errors.placementDate = "Placement date is required";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      onSubmit();
      // onSubmit({
      //   courseGoal,
      //   targetCompany,
      //   targetRole,
      //   placementDate,
      // });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="multi-form">
      <h2>What are your Goals?</h2>
      <div>
        <label htmlFor="courseGoal">With this course, I wish to *</label>
        <select
          id="courseGoal"
          placeholder="Course Goal"
          value={courseGoal}
          onChange={(e) => onChange(e, 'courseGoal')}
          required
        >
          <option value="">- Select Course Goal -</option>
          <option value="learnFree">
            Learn as much as possible for free
          </option>
        </select>
        {errors.courseGoal && <p className="error">{errors.courseGoal}</p>}
      </div>
      <div>
        <label htmlFor="targetCompany">
          What kind of company do you aspire to get into? *
        </label>
        <select
          id="targetCompany"
          placeholder="Target Company"
          value={targetCompany}
          onChange={(e) => onChange(e, 'targetCompany')}
          required
        >
          <option value="">- Select Target Company -</option>
          <option value="FAANG">
            FAANG (Facebook, Amazon, Apple, Netflix, Google)
          </option>
        </select>
        {errors.targetCompany && (
          <p className="error">{errors.targetCompany}</p>
        )}
      </div>
      <div>
        <label htmlFor="targetRole">
          What kind of role are you looking for? *
        </label>
        <select
          id="targetRole"
          placeholder="Target Role"
          value={targetRole}
          onChange={(e) => onChange(e, 'targetRole')}
          required
        >
          <option value="">- Select Target Role -</option>
          <option value="webDeveloper">Web Developer</option>
          <option value="softwareDeveloper">Software Developer</option>
        </select>
        {errors.targetRole && <p className="error">{errors.targetRole}</p>}
      </div>
      <div>
        <label htmlFor="placementDate">
          Select approximate placement date *
        </label>
        <input
          type="date"
          id="placementDate"
          placeholder="Placement Date"
          value={placementDate}
          onChange={(e) => onChange(e, 'placementDate')}
          required
        />
        {errors.placementDate && (
          <p className="error">{errors.placementDate}</p>
        )}
      </div>
      <button type="button" onClick={onPrevious}>
        Previous
      </button>
      <button type="submit">Submit</button>
    </form>
  );
};

const OnBoarding = () => {

  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    user: userId,
    personalDetails: {
      studentType:"",
      name: "",
      phoneNumber: "",
      addressLine1: "",
      addressLine2: "",
      pinCode: "",
      state: "",
      city: "",
      country: "India",
    },
    academicDetails: {
      graduationYear: "",
      degree: "",
      collegeName: "",
      companyName: "",
    },
    goals: {
      courseGoal: "",
      targetCompany: "",
      targetRole: "",
      placementDate: "",
    },
  });

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleChange = (event, stepName, fieldName) => {
    const value = event.target.value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [stepName]: {
        ...prevFormData[stepName],
        [fieldName]: value,
      },
    }));
  };

  const handleSubmit = () => {
    axios
      .post("https://codingninjasclonebackend.onrender.com/saveFormData", formData)
      .then((response) => {
        console.log("Form data saved successfully:", response.data);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error saving form data:", error);
      });
  };

  let stepComponent;
  switch (step) {
    case 1:
      stepComponent = (
        <Step1
          data={formData.personalDetails}
          onChange={(event, fieldName) =>
            handleChange(event, "personalDetails", fieldName)
          }
          onNext={handleNext}
        />
      );
      break;
    case 2:
      stepComponent = (
        <Step2
          data={formData.academicDetails}
          onChange={(event, fieldName) =>
            handleChange(event, "academicDetails", fieldName)
          }
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      );
      break;
    case 3:
      stepComponent = (
        <Step3
          data={formData.goals}
          onChange={(event, fieldName) =>
            handleChange(event, "goals", fieldName)
          }
          onPrevious={handlePrevious}
          onSubmit={handleSubmit}
        />
      );
      break;
    default:
      stepComponent = null;
  }

  return <div className="onboarding">{stepComponent}</div>;
};

export default OnBoarding;

