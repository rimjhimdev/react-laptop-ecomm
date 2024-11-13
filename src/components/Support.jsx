import React from "react";
import { Link } from "react-router-dom";
import server from "../assets/support/HPE_Server.png";
import keyboard from "../assets/support/KEYBOARDD.png";
import lappy from "../assets/support/lappy.png";
import herosection from "../assets/support/logologo.png";
import certificate from "../assets/certificate.png";
import edit from "../assets/edit.png";
import tools from "../assets/tools.png";
import responsive from "../assets/responsive.png";

const Support = () => {
  return (
    <>
      <div className="support">
        <section className="hero">
          <img src={herosection} alt="logo" width="100%" height="350px" />
        </section>
        <section className="product-family">
          <div className="container">
            <h2>Select a Product Family</h2>
            <div className="product-options">
              <div className="product-item">
                <img src={lappy} alt="PC" />
                <p>
                  <b>PC</b>
                </p>
                <p>Laptops, desktop, monitors, docks</p>
              </div>
              <div className="product-item">
                <img src={server} alt="Data Center" />
                <p>
                  <b>Data Center</b>
                </p>
                <p>Servers, storage and networking</p>
              </div>
              <div className="product-item">
                <img src={keyboard} alt="accessories" />
                <p>
                  <b>Accessories</b>
                </p>
                <p>Keyboards, mouse, ,headset, etc</p>
              </div>
            </div>
          </div>
        </section>

        <section className="related-services">
          <h2>Related Services</h2>
          <div className="services-container">
            <div className="service-item">
              <img
                src={certificate}
                alt="Extend Device Warranty Icon"
                className="service-icon"
              />
              <h3>Extend Device Warranty</h3>
              <p>
                Protect Your Quantum Device – Extend or Upgrade your Quantum
                Warranty today!
              </p>
              <Link to="#" className="service-link">
                <button>Extend Warranty</button>
              </Link>
            </div>

            <div className="service-item">
              <img
                src={responsive}
                alt="Parts Lookup Icon"
                className="service-icon"
              />
              <h3>Parts Lookup</h3>
              <p>
                Find Genuine Quantum Parts – Fast and efficiently with our
                comprehensive Parts Lookup tool.
              </p>
              <Link to="#" className="service-link">
                <button>Find Parts</button>
              </Link>
            </div>

            <div className="service-item">
              <img
                src={tools}
                alt="Track My Repair Icon"
                className="service-icon"
              />
              <h3>Track My Repair</h3>
              <p>
                Track Your Quantum Repair Progress Effortlessly – Stay informed
                and up to date with our Easy-to-Use Repair Status tool.
              </p>
              <Link to="#" className="service-link">
                <button>Track Now</button>
              </Link>
            </div>

            <div className="service-item">
              <img
                src={edit}
                alt="Register Products Icon"
                className="service-icon"
              />
              <h3>Register Products & Services</h3>
              <p>
                Thank You for Your Recent Quantum Purchase – Please take a few
                minutes to update your warranty dates or register your product
                or service.
              </p>
              <Link to="#" className="service-link">
                <button>Register Now</button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Support;
