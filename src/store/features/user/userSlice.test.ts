import { UserDataStructure, UserApiDataStructure } from "../../../types";
import { userReducer, createUserActionPayload } from "./userSlice";

describe("Given the userSlice function", () => {
  describe("When it receibes the current state and createUser action with a new user", () => {
    test("Then it should return the new state with an the user passed and property isLogged in true", () => {
      const initialUserState: UserDataStructure = {
        image: "",
        username: "",
        enemies: [],
        friends: [],
        isLogged: false,
      };
      const newUser: UserApiDataStructure = {
        image: "",
        username: "",
        enemies: [],
        friends: [],
      };
      const expectedNewState: UserDataStructure = {
        image: "",
        username: "",
        enemies: [],
        friends: [],
        isLogged: true,
      };

      const newState = userReducer(
        initialUserState,
        createUserActionPayload(newUser)
      );

      expect(newState).toStrictEqual(expectedNewState);
    });
  });
});
