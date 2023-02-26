import CreateUserFormStyled from "./CreateUserFormStyled";

const CreateUserForm = (): JSX.Element => {
  return (
    <CreateUserFormStyled>
      <>
        <form className="create-form">
          <span className="create-form__title">Be a Bro</span>
          <div className="create-form__fields">
            <label htmlFor="name" className="create-form__name-label">
              <span className="create-form__name-title"> Username </span>
              <input
                type="text"
                className="create-form__name-input"
                placeholder="username"
                aria-label="username"
              ></input>
            </label>
            <label htmlFor="password" className="create-form__password-label">
              <span className="create-form__password-title"> Password </span>
              <input
                type="text"
                className="create-form__password-input"
                placeholder="password"
                aria-label="password"
              ></input>
            </label>
            <label htmlFor="email" className="create-form__email-label">
              <span className="create-form__email-title"> Email </span>
              <input
                type="text"
                className="create-form__email-input"
                placeholder="email"
                aria-label="email"
              ></input>
            </label>
            <label htmlFor="image" className="create-form__image-label">
              <span className="create-form__image-title"> Image </span>
              <input
                type="text"
                className="create-form__image-input"
                placeholder="image url"
                aria-label="image"
              ></input>
            </label>
          </div>
          <a href="join">Join Bro community</a>
        </form>
      </>
    </CreateUserFormStyled>
  );
};

export default CreateUserForm;
