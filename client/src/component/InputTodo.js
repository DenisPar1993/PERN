import React from 'react'
import { useState } from 'react'

const InputTodo = () => {
    const [name,setName]=useState('')
   const reqForm=(e)=>{
        e.preventDefault()
        if(!name)return
        const body={name}
        fetch('http://localhost:5000/todos',{
            method:"POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(body)
        }).then(data=>console.log(data)).catch(err=>console.error(err))
   }

  return (
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
    
  )
}

export default InputTodo