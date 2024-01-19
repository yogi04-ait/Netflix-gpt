import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";
import { addUser } from "../utils/userSlice";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
const Login = () => {

  const [isSignIn, setIsSignIn] = useState(true);
  const [errMessage, setErrMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef();
  const email = useRef();
  const password = useRef();


  const handleButtonClick = () => {
    // Validate the form data

    const message = checkValidData(email.current.value, password.current.value, name.current?.value || "");
    setErrMessage(message);

    if (message) return;

    if (!isSignIn) {

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
      .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value
          })
          .then(()=>{
            const {uid, email, displayName} = auth.currentUser;
            dispatch(
              addUser({
                uid:uid,
                email: email,
                displayName: displayName,
              })
            );
          })
          .catch((error)=> {
            setErrMessage(error.message);
          });
        
          // ...
        })

        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + ": " + errorMessage);
          // ..
        });
    } 
    else {

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value

      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + ": " + errorMessage);
        });
    }
  };

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

 

  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="background-image"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-4/12 absolute bg-opacity-80 text-white p-12 flex flex-col mx-auto my-36 right-0 left-0 items-stretch rounded-lg bg-black m-36"
      >
        <h1 className="font-bold text-2xl mb-5">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            className="p-4 my-2 w-full outline-none bg-gray-700 rounded-md"
            placeholder="Full Name"
            type="text"
          />
        )}

        <input
          className="p-4 my-2 w-full outline-none bg-gray-700 rounded-md"
          placeholder="Email Address"
          type="text"
          ref={email}
        />

        <input
          className="p-4 my-2 w-full outline-none bg-gray-700 rounded-md"
          placeholder="Password"
          type="password"
          ref={password}
        />
        <p className="text-red-700 font-bold">{errMessage}</p>
        <button
          className="p-3 my-4 bg-red-700 w-full rounded-lg"
          type="submit"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p className="text-gray-500">
          {!isSignIn ? "Already Registered? " : "New to Netflix? "}
          <span className="text-white cursor-pointer" onClick={toggleSignIn}>
            {!isSignIn ? "Sign In" : "Sign up now."}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
