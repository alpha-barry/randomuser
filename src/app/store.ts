import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { randomUser } from '../services/randomuser';
import FavoriteUserSliceReducer from './favoriteUserSlice'

const persistConfig = {
  key: "root",
  storage
}

const reducer = combineReducers({
  favorities: FavoriteUserSliceReducer,
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