import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c95abc7a-8124-4630-bb7a-3b160bdc6de3/web/IN-en-20250915-TRIFECTA-perspective_d3d87aa7-58ed-4c6b-98dc-231ed05ba675_medium.jpg"
          alt="Image"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-80 text-white">
        <h1 className="font-bold text-3xl py-4 text-white">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Enter Full Name"
            className="p-4 my-4 w-full bg-gray-600"
          ></input>
        )}
        <input
          type="email"
          placeholder="Enter Email Address"
          className="p-4 my-4 w-full bg-gray-600"
        ></input>
        <input
          type="password"
          placeholder="Enter Password"
          className="p-4 my-4 w-full bg-gray-600"
        ></input>
        <button className="p-4 my-6 bg-red-700 w-full">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
