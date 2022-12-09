import React, { useEffect, useState } from 'react'
import Todo from './Todo'

const ListTodo = () => {
    const [todos,setTodos]=useState([])
    const getTodos = async()=>{
       const response = await fetch('http://localhost:5000/todos')
       const data = await response.json()
       setTodos(data)
       console.log(data);
    }
    useEffect(()=>{
        getTodos()
    },[])
  return (
    <>
    {todos.length && todos.map(todo=>{
        return(
            <Todo key={todo.todo_id} id={todo.todo_id} name={todo.name} />
        )
    })}
    </>
  )
}

export default ListTodo