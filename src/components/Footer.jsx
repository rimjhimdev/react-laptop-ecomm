"use client";
import React from "react";
import { Link } from "react-router-dom";
import insta from "../assets/instagram.png";
import fb from "../assets/facebook.png";
import twitter from "../assets/twitter.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-img"></div>

        <div className="footer-body">
          <div className="container">
            <div className="row">
              <div className="footer-col">
                <h4>company</h4>
                <ul>
                  <li>
                    <Link to="#!">about us</Link>
                  </li>
                  <li>
                    <Link to="/contact-us">contact us</Link>
                  </li>
                  <li>
                    <Link to="/services">our services</Link>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>customer support</h4>
                <ul>
                  <li>
                    <Link to="#!">FAQ</Link>
                  </li>
                  <li>
                    <Link to="#!">help center</Link>
                  </li>
                  <li>
                    <Link to="#!">returns and refund</Link>
                  </li>
                  <li>
                    <Link to="">warranty information</Link>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>quick links</h4>
                <ul>
                  <li>
                    <Link to="/All-laptops">laptops</Link>
                  </li>
                  <li>
                    <Link to="/accessories">accessories</Link>
                  </li>
                  <li>
                    <Link to="#!">brands</Link>
                  </li>
                  <li>
                    <Link to="#!">sales and offers</Link>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Stay Connected</h4>
                <div className="social-links">
                  <Link to="#!">
                    <img src={insta} className="fab fa-facebook-f">
                      {/* <!-- download picture avoid using font awsome --> */}
                    </img>
                  </Link>
                  <Link to="#!">
                    <img src={twitter} className="fab fa-instagram"></img>
                  </Link>
                  <Link to="#!">
                    <img src={fb} className="fab fa-twitter"></img>
                  </Link>
                </div>
              </div>
            </div>

            <div className="footer-note">
              <h3>
                Recalls| Product recycling| Accessibility| India CSR Policy|
                India Entity Annual Return| Privacy| Terms of use| Use of
                cookies
              </h3>
              <h3>
                ©2024 Quantum Development Company, L.P. The information
                contained herein is subject to change without notice.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
