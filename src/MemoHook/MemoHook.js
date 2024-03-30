//  When the state change, page has been re-loaded
import React, { useMemo, useState } from 'react'

export default function MemoHook() {
    const [count, setCount] = useState(0);
    const [todo, setTodo] = useState([]);

    

    const calculation = useMemo(() => expensiveCalculation(count), [count]);

    const increment = () => {
        setCount((prevcount) => prevcount +1 )
    };

    const addTodo = () => {
        setTodo((prevstate) => [...prevstate, "New todo"])
    };

  return (
    <div>
      <div>
        <h2>My Todo</h2>
        {todo.map( (todo, index) => {
            return <p key={index}> {todo} </p>
        })}
        <button onClick={addTodo}> Add Todo</button>
      </div>
      <hr/>

      <div>
      <h2>My Count</h2>
      <p>Count: {count} </p>
      <button onClick={increment}> Count+</button>

        <h2> Calculation</h2>
        {calculation}

      </div>
    </div>
  );
};


const expensiveCalculation = (num) => {
    console.log("Hello");
    for(let i=0; i<1000000; i++){
        num+=1;
    }
    return num;
}

