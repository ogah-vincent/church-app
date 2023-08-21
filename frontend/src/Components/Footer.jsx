import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="rccg-logo.png" alt="Logo" />
        </div>
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="footer-social">
          <a href="https://www.facebook.com/" className="social-icon1">
            <FaFacebook /> Facebook
          </a>
          <a href="https://www.twitter.com/" className="social-icon2">
            <FaTwitter /> Twitter
          </a>
          <a href="https://www.instagram.com/" className="social-icon3">
            <FaInstagram /> Instagram
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Your Website. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
