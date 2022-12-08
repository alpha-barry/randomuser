import { configureStore, ThunkAction, Action, createSlice } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

const favoritUserSlice = createSlice({
  name: "favoritUser",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      //state.push(action.payload);
    },
    removeUser: (state, action) => {

    }
  }
});

export const {addUser, removeUser} = favoritUserSlice.actions;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
