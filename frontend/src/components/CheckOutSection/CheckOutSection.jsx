import React, { useState } from 'react'
import BillingDetail from '../BillingDetail/BillingDetail';
import ShippingForm from '../ShippingForm/ShippingForm';
import './CheckOutSection.css';
import Payment from '../Payment/Payment';

const CheckOutSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [savedAddress, setSavedAddress] = useState(null); // store submitted form data
  const [DeliveryMethod, setDeliveryMethod] = useState("standard")
  const [DeliveryCharge, setDeliveryCharge] = useState(0);

  const handleDeliveryCharge = (e) => {
    const method = e.target.value;
    setDeliveryMethod(method);
    if (method === "standard") setDeliveryCharge('Free')
    if (method === "express") setDeliveryCharge(50)

    if (method === "sameDay") setDeliveryCharge(100)
  }


  const handleAddAddressClick = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (formData) => {
    console.log("Address submitted:", formData);
    setSavedAddress(formData);   // save form data to state
    setShowForm(false);          // hide form after save (optional)
  };

  return (
    <div className='main-section'>
      <h3>Delivery To</h3>
      <div className='section-container'>

        <div className='left_section'>
          {/* Always show Add Address button */}
          {!savedAddress && (
            <div className='address' onClick={handleAddAddressClick}>
              <span>+</span>
              <span>Add Address</span>
            </div>
          )}

          {/* Delivery Method */}
          <div className="delivery-method" >
            <h4>Select Delivery Method</h4>
            <label>
              <input type="radio" name="delivery" value="standard" defaultChecked
                checked={DeliveryMethod === "standard"}
                onChange={handleDeliveryCharge} />
              Standard Delivery (3–5 days) – Free
            </label>
            <br />
            <label>
              <input type="radio" name="delivery" value="express"
                checked={DeliveryMethod === "express"}
                onChange={handleDeliveryCharge}
              />
              Express Delivery (1–2 days) – $50
            </label>
            <br />
            <label>
              <input type="radio" name="delivery" value="sameDay"
                checked={DeliveryMethod === "sameDay"}
                onChange={handleDeliveryCharge}
              />
              Same-Day Delivery – $100
            </label>
          </div>

          {/* Show form only when Add Address clicked */}
          {showForm && (
            <div >
              <ShippingForm onSubmit={handleFormSubmit} />
            </div>
          )}
          <br />
          {/* Show saved address below form */}
          {savedAddress && (
            <div className="saved-address">
              <h4>Saved Address:</h4>
              <p><b>{savedAddress.fullName}</b></p>
              <p>{savedAddress.address}, {savedAddress.state}, {savedAddress.postalCode}</p>
              <p>{savedAddress.phone}</p>
              <p>{savedAddress.email}</p>
            </div>
          )}

        </div>


        <div className='right-section'>
          <BillingDetail shippingCharge={DeliveryCharge} path="payment" location="payment" />
        </div>
       

       
        <div>

        </div>
      </div>
    </div>
  )
}

export default CheckOutSection;
