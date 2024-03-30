import React, { useEffect, useState } from 'react'

const Type = () => {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    // // Type 1: Execute on render and all state changes
    // useEffect(() => {
    //     console.log("Use Effect executing!");
    // })

    // // Type 2: Execute on render and all depency state changes
    // useEffect(() => {
    //     console.log("Use Effect executing!");
    // }, [counter1])

    // Type 3: Execute on render 
    useEffect(() => {
        console.log("Use Effect executing!");
    }, [])


    return (
        <>
            <h1>{counter1}</h1>
            <h1>{counter2}</h1>

            <button onClick={() => setCounter1(counter1 + 1)}>Counter1</button>
            <button onClick={() => setCounter2(counter2 + 1)}>Counter2</button>
        </>
    )
}

export default Type
