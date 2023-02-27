import React, { useState } from "react";
import useUser from "../../hooks/useUser";
import CreateUserFormStyled from "./CreateUserFormStyled";

const CreateUserForm = (): JSX.Element => {
  const { createUser } = useUser();
  const initialUserState = {
    image: "",
    email: "",
    enemies: [],
    friends: [],
    password: "",
    username: "",
  };

  const formData = new FormData();

  const [currentUserState, setUserState] = useState(initialUserState);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    formData.append("email", currentUserState.email);
    formData.append("username", currentUserState.username);
    formData.append("password", currentUserState.password);

    createUser(formData);

    setUserState({ ...currentUserState });
  };

  return (
    <CreateUserFormStyled>
      <>
        <form className="create-form" onSubmit={onSubmit}>
          <span className="create-form__title">Be a Bro</span>
          <div className="create-form__fields">
            <label className="create-form__name-label">
              <span className="create-form__name-title"> Username </span>
              <input
                type="text"
                className="create-form__name-input"
                placeholder="username"
                aria-label="username"
                value={currentUserState.username}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setUserState({
                    ...currentUserState,
                    username: event.target.value,
                  });
                }}
              ></input>
            </label>
            <label className="create-form__password-label">
              <span className="create-form__password-title"> Password </span>
              <input
                type="text"
                className="create-form__password-input"
                placeholder="password"
                aria-label="password"
                value={currentUserState.password}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setUserState({
                    ...currentUserState,
                    password: event.target.value,
                  });
                }}
              ></input>
            </label>
            <label className="create-form__email-label">
              <span className="create-form__email-title"> Email </span>
              <input
                type="text"
                className="create-form__email-input"
                placeholder="email"
                aria-label="email"
                value={currentUserState.email}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setUserState({
                    ...currentUserState,
                    email: event.target.value,
                  });
                }}
              ></input>
            </label>
            <label className="create-form__image-label">
              <span className="create-form__image-title"> Image </span>
              <input
                type="file"
                className="create-form__image-input"
                aria-label="image"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  formData.append("image", event.target.files![0]);
                }}
              ></input>
            </label>
          </div>
          <button>Join Bro community</button>
        </form>
      </>
    </CreateUserFormStyled>
  );
};

export default CreateUserForm;
