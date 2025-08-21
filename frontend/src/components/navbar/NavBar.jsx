
    import React, { useContext, useState } from "react";
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import './NavBar.css';
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
const NavBar = () => {
    const [menu, setMenu] = useState("shop")
   const { getTotalCartItems} = useContext(ShopContext);
    return (
        <div className="navbar">
            <div className="nav-logo">
                
                    <img src={logo} alt="logo" /> 
                    <p>PixcelCart</p>
             
               

                
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{ "shop"}}><Link style={{textDecoration:'none'}} to='/'> Shop</Link>  {menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{"mens"}}> <Link style={{textDecoration:'none'}} to='/mens'>men</Link> {menu==="mens"?<hr/>:<></>}</li>
                <li onClick={()=>{"womens"}}> <Link style={{textDecoration:'none'}} to='/womens'>Women </Link> {menu==="womens"?<hr/>:<></>}</li>
                <li onClick={()=>{"kids"}}> <Link style={{textDecoration:'none'}} to='/Kids'> Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                 <Link to='/cart'><img src={cart_icon} alt="cart_icon"/>
                  </Link>
                  <div className="nav-cart-count">{ getTotalCartItems()}</div>
              <Link to='/login'>  <button>Login</button> </Link>
               

            </div>
        </div>
    )
}
export default NavBar; 
