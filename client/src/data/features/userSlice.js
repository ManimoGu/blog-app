import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addUser = createAsyncThunk("user/addUser", async (user) => {
  return axios
    .post("http://localhost:5000/register", user)
    .then((res) => res.data)
    .catch((err) => err);
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addUser.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.status = "fullfiled";
      })
      .addCase(addUser.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});


export default userSlice.reducer;
