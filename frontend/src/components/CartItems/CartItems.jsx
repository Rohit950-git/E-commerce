import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
import BillingDetail from '../BillingDetail/BillingDetail'

const CartItems = () => {
  const {getTotalCartAmount, all_product, cartItems, RemoveFromCart } = useContext(ShopContext);

  return (
    <div className='cartitems'>
      <div className= 'cartitems-format cartitems-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {


        if (cartItems[e.id] > 0) {
          return (
            <div >
              <div className='cartitems-format cartitems-format-main' >
                <img src={e.image} alt="" className='carticon-product-icon' />
                <p>{e.name}</p>
                <p>${e.new_price} </p>
                <button className='cartitems-quantity'> {cartItems[e.id]}</button>
                <p>${e.new_price * cartItems[e.id]} </p>
                <img className='cartitems-remove-icon' src={remove_icon} onClick={() => { RemoveFromCart(e.id) }} alt="" />
              </div>
              <hr />
            </div>
            
          )
        }
        return null;
      })}
      <div className='cartitems-down'>
        <BillingDetail path="checkout" location="checkout" />
        <div className="cartitems-promocode">
          <p>If You Have A Promo Code , Enter It Here</p>
        <div className="cartitems-promobox">
          <input type='text' placeholder='Promo code'/>
          <button>Submit</button>
        </div>
        </div>

      </div>
    </div>
  )
}

export default CartItems;