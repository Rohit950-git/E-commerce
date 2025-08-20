import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import './BillingDetail.css'
import { Link } from 'react-router-dom'
const BillingDetail = (props) => {
  const {getTotalCartAmount} = useContext(ShopContext)
  return (
 <div className="billing-container">
      <div className="cartitems-total-item">
        <p>SubTotal</p>
        <p>${getTotalCartAmount()}</p>
      </div>

      <hr />

      <div className="cartitems-total-item">
        <p>Shipping Fee</p>
        <p>Free</p>
      </div>

      <hr />

      <div className="cartitems-total-item">
        <h3>Total</h3>
        <h3>${getTotalCartAmount()}</h3>
      </div>

      <Link to={`/${props.path}`}><button className="billing-btn">Proceed To {props.location === "checkout"?"CHECKOUT":"PAYMENT"}</button></Link>
    </div>  )
}

export default BillingDetail;