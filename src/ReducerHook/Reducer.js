import React, { useReducer } from 'react'

// Reducer
const transactionReducer = (state, action) =>{
    switch (action.type) {
        case 'WITHDRAW':
            return state - action.payload
        case 'DEPOSIT':
            return state + action.payload
        default:
            return state
    }
}


export default function Reducer() {

    const withdraw = (amount) =>{
        dispatch({type:'WITHDRAW', payload:amount})
    }
    const deposit = (amount) =>{
        dispatch({type:'DEPOSIT', payload:amount})
    }

    const [state, dispatch] = useReducer(transactionReducer, 1000)
  return (
    <>
      <h4> {`Balance is ${state}`}</h4>
      <button onClick={() =>withdraw(500)}> withdraw</button>
      <button onClick={() =>deposit(500)}> deposit</button>
    </>
  )
}
