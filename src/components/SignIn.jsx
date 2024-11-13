import React, { useState } from "react";
// import styles from "../styles/css/login.module.css";

const SignIn = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleLogin = () => {
    setIsLogin(true);
  };

  const toggleRegister = () => {
    setIsLogin(false);
  };

  return (
    <>
      <div className="sign-in">
        <div className="container">
          <div className="wrapper">
            <nav className="nav">
              <div className="navbutton">
                <button
                  // className={`btn ${isLogin ? 'white-btn' : ''}`}
                  className="btn"
                  id="loginBtn"
                  onClick={toggleLogin}
                >
                  Log In
                </button>
                <button
                  // className={`"btn} ${!isLogin ? 'white-btn' : ''}`}
                  className="btn"
                  id="registerBtn"
                  onClick={toggleRegister}
                >
                  Sign Up
                </button>
              </div>
              <div className="navmenubtn">
                <i
                  className="bx bx-menu"
                  onClick={() => console.log("Menu opened")}
                ></i>
              </div>
            </nav>

            {/* Form box */}
            <div className="formbox">
              {/* Login Form */}
              <div
                className="logincontainer"
                id="login"
                style={{
                  left: isLogin ? "4px" : "-510px",
                  opacity: isLogin ? 1 : 0,
                }}
              >
                <div className="top">
                  <span>
                    Don't have an account?
                    <a href="#" onClick={toggleRegister}>
                      Sign Up
                    </a>
                  </span>
                  <header>Login</header>
                </div>
                <div className="inputbox">
                  <input
                    type="text"
                    className="inputfield"
                    placeholder="Username or Email"
                  />
                  <i className="bx bx-user"></i>
                </div>
                <div className="inputbox">
                  <input
                    type="password"
                    className="inputfield"
                    placeholder="Password"
                  />
                  <i className="bx bx-lock-alt"></i>
                </div>
                <div className="inputbox">
                  <input type="submit" className="submit" value="Sign In" />
                </div>
                <div className="twocol">
                  <div className="one">
                    <input type="checkbox" id="login-check" />
                    <label htmlFor="login-check"> Remember Me</label>
                  </div>
                  <div className="two">
                    <label>
                      <a href="#">Forgot password?</a>
                    </label>
                  </div>
                </div>
              </div>

              {/* Register Form */}
              <div
                className="registercontainer"
                id="register"
                style={{
                  right: isLogin ? "-520px" : "5px",
                  opacity: isLogin ? 0 : 1,
                }}
              >
                <div className="top">
                  <span>
                    Have an account?
                    <a href="#" onClick={toggleLogin}>
                      Login
                    </a>
                  </span>
                  <header>Sign Up</header>
                </div>
                <div className="twoforms">
                  <div className="inputbox">
                    <input
                      type="text"
                      className="inputfield"
                      placeholder="Firstname"
                    />
                    <i className="bx bx-user"></i>
                  </div>
                  <div className="inputbox">
                    <input
                      type="text"
                      className="inputfield"
                      placeholder="Lastname"
                    />
                    <i className="bx bx-user"></i>
                  </div>
                </div>
                <div className="inputbox">
                  <input
                    type="text"
                    className="inputfield"
                    placeholder="Email"
                  />
                  <i className="bx bx-envelope"></i>
                </div>
                <div className="inputbox">
                  <input
                    type="password"
                    className="inputfield"
                    placeholder="Password"
                  />
                  <i className="bx bx-lock-alt"></i>
                </div>
                <div className="inputbox">
                  <input type="submit" className="submit" value="Register" />
                </div>
                <div className="twocol">
                  <div className="one">
                    <input type="checkbox" id="register-check" />
                    <label htmlFor="register-check"> Remember Me</label>
                  </div>
                  <div className="two">
                    <label>
                      <a href="#">Terms & conditions</a>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
