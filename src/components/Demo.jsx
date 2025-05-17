import "./Demo.css";
import React, { useState } from "react";
import { countryList } from "../Data/features";

const Demo = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    contactNumber: "",
    whatsappNumber: "",
    comments: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      firstName,
      lastName,
      email,
      country,
      contactNumber,
      whatsappNumber,
      comments,
    } = formData;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !country ||
      !contactNumber ||
      !whatsappNumber ||
      !comments
    ) {
      alert("Please fill out all fields.");
      return;
    }

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxED0exlIWUarEKPk6urGzHRTMsmysitdaIaESd4OnTMERHDO59I2LsAuaBGNAPa2pIjA/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      alert("Demo booking submitted successfully!");

      // Reset form after submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        country: "",
        contactNumber: "",
        whatsappNumber: "",
        comments: "",
      });
    } catch (error) {
      alert("Submission failed.");
      console.error("Error submitting to Google Sheets:", error);
    }
  };

  return (
    <div className="demo-container">
      <h2 className="demo-title">Book a Demo with Turf VI</h2>

      <form onSubmit={handleSubmit} className="demo-form">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className="demo-input"
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          className="demo-input"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="demo-input"
        />

        <div className="demo-select-wrapper">
          <label className="demo-label">Country</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="demo-input"
          >
            <option value="">Select Country</option>
            {countryList.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        <input
          type="tel"
          name="contactNumber"
          placeholder="Contact Number"
          value={formData.contactNumber}
          onChange={handleChange}
          className="demo-input"
        />

        <input
          type="tel"
          name="whatsappNumber"
          placeholder="WhatsApp Number"
          value={formData.whatsappNumber}
          onChange={handleChange}
          className="demo-input"
        />

        <textarea
          name="comments"
          placeholder="Your Comments"
          value={formData.comments}
          onChange={handleChange}
          className="demo-input demo-textarea"
          rows={4}
        />

        <button type="submit" className="demo-submit-button">
          Submit Demo Booking
        </button>
      </form>
    </div>
  );
};

export default Demo;
