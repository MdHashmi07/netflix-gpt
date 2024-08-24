import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);

  const toggleSignInForm = (e) => {
    e.preventDefault();
    setisSignInForm(!isSignInForm);
  };
  return (
    <div >
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_large.jpg"
          alt="backgorund-image"
        />
      </div>
      <form className="absolute bg-black w-3/12 p-8 mx-auto left-0 right-0 my-24 bg-opacity-75 rounded-md">
        <h1 className="text-white text-4xl font-bold py-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full bg-black bg-opacity-60 border border-gray-400 text-white rounded-md"
          />
        )}
        <input
          type="text"
          placeholder="Email or mobile Number"
          className="p-4 my-2 w-full bg-black bg-opacity-60 border border-gray-400 text-white rounded-md"
        />
        <input
          type="text"
          placeholder="Password"
          className="p-4 my-2 w-full bg-black bg-opacity-60 border border-gray-400 text-white rounded-md"
        />
        <button className="w-full p-2 my-2 bg-red-600 text-white rounded-md">
          Submit
        </button>
        <p className="text-gray-200 py-4">
          {isSignInForm ? "New to Netflix? " : "Already registered? "}
          <span
            className="text-white font-bold cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? "Sign up now" : "Sign In Now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
