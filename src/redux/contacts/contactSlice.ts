import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      id: 0,
      created_at: "",
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  ],
  isLoading: true,
};

export const getContactMessages = createAsyncThunk(
  "contacts/getContactMessages",
  async (token: string | null) => {
    return await fetch("/api/contactMessages", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (!res.ok) throw new Error("Failed to get messages");
      return res.json();
    });
  }
);

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    deleteContactMessage: (state, action) => {
      const id = action.payload;
      state.data = state.data.filter((message) => message.id !== id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getContactMessages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getContactMessages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.messages;
        // save token to local storage
      })
      .addCase(getContactMessages.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { deleteContactMessage } = contactsSlice.actions;
export default contactsSlice.reducer;
