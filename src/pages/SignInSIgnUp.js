import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../firebase.config";
import { LogInContext } from "../App";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  // firebase.initializeApp({});
} else {
  firebase.app(); // if already initialized, use that one
}

const SignInSignUp = () => {
  const [SignedInUser, setSignedInUser] = useContext(LogInContext);

  var provider = new firebase.auth.GoogleAuthProvider();
  const handleLogInButton = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;
        var token = credential.accessToken;
        var user = result.user;
        setSignedInUser(user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
      });
  };
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        margin: "30% 0%",
      }}
    >
      <div
        style={{
          width: "500px",
          padding: "2% 5%",
          border: "1px solid grey",
          borderRadius: "10px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f1f1f1",
          boxShadow: "2px 4px 10px lightgrey",
        }}
      >
        <div style={{ width: "30%" }}>
          <Button style={{ width: "100%" }} onClick={() => handleLogInButton()}>
            Sign In
          </Button>
        </div>
        <div
          style={{
            width: "70%",
            fontSize: "25px",
            paddingLeft: "3%",
            fontWeight: "600",
          }}
        >
          Sign In with Google
        </div>
      </div>
    </div>
  );
};

export default SignInSignUp;
