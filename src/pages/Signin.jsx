import useInputValidation from "../hooks/useInputValidation";

function Signin() {
  const {
    email,
    password,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
    isDisabled,
  } = useInputValidation();

  return (
    <form onSubmit={handleSubmit}>
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
        ></input>
      </label>

      <button data-testid="signin-button" disabled={isDisabled}>
        로그인
      </button>
    </form>
  );
}

export default Signin;
