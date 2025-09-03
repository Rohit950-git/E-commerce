import React from 'react'
import './Admin.css'
import SideBar from '../../sidebar/SideBar'
import { Routes, Route } from 'react-router-dom'
import AddProduct from '../../addProduct/AddProduct'
import ListProduct from '../../ListProduct/ListProduct'
const Admin = () => {
  return (
    <div className='admin'>
      <SideBar />
      <Routes>
        <Route path='/addproduct' element={<AddProduct />} />
        <Route path='/listproduct' element={<ListProduct />} />
      </Routes>
    </div>
  )
}

export default Admin;