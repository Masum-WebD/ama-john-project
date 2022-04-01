import React from 'react';
import logo from '../../images/Logo.svg'
import './MenuBar.css'
import { Link } from "react-router-dom";


const MenuBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light header-nav">
        <div className="container">
        <a  className="navbar-brand" href="logo">
        <img  src={logo} alt="" />
        </a >
         
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-end " id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active ">
                <Link  className="nav-link text-white item-menu " aria-current="page" to="/home">Home</Link >
              </li>
              <li className="nav-item active ">
                <Link  className="nav-link text-white item-menu " aria-current="page" to="/order">Order</Link >
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white item-menu" to="/order-review">Order review</Link>
              </li>
              <li className="nav-item">
                <Link  className="nav-link text-white item-menu" to="/manage-inventory">Manage inventory</Link >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default MenuBar;