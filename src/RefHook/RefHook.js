// useRef -> No Re-render,   useState -> re-render 

import React, { useRef, useState } from "react";

export default function RefHook() {
    const [counter, setCounter] = useState(0);
    const counterRef = useRef(0);
    
    // useState
    const handleClick = () => {
      setCounter(counter + 1);
    };
  
    // useRef
    const handleRef = () => {
      counterRef.current++;
    };
    console.log('re-rendering')

    return (
      <div className="container space-y-5 my-20">
        <h1 className="font-bold text-lg">{`Counter [useState] is ${counter}`}</h1>
        <h1 className="font-bold text-lg">{`Ref [useRef] is ${counterRef.current}`}</h1>
  
        <button
          className="bg-blue-500 py-2 px-4 rounded text-white"
          onClick={handleClick}
        >
          Increment Counter
        </button>
        <button
          className="bg-blue-500 py-2 px-4 rounded text-white mx-5"
          onClick={handleRef}
        >
          Increment Ref
        </button>
      </div>
    );
}



