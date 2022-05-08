import React from 'react'
import './App.css';
import { useState } from 'react';

export default function App() {

const [count, increaseCount]=useState(0);
const [counter, setCounter]=useState(0);

const increaseCounter=()=>{
setCounter( c=>c+1);
}
const decreaseCounter=()=>{
  setCounter(c=>c-1);
  }

const resetCounter=()=>{
  setCounter(c=>c=0);
}

const setCount=()=>{
  increaseCount(cs=>cs+1);
}

React.useEffect(() => {
  // Update the document title using the browser API
  document.title = `You clicked ${count} times`;
});


  return (
    <div>
      <div className="d-flex justify-content-center mt-5">
      <img src="https://cdn.pixabay.com/photo/2014/04/02/10/55/plus-304947_1280.png" className="w-10 mx-5" alt="plus-sign" onClick={()=>{increaseCounter(); setCount();}}></img>
    <img src="https://cdn4.iconfinder.com/data/icons/mathematical-symbols/43/Minus_Sign-512.png"  className="w-10 mx-5" alt="minus-sign" onClick={()=>{decreaseCounter(); setCount();}}></img>
      </div>
      <h1 className="d-flex justify-content-center">
        {counter}
      </h1>
      <div className="d-flex justify-content-center align-items-baseline">
      <button className="btn btn-danger mt-5 mx-5" onClick={()=> {resetCounter(); setCount();}}>RESET</button>
      <h6>Check the tab for total number of clicks</h6>
      </div>

    </div>
  )
}
