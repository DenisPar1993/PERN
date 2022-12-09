import React from 'react'

const Todo = ({name,id}) => {
  return (
    <div className='d-flex
                     ml-5 mr-5
                    justify-content-between
                    mt-5 border border-success
                    align-items-center
                     p-2'>
        <div>{name}</div>
        <div>
         <button className='btn btn-warning' style={{marginRight:"20px"}}>Edit</button>
         <button className='btn btn-danger'>Delete</button>
         </div>
    </div>
  )
}

export default Todo