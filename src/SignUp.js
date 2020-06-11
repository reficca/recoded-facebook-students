import React from "react";
import db from "./firebase";
import GoogleBtn from './GoogleButton';


const SignUpPage = () => {

  const loginGoogle = (e) => {
    e.preventDefault();
    return (
      console.log("google auth")
    );
  };

  const cityForm = () => {
    return (
      console.log("firebase add")
    );
  };

  const profileForm = () => {
    return (
      console.log("firebase add")
    );
  };

  const submitButton = (e) => {
    e.preventDefault();
    return (
      console.log("Submitted successfully.")
    );
  };

  // 

  return (
    <div>
      <form>
        <GoogleBtn />
        <button onClick={loginGoogle} variant="primary">google</button>{' '}
        <input onSubmit={cityForm} placeholder="city"></input>{' '}
        <input onSubmit={profileForm} placeholder="profile"></input>{' '}
        <button onClick={submitButton} variant="primary">Submit</button>
      </form>
    </div>
  )
};

export default SignUpPage;
