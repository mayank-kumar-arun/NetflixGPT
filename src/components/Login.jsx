import React, { useRef, useState } from "react";
import Header from "./Header";
import { ValidateForm } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKGROND_IMAGE, LOGO_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage, setErrorMMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef("");

  const handleFormSubmit = () => {
    const message = ValidateForm(
      email.current.value,
      password.current.value
      //   name.current.value
    );
    setErrorMMessage(message);

    if (message) return;
    setLoading(true);
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          // ...
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: LOGO_AVATAR,
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
              setLoading(false);
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrorMMessage(error);
              setLoading(false);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMMessage(errorCode + "-" + errorMessage);
          setLoading(false);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then(() => {
          // Signed i
          // ...

          navigate("/browse");
          setLoading(false);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMMessage(errorCode + "-" + errorMessage);
          setLoading(false);
        });
    }
  };
  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="h-screen md:h-[100%] object-cover"
          src={BACKGROND_IMAGE}
          alt="Image"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-80 text-white"
      >
        <h1 className="font-bold text-3xl py-4 text-white">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Enter Full Name"
            className="p-4 my-4 w-full bg-gray-600"
          ></input>
        )}
        <input
          ref={email}
          type="email"
          placeholder="Enter Email Address"
          className="p-4 my-4 w-full bg-gray-600"
        ></input>
        <input
          ref={password}
          type="password"
          placeholder="Enter Password"
          className="p-4 my-4 w-full bg-gray-600"
        ></input>
        {errorMessage && (
          <p className="py-2 text-red-500 text-lg">{errorMessage}</p>
        )}
        <button
          className="p-4 my-6 bg-red-700 w-full"
          onClick={handleFormSubmit}
          disabled={loading}
        >
          {isSignInForm
            ? `${loading ? "Signing In..." : "Sign In"} `
            : `${loading ? "Signing Up..." : "Sign Up"} `}
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
