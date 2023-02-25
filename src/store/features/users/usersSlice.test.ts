import { UsersDataListStructure, UsersDataStructure } from "../../../types";
import { loadUsersListActionCreator, usersReducer } from "./usersSlice";

describe("Given a userSlice function", () => {
  describe("When it receives a currentUsersList and a loadUsersListActionCreator with a list of 2 users", () => {
    test("Then it should return the new state with the list of 2 users received", () => {
      const usersInitialState: UsersDataListStructure = [
        {
          id: "",
          image: "",
          username: "",
          password: "",
          email: "",
          enemies: {},
          friends: {},
          isLogged: false,
        },
      ];
      const firstUser: UsersDataStructure = {
        id: "",
        image: "",
        username: "",
        password: "",
        email: "",
        enemies: {},
        friends: {},
        isLogged: false,
      };
      const secondtUser: UsersDataStructure = {
        id: "",
        image: "",
        username: "",
        password: "",
        email: "",
        enemies: {},
        friends: {},
        isLogged: false,
      };
      const expectedUsersList = [firstUser, secondtUser];

      const newUsersList = usersReducer(
        usersInitialState,
        loadUsersListActionCreator(expectedUsersList)
      );

      expect(newUsersList).toStrictEqual(expectedUsersList);
    });
  });
});
