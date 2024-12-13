import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface IinitialStateType {
  token: string | null;
  isLoading: boolean;
  error: string;
}

const initialState: IinitialStateType = {
  token: "",
  isLoading: false,
  error: "",
};

export const login = createAsyncThunk(
  "auth/login",
  async (data: { email: string; password: string }) => {
    return await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => {
      if (!res.ok) throw new Error("Failed to login");
      return res.json();
    });
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      localStorage.removeItem("token");
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
        // save token to local storage
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { logout, setToken } = authSlice.actions;
export default authSlice.reducer;
