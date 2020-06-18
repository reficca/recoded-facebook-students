import React, { useState } from "react";
import firebase from "firebase"
import db from "./firebase";
//import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form"
// import FormGroup from "react-bootstrap/FormGroup";
// import FormControl from "react-bootstrap/FormControl";


const SignUpPage = () => {

  const [user, setUser] = useState(firebase.auth().currentUser);
  const [profile, setProfile] = useState("");
  const [city, setCity] = useState("");

  const googleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
      .signInWithPopup(provider)
      .then(function(result) {
        const user = result.user;
        setUser(user);
    }).catch((error) => console.error("error here", error))
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await db.collection("profiles").doc(user.uid).set({
      userId: user.uid,
      name: user.displayName,
      profile: profile,
      city: city,
      imageUrl: user.photoURL,
    })
      .then(() => console.log("success"))
      .catch((error) => console.error("error here", error))
    };

  // 

  return (
      <form onSubmit={handleSubmit}> 
        <img src="./google-signin.png" alt="google-signin" onClick={googleLogin}/>
        <input type="text" placeholder="Profile" onChange={(e) => setProfile(e.target.value)}/>
        <input type="text" placeholder="City" onChange={(e) => setCity(e.target.value)}/>
        <button variant="primary" type="submit">Submit</button>
      </form>
  )
};

export default SignUpPage;
