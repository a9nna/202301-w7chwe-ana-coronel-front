import styled from "styled-components";

const LoginFormStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: 700px;
  background-color: #01051c;
  border: 3px solid #2dd5eb;
  border-radius: 15px;

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;

    &__title {
      font-size: xx-large;
      font-weight: 700;
      text-align: center;
      color: #2dd5eb;
    }

    &__name-label {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    &__name-title {
      color: white;
    }

    &__name-input {
      width: 70vw;
      padding: 20px;
      border-radius: 15px;
      background-color: #01051c;
      border: 1px solid #2dd5eb;
      font-size: 17px;
      color: white;
    }

    &__password-label {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    &__password-title {
      color: white;
    }

    &__password-input {
      width: 70vw;
      padding: 20px;
      border-radius: 15px;
      background-color: #01051c;
      border: 1px solid #2dd5eb;
      font-size: 17px;
      color: white;
    }

    &__action-buttons {
      display: flex;
      flex-direction: column;
      gap: 50px;
      margin-top: 10px;
    }

    & a {
      width: 150px;
      padding: 15px;
      font-weight: 600;
      font-size: large;
      border-radius: 12px;
      text-align: center;
      background-color: #2dd5eb;
      border: 1px solid #2dd5eb;
      color: #01051c;

      &:hover {
        color: #2dd5eb;
        background-color: #01051c;
      }
    }
  }

  @media (min-width: 730px) {
    .form {
      &__name-input {
        width: 500px;
      }

      &__password-input {
        width: 500px;
      }

      &__action-buttons {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 0;
        margin: 0;
        width: 100%;
      }
    }
  }
`;

export default LoginFormStyled;
