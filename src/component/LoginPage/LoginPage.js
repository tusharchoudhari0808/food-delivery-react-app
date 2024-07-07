import React, { useState } from "react";
import "./LoginPage.css";
import { assets } from "../../asset/assets";

const LoginPage = ({ setShowLogin }) => {
  const [CurrState, setCurrState] = useState("Login");

  return (
    <div className="Loginpop">
      <form className="login-page-content">
        <div className="login-page-title">
          <h2>{CurrState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="Close"
          />
        </div>
        <div className="login-page-inputs">
          {CurrState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Enter your Name" required />
          )}
          <input type="email" placeholder="Enter your Email" required />
          <input type="password" placeholder="Enter your Password" required />
        </div>
        <button>{CurrState === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className="Login-chackbox-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the term of use & privacy policy </p>
        </div>
        {CurrState === "Login" ? (
          <p>
            Create a new account ? <span onClick={()=>setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Allready have my account <span onClick={()=>setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPage;
