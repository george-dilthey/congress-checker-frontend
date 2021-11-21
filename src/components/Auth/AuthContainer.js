import React from "react";
import { connect } from "react-redux";
import './AuthModal.css'
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const AuthContainer = () => {

  const [signIn, setSignIn] = React.useState(false);
   
  const setSignInTrue = () => setSignIn(true)
  const setSignInFalse = () => setSignIn(false)


  return (
    <div>
      {signIn ? <SignIn setSignInFalse={setSignInFalse} /> : <SignUp setSignInTrue={setSignInTrue}/>}
    </div>  
  );
};

export default connect(null, null)(AuthContainer);