import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import './BillingDetail.css'
import { useNavigate } from 'react-router-dom'
const BillingDetail = (props) => {

  const {getTotalCartAmount} = useContext(ShopContext)
  const navigate = useNavigate();
  const deliveryCharge = props.shippingCharge || 0;
  const SubTotal = getTotalCartAmount();;
  const discount = (SubTotal > 85) ? 30 : 0;
  const Total = SubTotal + deliveryCharge - discount;

  const handleNavigate = () => {
    navigate(`/${props.path}`)
  }
  
  
  return (
 <div className="billing-container">
      <div className="cartitems-total-item">
        <p>SubTotal</p>
        <p>${SubTotal}</p>
      </div>

      <hr />

      <div className="cartitems-total-item">
        <p>Shipping Fee</p>
        <p>{deliveryCharge === 0 ? 'Free' : `$${deliveryCharge}`}</p>
      </div>

      <hr />
      
      <div className="cartitems-total-item">
        <h3>Discount</h3>
        <h3>${discount}</h3>
      </div>
      <hr/>

      <div className="cartitems-total-item">
        <h3>Total</h3>
        <h3>${Total}</h3>
      </div>

      <button onClick={handleNavigate} className="billing-btn">Proceed To {props.location === "checkout"?"CHECKOUT":"PAYMENT"}</button>
    </div>  )
}

export default BillingDetail;