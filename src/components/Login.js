import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice.js";
import { BACKGROUND_IMG, USER_AVATAR } from "../utils/constants.js";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [showErrorMessage, setShowErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const handleFormData = () => {
    const message = checkValidData(
      fullName?.current?.value,
      email?.current?.value,
      password?.current?.value
    );
    setShowErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      // Sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email?.current?.value, password?.current?.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullName?.current?.value, photoURL: USER_AVATAR
          }).then(() => {
            const {uid, email, displayName, photoURL} = auth.currentUser;
            dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
          }).catch((error) => {
              setShowErrorMessage(error.message);
          });       
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setShowErrorMessage(errorCode +"-"+ errorMessage);
        });
    } else {
      // Sign In logic
      signInWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setShowErrorMessage(errorCode +"-"+ errorMessage);
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
          src={BACKGROUND_IMG}
          alt="backgorund-image"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black w-3/12 p-8 mx-auto left-0 right-0 my-24 bg-opacity-75 rounded-md"
      >
        <h1 className="text-white text-4xl font-bold py-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={fullName}
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full bg-black bg-opacity-60 border border-gray-400 text-white rounded-md"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or mobile Number"
          className="p-4 my-2 w-full bg-black bg-opacity-60 border border-gray-400 text-white rounded-md"
        />
        <input
          ref={password}
          type="text"
          placeholder="Password"
          className="p-4 my-2 w-full bg-black bg-opacity-60 border border-gray-400 text-white rounded-md"
        />
        <p className="text-red-600 text-xl">{showErrorMessage}</p>
        <button
          className="w-full p-2 my-2 bg-red-600 text-white rounded-md"
          onClick={handleFormData}
        >
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
