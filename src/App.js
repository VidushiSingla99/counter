import React from 'react'
import './App.css';
import { useState } from 'react';

export default function App() {

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

  return (
    <div>
      <div className="d-flex justify-content-center mt-5">
      <img src="https://cdn.pixabay.com/photo/2014/04/02/10/55/plus-304947_1280.png" className="w-10 mx-5" alt="plus-sign" onClick={increaseCounter}></img>
    <img src="https://cdn4.iconfinder.com/data/icons/mathematical-symbols/43/Minus_Sign-512.png"  className="w-10 mx-5" alt="minus-sign" onClick={decreaseCounter}></img>
      </div>
      <h1 className="d-flex justify-content-center">
        {counter}
      </h1>
      <div className="d-flex justify-content-center">
      <button className="btn btn-danger mt-5" onClick={resetCounter}>RESET</button>
      </div>

    </div>
  )
}
