import { createSlice } from '@reduxjs/toolkit';
import { UserType } from "../features/user/UserType";

const initialState: UserType[] = [];

const favoriteUserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      if (!state.some((val: UserType) => val.uuid === action.payload.uuid)) {
        state.push(action.payload);
      }
    },
    removeUser: (state, action) => {
      state = state.filter((user: UserType) => user.uuid !== action.payload);
      return state;
    }
  }
});

export const {addUser, removeUser} = favoriteUserSlice.actions;
export default favoriteUserSlice.reducer;