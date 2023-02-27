import { createSlice } from "@reduxjs/toolkit";
import { UserDataStructure } from "../../../types";

const initialUserState: UserDataStructure = {
  username: "",
  password: "",
  email: "",
  enemies: [],
  friends: [],
  isLogged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    createUser: (currentUserState: UserDataStructure): UserDataStructure => ({
      ...currentUserState,
      isLogged: true,
    }),
  },
});

export const userReducer = userSlice.reducer;
export const { createUser: createUserActionPayload } = userSlice.actions;
