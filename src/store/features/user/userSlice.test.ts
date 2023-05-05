import { UserDataStructure } from "../../../types";
import { userReducer, createUserActionPayload } from "./userSlice";

describe("Given the userSlice function", () => {
  describe("When it receibes the current state and createUser action with a new user", () => {
    test("Then it should return the new state with an the user passed and property isLogged in true", () => {
      const initialUserState: UserDataStructure = {
        username: "",
        password: "",
        email: "",
        enemies: [],
        friends: [],
        isLogged: false,
      };
      const expectedNewState: UserDataStructure = {
        username: "",
        password: "",
        email: "",
        enemies: [],
        friends: [],
        isLogged: true,
      };

      const newState = userReducer(initialUserState, createUserActionPayload());

      expect(newState).toStrictEqual(expectedNewState);
    });
  });
});
