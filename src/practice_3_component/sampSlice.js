
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { sampCount } from './sampAPI';

const initialState = {
  color: "yellow",array_products : []
};
export const incrementAsync = createAsyncThunk(
  'samp/sampCount',
  async (amount) => {
    const response = await sampCount(amount);
    return response.data;
  }
);

export const sampSlice = createSlice({
  name: 'samp',
  initialState,
   
  reducers: {
    increment: (state, action) => {
      console.log(action.payload.n1)
      state.color = +action.payload.n1 + +action.payload.n2
    },
   
    setColor: (state, action) => {
      console.log(action.payload)
      state.color = action.payload;
  }},
  
  extraReducers: (builder) => {
  
    builder
   
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.color += action.payload;
      });
  },
});

export const { increment ,setColor} = sampSlice.actions;
export const selectColor = (state) => state.samp.color;
export const selectAR = (state) => state.samp.array_products;
export default sampSlice.reducer;
