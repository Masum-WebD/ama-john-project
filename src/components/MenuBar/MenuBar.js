import React from 'react';
import logo from '../../images/Logo.svg'
import './MenuBar.css'


const MenuBar = () => {
    return (
        <nav className="navbar navbar-expand-lg header-nav">
        <div className="container">
         <img src={logo} alt="" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link text-white item-menu" aria-current="page" href="home">Order</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white item-menu" href="features">Order review</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white item-menu" href="pricing">Manage inventory</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default MenuBar;