import React from "react";
import { Link } from "react-router-dom";
import cart from "../assets/shopping-cart.png";
import mail from "../assets/email.png";
import phone from "../assets/telephone.png";
import team from "../assets/business-teamwork.png";
import question from "../assets/question.png";

const ContactUs = () => {
  return (
    <>
      <div className="contact-us">
        <div class="mid-title-bg">
          <div class="m-t-image" id="contact-bg"></div>
          <div class="m-t-text position-text">
            <h1>CONTACT-US</h1>
          </div>
        </div>

        <div className="contact-body">
          <div className="container">
            <div className="contact-outer">
              <div className="contact-para">
                <div className="contact-flex">
                  <h1>Need support?</h1>
                  <p>
                    Need help with a product you own? Ask about any HP product,
                    service or solution. Also, order software drivers and
                    recovery disks, check status on orders for drivers and
                    disks, and find product manuals.
                  </p>
                </div>
              </div>
              <div className="contact-inner">
                <div className="contact-box">
                  <div className="contact-box-img">
                    <img src={cart} alt="" />
                  </div>
                  <div className="contact-box-desc">
                    <div>
                      <h2>Shopping</h2>
                      <p>
                        Sales consultations and order status.Discover our
                        products and buy online.
                      </p>
                    </div>
                  </div>
                  <div className="contact-box-btn">
                    <Link to="/">Go</Link>
                  </div>
                </div>

                <div className="contact-box">
                  <div className="contact-box-img">
                    <img src={question} alt="" />
                  </div>
                  <div className="contact-box-desc">
                    <div>
                      <h2>Contact support</h2>
                      <p>
                        Find support contact options like chat, phone or email
                        for your HP Products
                      </p>
                    </div>
                  </div>
                  <div className="contact-box-btn">
                    <Link to="/support">Go</Link>
                  </div>
                </div>

                <div className="contact-box">
                  <div className="contact-box-img">
                    <img src={team} alt="" />
                  </div>
                  <div className="contact-box-desc">
                    <div>
                      <h2>Company</h2>
                      <p>General questions and office locations</p>
                    </div>
                  </div>
                  <div className="contact-box-btn">
                    <Link to="/home">Go</Link>
                  </div>
                </div>

                <div className="contact-box">
                  <div className="contact-box-img">
                    <img src={mail} alt="" />
                  </div>
                  <div className="contact-box-desc">
                    <div>
                      <h2>Feedback/Query</h2>
                      <p>Sent your Feedback or if any Query you have.</p>
                    </div>
                  </div>
                  <div className="contact-box-btn">
                    <Link to="/contact-us/Feedback|query-Form">Go</Link>
                  </div>
                </div>

                <div className="contact-box">
                  <div className="contact-box-img">
                    <img src={phone} alt="" />
                  </div>
                  <div className="contact-box-desc">
                    <div>
                      <h2>Call 1800 180 1810</h2>
                      <p>To speak with a sales specialist.</p>
                    </div>
                  </div>
                  {/* <div className="contact-box-btn">
                    <Link to="/home">Go</Link>
                  </div> */}
                </div>

                <div className="contact-box">
                  <div className="contact-box-img">
                    <img src={phone} alt="" />
                  </div>
                  <div className="contact-box-desc">
                    <div>
                      <h2>Call 1800 425 4999</h2>
                      <p>To speak with a sales specialist.</p>
                    </div>
                  </div>
                  {/* <div className="contact-box-btn">
                    <Link to="/home">Go</Link>
                  </div> */}
                </div>

                <div className="contact-box">
                  <div className="contact-box-img">
                    <img src={phone} alt="" />
                  </div>
                  <div className="contact-box-desc">
                    <div>
                      <h2>Call 1800 180 1810</h2>
                      <p>To speak with a sales specialist.</p>
                    </div>
                  </div>
                  {/* <div className="contact-box-btn">
                    <Link to="/home">Go</Link>
                  </div> */}
                </div>

                <div className="contact-box">
                  <div className="contact-box-img">
                    <img src={cart} alt="" />
                  </div>
                  <div className="contact-box-desc">
                    <div>
                      <h2>Check online</h2>
                      <p>
                        You can see your order status by logging into your
                        account.
                      </p>
                    </div>
                  </div>
                  <div className="contact-box-btn">
                    <Link to="/home">Go</Link>
                  </div>
                </div>
              </div>
              {/* call, email,check-online=sign */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
