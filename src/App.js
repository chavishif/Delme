import React from 'react';
import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
// import { Test } from './demo/Test';
// import Display from './demo/Display';
import { Samp } from './practice_3_component/Samp';
import { Samp2 } from './practice_3_component/Samp2';
import { Samp3 } from './practice_3_component/Samp3';
import { Products } from './products/Products';

function App() {
  return (
    <div style={{width:'100%'}}>
      {/* <Counter></Counter> */}
      {/* <Test></Test>
      <Display/> */}
      {/* <Samp/>
      <Samp2/>
      <Samp3/> */}
      <Products/>
    </div>
  );
}

export default App;
