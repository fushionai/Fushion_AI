import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Parser from "rss-parser";

interface NewsState {
  data: any[];
  isLoading: boolean;
}

const initialState: NewsState = {
  data: [],
  isLoading: true,
};

export const getNews = createAsyncThunk("news/getNews", async () => {
  try {
    const response = await fetch(
      "https://api.allorigins.win/get?url=" +
        encodeURIComponent("https://www.iamexpat.nl/rss/news-netherlands/news")
    );
    const data = await response.json();
    const parser = new Parser();
    const feeds = await parser.parseString(data.contents);
    return feeds;
  } catch {
    throw new Error("Failed to get news");
  }
});

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.items.slice(0, 3);
      })
      .addCase(getNews.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const {} = newsSlice.actions;
export default newsSlice.reducer;
