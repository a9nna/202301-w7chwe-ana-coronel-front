import LoginFormStyled from "./LoginFormStyled";

const LoginForm = (): JSX.Element => {
  return (
    <LoginFormStyled>
      <>
        <form className="form">
          <span className="form__title">BroNet</span>
          <label htmlFor="name" className="form__name-label">
            <span className="form__name-title"> Username </span>
            <input
              type="text"
              className="form__name-input"
              placeholder="username"
            ></input>
          </label>
          <label htmlFor="name" className="form__password-label">
            <span className="form__password-title"> Password </span>
            <input
              type="text"
              className="form__password-input"
              placeholder="password"
            ></input>
          </label>
          <button>Log in</button>
        </form>
      </>
    </LoginFormStyled>
  );
};

export default LoginForm;
