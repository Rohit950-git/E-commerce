import React from 'react';
import './SideBar.css';
import {Link } from 'react-router-dom';
import add_product_icon from '../../assets/add-product.png';
import list_product_icon from '../../assets/list-logo.png';

const SideBar = () => {
  return (
    <div className="sideBar">
      <Link to="/addproduct" style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <img src={add_product_icon} alt="add product" />
          <p>Add Product</p>
        </div>
      </Link>

      <Link to="/listproduct" style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <img src={list_product_icon} alt="list product" />
          <p>List of Products</p>
        </div>
      </Link>
    </div>
  );
};

export default SideBar;
