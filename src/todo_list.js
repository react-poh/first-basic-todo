import React from 'react'

export default function TodoList (props) {
  return (
    <ul>
      {props.visibleTodos.map((todo) => {
        return (
          <li key={todo.id}>
            {todo.text}
          </li>       
        )
      })} 
    </ul>
  )
}
