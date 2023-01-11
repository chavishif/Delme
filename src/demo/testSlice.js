
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { testCount } from './testAPI';

const initialState = {
  value: 0,
};

export const incrementAsync = createAsyncThunk(
  'test/testCount',
  async (amount) => {
    const response = await testCount(amount);
    return response.data;
  }
);


export const testSlice = createSlice({
  name: 'test',
  initialState,

   
  reducers: {
    increment: (state, action) => {
      console.log(action.payload.n1)
      // action.payload
      // state.value += 3;
      state.value = +action.payload.n1 + +action.payload.n2
    },
 
  },
  
  extraReducers: (builder) => {
  
    builder
   
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      });
  },
});

export const { increment } = testSlice.actions;

export const selectCount = (state) => state.test.value;
export const selectStatus = (state) => state.test.status;



export default testSlice.reducer;
