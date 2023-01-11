import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
   setColor , selectColor
} from './sampSlice';


export function Samp() {
  const color = useSelector(selectColor);
  const dispatch = useDispatch();
 

  return (
    <div >
      <div style={{backgroundColor : color }}>
      <h1>{color}</h1>
      
        <button onClick={()=>dispatch(setColor("red"))}>red</button>
        <button onClick={()=>dispatch(setColor("blue"))}>blue</button>
        <button onClick={()=>dispatch(setColor("green"))}>green</button>
      
      
      </div>
    </div>
  );
}
