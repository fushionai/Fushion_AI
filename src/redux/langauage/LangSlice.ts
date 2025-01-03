import { createSlice } from "@reduxjs/toolkit";
interface LanguageState {
  language: string;
}

const initialState: LanguageState = {
  language: localStorage.getItem("preferredLanguage") || "en",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLanguage: (state, action: { payload: string }) => {
      state.language = action.payload;
      localStorage.setItem("preferredLanguage", action.payload);
    },
  },
});

export const { changeLanguage } = languageSlice.actions;
export default languageSlice.reducer;
