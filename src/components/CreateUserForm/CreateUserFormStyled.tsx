import styled from "styled-components";

const CreateUserFormStyled = styled.div`
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: 1000px;
  background-color: #01051c;
  border: 3px solid #2dd5eb;
  border-radius: 15px;

  .create-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    width: 100%;

    &__title {
      font-size: 50px;
      font-weight: 700;
      text-align: center;
      color: #2dd5eb;
    }

    &__fields {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      row-gap: 50px;
      width: 100%;
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

    &__email-label {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    &__email-title {
      color: white;
    }

    &__email-input {
      width: 70vw;
      padding: 20px;
      border-radius: 15px;
      background-color: #01051c;
      border: 1px solid #2dd5eb;
      font-size: 17px;
      color: white;
    }

    &__image-label {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    &__image-title {
      color: white;
    }

    &__image-input {
      width: 70vw;
      padding: 20px;
      border-radius: 15px;
      background-color: #2dd5eb;
      border: 1px solid #2dd5eb;
      font-size: 17px;
      color: #01051c;

      &:hover {
        color: #2dd5eb;
        background-color: #01051c;
      }

      &::-webkit-file-upload-button {
        visibility: hidden;
        width: 2vw;
      }
      &::before {
        content: "Select file";
        color: #01051c;
        font-weight: 600;
        background-color: #2dd5eb;
        border-radius: 12px;
        padding: 10px;
      }

      &:hover {
        &::before {
          color: #2dd5eb;
          background-color: #01051c;
        }
      }
    }

    & button {
      width: 70vw;
      padding: 15px;
      margin-top: 30px;
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

  @media (min-width: 400px) {
    top: 50%;
    height: 700px;
    margin-top: 0px;
    .create-form {
      &__name-input {
        width: 30vw;
      }

      &__password-input {
        width: 30vw;
      }

      &__email-input {
        width: 30vw;
      }

      &__image-input {
        width: 30vw;
      }
    }
  }
`;

export default CreateUserFormStyled;
