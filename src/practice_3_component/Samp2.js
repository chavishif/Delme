import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
   setColor , selectColor
} from './sampSlice';


export function Samp2() {
  const color = useSelector(selectColor);
  const dispatch = useDispatch();
 

  return (
    <div >
      <div style={{backgroundColor : color }}>
      <h1>{color}</h1>
      
        <select value={color} onChange={e => dispatch(setColor(e.target.value))}>
            <option value={"red"}>red</option>
            <option value={"green"}>green</option>
            <option value={"blue"}>blue</option>
        </select>
      
      
      </div>
    </div>
  );
}
