import { Link } from "react-router-dom";
import LoginFormStyled from "./LoginFormStyled";

const LoginForm = (): JSX.Element => {
  return (
    <LoginFormStyled>
      <>
        <form className="form">
          <span className="form__title">BroNet</span>
          <label className="form__name-label">
            <span className="form__name-title"> Username </span>
            <input
              type="text"
              className="form__name-input"
              placeholder="username"
              aria-label="username"
            ></input>
          </label>
          <label className="form__password-label">
            <span className="form__password-title"> Password </span>
            <input
              type="text"
              className="form__password-input"
              placeholder="password"
              aria-label="password"
            ></input>
          </label>
          <div className="form__action-buttons">
            <a href="login">Log in</a>
            <Link to={`create-user`}>Sign in</Link>
          </div>
        </form>
      </>
    </LoginFormStyled>
  );
};

export default LoginForm;
