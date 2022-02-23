import React from 'react';
import people from '../../assets/people.png';
import './header.css';

const Header = () => (
  <div className="nstr__header section__padding" id="home">
    <div className="nstr__header-content">
      <h1 className="gradient__text">Best Way for Shopping!</h1>
      <p>Your safe bet when shopping for your loved ones. We have been here for you since 1996. To join our esteemed customers please provide us with your email address.</p>

      <div className="nstr__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Join Us!</button>
      </div>

      <div className="nstr__header-content__people">
        <img src={people} alt='people'/>
        <p>162 shoppers are currently shopping with us!</p>
      </div>
    </div>
  </div>
);

export default Header;
