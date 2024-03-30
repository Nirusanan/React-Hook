import React from 'react'
import { useFetch } from './useFetch'

const UI = () => {
    const {data} = useFetch('https://jsonplaceholder.typicode.com/todos')
  return (
    <div>
      {data && data.map((todo) => {
        return <h3 key={todo.id}>{todo.title}</h3>
      }) }
    </div>
  )
}

export default UI
