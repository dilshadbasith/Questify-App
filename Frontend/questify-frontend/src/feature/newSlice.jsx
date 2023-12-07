import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getCookie } from "cookies-next";

const initialState = {
//   loading: false,
//   service: [],
//   error: null,
  likes:'', 
};

const cookie = getCookie('token');

export const setLike = createAsyncThunk('user/findService', async (question) => {
  // try {
    const res = await axios.post("https://questify-ttdm.onrender.com/api/user/like",{
     id:question.question,
     user_id:question.user

    },{
      headers: {
        Authorization: `Bearer ${cookie}`,
      },
    });
    return res.data;
  // } catch (error) {
  //   console.error('Error fetching user:', error);
  //   throw error;
  // }
});

const findserviceslice = createSlice({
  name: 'service',
  initialState,
  extraReducers: (builder) => {
    builder
    //   .addCase(findService.pending, (state) => {
    //     state.loading = true;
    //     state.error = null; // Reset error when a new request starts
    //   })
    //   .addCase(findService.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.service = action.payload;
    //     state.error = null; // Reset error on success
    //   })
    //   .addCase(findService.rejected, (state, action) => {
    //     state.loading = true;
    //     state.service = [];
    //     state.error = action.error.message;
    //   })
      .addCase(setLike.fulfilled,(state,action)=>{
        state.likes=action.payload
      })
  },
});

export default findserviceslice.reducer;
