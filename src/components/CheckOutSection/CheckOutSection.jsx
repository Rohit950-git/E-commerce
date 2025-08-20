import React, { useState } from 'react'
import BillingDetail from '../BillingDetail/BillingDetail';
import ShippingForm from '../ShippingForm/ShippingForm';
import './CheckOutSection.css';

const CheckOutSection = () => {
  const [showForm, setShowForm] = useState(true);  



  const handleAddAddressClick = () => {
    setShowForm(true); 
  };

  const handleFormSubmit = (formData) => {
  
    
  };

  return (
    <div className='main-section'>
      <h3>Delivery To</h3>
      <div className='section-container'>
        
        <div className='left_section'>
          {showForm ? (
            <div>
              <ShippingForm onSubmit={handleFormSubmit} />
             
            </div>
          ) : (
            <div className='address' onClick={handleAddAddressClick}>
              <span>+</span>
              <span>Add Address</span>
            </div>
          )}
        </div>

        <div className='right-section'>
          <BillingDetail path="payment" location="payment"/>
        </div>
      </div>
    </div>
  )
}

export default CheckOutSection;
