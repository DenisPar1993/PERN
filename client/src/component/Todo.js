import React from 'react'
import { TodoState } from '../state'
import { useContext } from 'react'

const Todo = ({name,id,deleteTodos,changeModal}) => {
  const cont=useContext(TodoState)
    const deleteItem =()=>{
        deleteTodos(id)
    }
    const editModal=()=>{
        cont.id= id
        cont.value=name
        changeModal(true)
    }
  return (
    <div className='d-flex
                     ml-5 mr-5
                    justify-content-between
                    mt-5 border border-success
                    align-items-center
                     p-2'>
        <div>{name}</div>
        <div>
         <button className='btn btn-warning' onClick={editModal} style={{marginRight:"20px"}}>Edit</button>
         <button className='btn btn-danger' onClick={deleteItem}>Delete</button>
         </div>
    </div>
  )
}

export default Todo