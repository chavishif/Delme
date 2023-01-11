import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllProducts } from './productsAPI';

const initialState = {
  color: "yellow",
  aaa:"bbbb",
  array_products : []
};
export const getAllProductsAsync = createAsyncThunk(
  'products/getAllProducts',
  async (amount) => {
    const response = await getAllProducts(amount);
    return response.data;
  }
);

export const productsSlice = createSlice({
  name: 'products',
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
   
      .addCase(getAllProductsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.array_products += action.payload;
      });
  },
});

export const { increment ,setColor} = productsSlice.actions;
export const selectColor = (state) => state.products.color;
export const selectProd = (state) => state.products.array_products
export default productsSlice.reducer;
