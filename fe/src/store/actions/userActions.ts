import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import callAPI from 'callAPI';
export interface User {
  _id ?: string,
  username ?: string
  lastLogin ?: Date,
  sockets ?: string[],
  createdAt ?: Date,
}
export interface userState {
  user : User,
  users : User[]
}
const initialState: userState = {
  user : {},
  users : []
};

export const fetchUsers = createAsyncThunk(
  'user/fetchUsers',
  async () => {
    const res = await callAPI.get('/user')
    return res.data;
  }
);

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async () => {
    const res = await callAPI.get('/user/my')
    return res.data;
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers : {
    currentUser : (state,action: PayloadAction<User>) => {
      state.user = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload
    })
    .addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload
    })
  }
})

export default userSlice.reducer