import React, { useState } from "react";

const FeedBackForm = () => {
  // Define state for form fields
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload on form submit

    // Process form data here (e.g., send to API or console log)
    console.log({ name, phone, email, subject, message });
  };

  return (
    <>
      <div className="feedbackForm">
        <div className="container">
          <div className="form-feed-head">
            <h1>Connect with us!</h1>
            <p>
              We would love to respond to your queries and help you succeed.
              <br />
              Feel free to get in touch with us.
            </p>
          </div>
          <div className="contact-box">
            <div className="contact-left">
              <h3>Send your Queries/feedbak to us</h3>
              <form onSubmit={handleSubmit}>
                <div className="input-row">
                  <div className="input-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Enter your phone"
                    />
                  </div>
                </div>

                <div className="input-row">
                  <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="Enter the subject"
                    />
                  </div>
                </div>

                <label>Message</label>
                <textarea
                  rows="5"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your Message"
                ></textarea>

                <button type="submit">Submit</button>
              </form>
            </div>

            <div className="contact-right">
              <h3>Reach us</h3>

              <table>
                <tbody>
                  <tr>
                    <td>Email:</td>
                    <td>quantumDevelopment-ecom-2024@gmail.com</td>
                  </tr>

                  <tr>
                    <td>Phone:</td>
                    <td>+1 012 345 6789</td>
                  </tr>

                  <tr>
                    <td>Address:</td>
                    <td>
                      #212, Ground floor, 7th floor
                      <br />
                      Some layout, some road, Bhopal
                      <br />
                      India
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedBackForm;
