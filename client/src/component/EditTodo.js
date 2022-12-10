import React, { useContext, useState } from 'react'
import { TodoState } from '../state'

const EditTodo = ({changeModal,updateTodo}) => {
const cont=useContext(TodoState)
const [value,setValue]=useState(cont.value)
const reqUpdate=()=>{
  updateTodo(cont.id,{name:value})
  changeModal(false)
}
  return (
    <div className='back'>
        <div className="mode">
            <input type="text"  className='input' onChange={(e)=>setValue(e.target.value)} value={value}/>
            <div className='button-container'>
                <button className='btn btn-warning' onClick={reqUpdate}>Edit</button>
                <button className='btn btn-danger' onClick={()=>changeModal(false)}>Close</button>
            </div>
        </div>
    </div>
  )
}

export default EditTodo