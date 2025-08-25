import React, { useState } from "react";
import './Payment.css'
import { useNavigate } from 'react-router-dom'
const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [creditCard, setCreditCard] = useState("");
  const [debitCard, setDebitCard] = useState("");
const navigate =useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

  };
  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h3>Payment Section</h3>
      <form onSubmit={handleSubmit}>


        <form>
          <h2>Payment Method</h2>
          {/* Card Selection */}
          <label>
            Select Payment Method:
            <select>
              <option value="">-- Select --</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Debit Card">Debit Card</option>
              <option value="Casah On Delivery"> Cash On Delivery</option>
            </select>
          </label>

          {/* Card Details */}
          <label>
            Card Number:
            <input type="text" placeholder="Enter Card Number" />
          </label>

          <label>
            CVV:
            <input type="text" placeholder="Enter CVV" />
          </label>

          <label>
            Expiry Date:
            <input type="text" placeholder="MM/YY" />
          </label>

          <button type="submit">Submit Payment</button>

          <button type="button" className="cancel-btn" onClick={handleCancel}>
            Cancel
          </button>
        </form>
      </form>
    </div>
  );
};

export default Payment;
