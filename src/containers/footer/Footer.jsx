import React from 'react';
import nstrLogo from '../../logo.svg';
import './footer.css';

const Footer = () => (
  <div className="nstr__footer section__padding">
    <div className="nstr__footer-heading">
      <h1 className="gradient__text">For All Your Clothing Needs</h1>
    </div>

    <div className="nstr__footer-btn">
      <p>Join Us!</p>
    </div>

    <div className="nstr__footer-links">
      <div className="nstr__footer-links_logo">
        <img src={nstrLogo} alt="nstr_logo" />
        <p>Lilla Varvsgatan 14, 211 15 Malmö, Sweden <br /> All Rights Reserved</p>
      </div>
      <div className="nstr__footer-links_div">
        <h4>About Us</h4>
        <p>Brands We Work With</p>
        <p>Safe Shopping</p>
        <p>Social Media</p>
      </div>
      <div className="nstr__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
      </div>
      <div className="nstr__footer-links_div">
        <h4>Get in touch</h4>
        <p>Lilla Varvsgatan 14, 211 15 Malmö</p>
        <p>085-132554968767</p>
        <p>info@nstr.net</p>
      </div>
    </div>

    <div className="nstr__footer-copyright">
      <p>@2022  All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
