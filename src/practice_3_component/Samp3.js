import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setColor, selectColor
} from './sampSlice';


export function Samp3() {
  const color = useSelector(selectColor);
  const dispatch = useDispatch();

  return (
    <div >
      <div style={{ backgroundColor: color }}>
        <h1>{color}</h1>
          
          <input type="radio" name="color" value="red" checked={color === 'red'} 
          onChange={e => dispatch(setColor(e.target.value))} />
          <label htmlFor="red">red</label>

          <input type="radio" name="color" value="green" checked={color === 'green'} 
          onChange={e => dispatch(setColor(e.target.value))} />
          <label htmlFor="green">green</label>

          <input type="radio" name="color" value="blue" checked={color === 'blue'} 
          onChange={e => dispatch(setColor(e.target.value))} />
          <label htmlFor="blue">blue</label>


      </div>
    </div>
  );
}
