import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserDataStructure, UserApiDataStructure } from "../../../types";

const initialUserState: UserDataStructure = {
  image: "",
  username: "",
  enemies: [],
  friends: [],
  isLogged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    createUser: (
      currentUserState: UserDataStructure,
      action: PayloadAction<UserApiDataStructure>
    ): UserDataStructure => ({
      ...currentUserState,
      ...action.payload,
      isLogged: true,
    }),
  },
});

export const userReducer = userSlice.reducer;
export const { createUser: createUserActionPayload } = userSlice.actions;
