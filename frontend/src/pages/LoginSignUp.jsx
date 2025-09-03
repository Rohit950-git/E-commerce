import React, { useState } from "react";
import "./Css/LoginSignUP.css";

const LoginSignup = () => {
  const [state, setState] = useState("Sign Up"); // default signup
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitForm = async (endpoint) => {
    try {
      let response = await fetch(`http://localhost:4000/${endpoint}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      let data = await response.json();
      console.log("API Response:", data);

      if (data.success) {
        localStorage.setItem("auth-token", data.token);
        window.location.replace("/");
      } else {
        alert(data.error || "Something went wrong!");
      }
    } catch (err) {
      console.error("Request Failed:", err);
      alert("Server not responding!");
    }
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>

        <div className="loginsignup-fields">
          {state === "Sign Up" && (
            <input
              name="name"
              value={formData.name}
              onChange={changeHandler}
              type="text"
              placeholder="Your Name"
              required
            />
          )}


          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Email Address"
            required
          />
          <input
            name="password"
            value={formData.password}
            onChange={changeHandler}
            type="password"
            placeholder="Password"
            required
          />
        </div>

        <button
          onClick={() =>
            state === "Login" ? submitForm("login") : submitForm("signup")
          }
        >
          Continue
        </button>

        {state === "Sign Up" ? (
          <p className="loginsignup-login">
            Already have an account?{" "}
            <span onClick={() => setState("Login")}>Login</span>
          </p>
        ) : (
          <p className="loginsignup-login">
            Create an account?{" "}
            <span onClick={() => setState("Sign Up")}>Click Here</span>
          </p>
        )}

        <div className="loginsignup-agree">
          <input type="checkbox" />
          <p>By Continuing, I agree to the Terms of Use & Privacy Policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
