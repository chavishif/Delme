import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  increment, selectCount
} from '../demo/testSlice';


export function Test() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [n1, setn1] = useState(0)
  const [n2, setn2] = useState(0)

  return (
    <div>
      <div>
        <input onChange={(e)=>setn1( e.target.value)}></input>
        <input onChange={(e)=>setn2( e.target.value)}></input>
        <button onClick={() => dispatch(increment({n1 , n2}))} > + </button>
        <span >{count}</span>
      </div>
    </div>
  );
}
