import { useState } from "react";

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

  const handleSubmit = (event) => {
    event.prevnetDefault();
  };

  return {
    email,
    password,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
    isDisabled,
  };
}

export default useInputValidation;
