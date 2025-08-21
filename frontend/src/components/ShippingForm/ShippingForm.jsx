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

  const [savedData, setSavedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSavedData(formData); // save the data
  };

  

  return (
    <div className="shipping-container">
      
      {!savedData ? (
        <form className="shipping-form" onSubmit={handleSubmit}>
          <h2 className="form-title">Shipping Details</h2>
          <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
          <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
          <div className="row">
            <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} required />
            <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} required />
          </div>
          <div className="row">
            <input type="text" name="postalCode" placeholder="Postal Code" value={formData.postalCode} onChange={handleChange} required />
            <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange} required />
          </div>
          <button type="submit" className="btn save-btn">Save Address</button>
        </form>
      ) : (
        /* Show saved address only */
        <div className="saved-address">
          <h2>Saved Address</h2>
          <div className="address-box">
            <p><strong>Name:</strong> {savedData.fullName}</p>
            <p><strong>Email:</strong> {savedData.email}</p>
            <p><strong>Phone:</strong> {savedData.phone}</p>
            <p><strong>Address:</strong> {savedData.address}</p>
            <p><strong>City/State:</strong> {savedData.city}, {savedData.state}</p>
            <p><strong>Postal Code:</strong> {savedData.postalCode}</p>
            <p><strong>Country:</strong> {savedData.country}</p>
          </div>
          <button className="btn deliver-btn">Deliver Here </button>
            
         
        </div>
      )}
    </div>
  );
};

export default ShippingForm;
