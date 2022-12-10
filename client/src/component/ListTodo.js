import React, { useContext, useEffect, useState } from 'react'
import { TodoState } from '../state'
import EditTodo from './EditTodo'
import Todo from './Todo'

const ListTodo = () => {
    const cont = useContext(TodoState)
    const [todos,setTodos]=useState([])
    const [modal,setModal]=useState(false)
    const [name,setName]=useState('')
   const reqForm=(e)=>{
        e.preventDefault()
        if(!name)return
        const body={name}
        fetch('http://localhost:5000/todos',{
            method:"POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(body)
        }).then(data=>getTodos()).catch(err=>console.error(err))
   }

    const getTodos = async()=>{
       const response = await fetch('http://localhost:5000/todos')
       const data = await response.json()
       cont.todos=data
       setTodos(data);
    }
    const changeModal=(value)=>{
        setModal(value)
    }
    const updateTodo = async (id,body)=>{
        try {
            const response = await fetch(`http://localhost:5000/todo/${id}`,{
                method:"PUT",
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(body)
            })
           const data= todos.map(item=>{
            if(item.todo_id===id){
                item.name=body.name
            }
            return item
           })
           cont.todos=data
           setTodos(data)
        } catch (error) {
            console.log(error);
        }
      
    }
    const deleteTodos= async(id)=>{
        try {
            const response = await fetch(`http://localhost:5000/todo/${id}`,{
                method:"DELETE"
            })
            const data = todos.filter(item=>{
                return item.todo_id !== id
            })
            cont.todos=data
            setTodos(data)
        } catch (error) {
           console.log(error); 
        }
      
    }
    useEffect(()=>{
        getTodos()
    },[cont.createTodo])
  return (
    
    <>
    <div className='text-center'>
    <h1 className='mt-5'>Pern todo</h1>
    <form onSubmit={reqForm} className='mt-5 d-flex justify-content-center'>
        <input  
        value={name}
        onChange={e=>setName(e.target.value)}
        className='form-control' 
        style={{width:"60%"}} 
        type="text" />
        <button className='btn btn-success'>Add</button>
    </form>
    </div>
    {modal&&<EditTodo 
    updateTodo={updateTodo}
    changeModal={changeModal}/>}
    {todos.length && todos.map(todo=>{
        return(
            <Todo 
            changeModal={changeModal}
              deleteTodos={deleteTodos}
              key={todo.todo_id}
               id={todo.todo_id}
                name={todo.name} />
        )
    })}
    </>
  )
}

export default ListTodo