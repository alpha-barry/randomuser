import { configureStore, ThunkAction, Action, createSlice, combineReducers } from '@reduxjs/toolkit';
import { randomUser } from '../services/randomuser';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const favoritUserSlice = createSlice({
  name: "user",
  initialState: [{a: "s"}],
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    removeUser: (state, action) => {
      state = state.filter((user: any) => user.uuid !== action.payload);
      return state;
    }
  }
});

const persistConfig = {
  key: "root",
  storage
}

const reducer = combineReducers({
  favorities: favoritUserSlice.reducer
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: {
    user: persistedReducer,
    [randomUser.reducerPath]: randomUser.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck: false}).concat(randomUser.middleware),
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