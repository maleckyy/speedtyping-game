import logo from './logo.svg';
import './App.css';
import React from "react"
import wordGame from './comp/wordGame';
import {useState, useEffect, useRef} from "react"





function App() {
  
  const {areaBoxRef, text,updateTextarea,isStarted,time,startGame,words} = wordGame(30);
  

  return (
    <div className="App">

      <h1>How fast do you type?</h1>

      <textarea
      ref={areaBoxRef}
      name='text'
      value={text}
      onChange={updateTextarea}
      disabled={!isStarted}

       />

      <h4>time remaning: {time}</h4>

      <button
      disabled={isStarted}
      onClick={startGame}
      >start</button>

      <h1>word count: {words} </h1>


    </div>
  );
}

export default App;
