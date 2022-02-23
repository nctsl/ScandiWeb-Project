import React from 'react';
import logo from '../../logo.svg';
import './navbar.css';
import emptycart from '../../assets/emptycart.png';


const Navbar = () => {
  return (
    <div className="nstr__navbar">
      <div className="nstr__navbar-links">
        <div className="nstr__navbar-links_logo">
          <img src={logo} alt='logo' />
        </div>
        <div className="nstr__navbar-links_container">
        <button type="button" onClick={event =>  window.location.href='../containers/women/Women'}>
          <p><a href="#Women">Women</a></p>
        </button>
        <button type="button" onClick={event =>  window.location.href='../containers/men/Men'}>
          <p><a href="#Men">Men</a></p>
        </button>
        <button type="button" onClick={event =>  window.location.href='../containers/children/Children'}>
          <p><a href="#Children">Children</a></p>
        </button>
        <button type="button" onClick={event =>  window.location.href='../containers/home/Home'}>
          <p><a href="#Home">Home</a></p>
        </button>
        </div>
      </div>
      <div className="nstr__navbar-sign">
        <p>Currency</p>
        <button type="button" onClick={event =>  window.location.href='/cart'}>
          <img src={emptycart} alt='empty cart' />
        </button>
      </div>
      
    </div>
  );
};

export default Navbar;
