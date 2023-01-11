import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import {selectAR} from '../practice_3_component/sampSlice';
import {
   getAllProductsAsync, selectProd
} from './productsSlice';


export function Products() {
  const products = useSelector(selectProd);
  const dispatch = useDispatch();
 

  return (
    <div >
    
      cgncgng
        <button onClick={()=>dispatch(getAllProductsAsync())}>Get products</button>
 
    </div>
  );
}
