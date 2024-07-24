import "./LoginPopup.css";
import { useState } from "react";
import { assets } from "../../assets/assets";

function LoginPopup({ setShowLogin }) {
  const [currentState, setCurrentState] = useState("Log In");

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currentState === "Log In" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your Name" required />
          )}
          <input type="email" placeholder="Your Email" required />
          <input type="password" placeholder="password" required />
        </div>
        <button>
          {currentState === "Sign Up" ? "Create Account" : "Log In"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use and privacy policy.</p>
        </div>
        {currentState === "Log In" ? (
          <p>
            Create a new account? <span onClick={() => setCurrentState('Sign Up')} >Click Here</span>
          </p>
        ) : (
          <p>
            Already have an account? <span onClick={() => setCurrentState('Log In')} >Login Here</span>
          </p>
        )}
      </form>
    </div>
  );
}

export default LoginPopup;
