import useInputValidation from "../hooks/useInputValidation";

function Signin() {
  const {
    email,
    password,
    handleEmailChange,
    handlePasswordChange,
    handleSubmitSignin,
    isDisabled,
  } = useInputValidation();

  return (
    <form onSubmit={handleSubmitSignin}>
      <label>
        이메일
        <input
          data-testid="email-input"
          value={email}
          onChange={handleEmailChange}
        ></input>
      </label>

      <label>
        비밀번호
        <input
          data-testid="password-input"
          value={password}
          onChange={handlePasswordChange}
          type="password"
        ></input>
      </label>

      <button data-testid="signin-button" disabled={isDisabled}>
        로그인
      </button>
    </form>
  );
}

export default Signin;
