import { useState } from "react";
import { signinAPI, signupAPI } from "../apis/auth";

function useInputValidation() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isDisabled =
    password.length < 8 || email.indexOf("@") === -1 ? true : false;

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmitSignup = async (event) => {
    event.preventDefault();
    await signupAPI({ email, password });
  };

  const handleSubmitSignin = async (event) => {
    event.preventDefault();
    await signinAPI({ email, password });
  };

  return {
    email,
    password,
    handleEmailChange,
    handlePasswordChange,
    handleSubmitSignup,
    handleSubmitSignin,
    isDisabled,
  };
}

export default useInputValidation;
