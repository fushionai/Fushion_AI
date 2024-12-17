import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import contactsReducer from "./contacts/contactSlice";
import newsReducer from "./news/newsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
    news: newsReducer,
  },
});

export const authSelector = (state: RootState) => state.auth;
export const contactsSelector = (state: RootState) => state.contacts;
export const newsSelector = (state: RootState) => state.news;

// Infer the type of makeStore
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
