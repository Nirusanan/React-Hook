import React, { useState } from 'react'

// This is same as Reducer.js
export default function Amount() {

    const [amount, setAmount] = useState(1000)

    const withdraw = (amount) =>{
        setAmount((prev)=> prev-amount)
    }
    const deposit = (amount) =>{
        setAmount((prev)=> prev+amount)
    }


  return (
    <>
      <h4> {`Balance is ${amount}`}</h4>
      <button onClick={() =>withdraw(500)}> withdraw</button>
      <button onClick={() =>deposit(500)}> deposit</button>
    </>
  )
}
