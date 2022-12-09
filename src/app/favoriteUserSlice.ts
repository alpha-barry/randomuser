import { createSlice } from '@reduxjs/toolkit';

const initialState: string[] = [];

const favoriteUserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      if (!state.some((val:any) => val.uuid === action.payload.uuid)) {
        state.push(action.payload);
      }
    },
    removeUser: (state, action) => {
      state = state.filter((user: any) => user.uuid !== action.payload);
      return state;
    }
  }
});

export const {addUser, removeUser} = favoriteUserSlice.actions;
export default favoriteUserSlice.reducer;