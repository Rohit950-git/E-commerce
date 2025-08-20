import React, { useState } from "react";
import "./ShippingForm.css";

const ShippingForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  });

  const [submissions, setSubmissions] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmissions([...submissions, formData]); // store submitted form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      postalCode: "",
    }); // reset form
  };
  const handleCancel = () => {
    window.history.back();
  }

  return (
    <div className="shipping-container">
      <h2>Shipping Form</h2>
      <form onSubmit={handleSubmit} className="shipping-form">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
        />
       
        <input
          type="text"
          name="postalCode"
          placeholder="Postal Code"
          value={formData.postalCode}
          onChange={handleChange}
        />
      
        <button type="submit">Submit</button>
         <button type="button" className="cancel-btn" onClick={handleCancel}>
    Cancel ❌
  </button>
      </form>

     <h3>Submitted Shipping Details</h3>
<div className="submission-list">
  {submissions.map((item, index) => (
    <div className="submission-card" key={index}>
      <h4>{item.fullName}</h4>
      <p><strong>Email:</strong> {item.email}</p>
      <p><strong>Phone:</strong> {item.phone}</p>
      <p><strong>Address:</strong> {item.address}, {item.city}- {item.postalCode}</p>
    <button className="deliver-btn">Deliver Here 🚚</button>
    </div>
  ))}

 

</div>

    </div>
  );
};

export default ShippingForm;
