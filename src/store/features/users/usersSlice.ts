import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UsersDataListStructure } from "../../../types";

const usersInitialState: UsersDataListStructure = [];

const usersSlice = createSlice({
  name: "users",
  initialState: usersInitialState,
  reducers: {
    loadUsersList: (
      currentUserList: UsersDataListStructure,
      action: PayloadAction<UsersDataListStructure>
    ): UsersDataListStructure => [...action.payload],
  },
});

export const usersReducer = usersSlice.reducer;
export const { loadUsersList: loadUsersListActionCreator } = usersSlice.actions;
