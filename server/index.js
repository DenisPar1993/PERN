const express= require('express')
const cors =require('cors')


const pool= require('./db.js')

const app=express()

app.use(cors())
app.use(express.json())

//routes
//create a task

app.post('/todos',async(req,res)=>{
    try {
        const {name}=req.body
    
        const newtask = await pool.query('insert into todo (name) values ($1) returning *',[name])
        res.json(newtask)
    } catch (error) {
        console.log(error);
    }
})


//get a task

app.get('/todo/:id',async(req,res)=>{
    try {
        const {id}= req.params
        const todo= await pool.query('select * from todo where todo_id =$1',[id])
        res.json(todo.rows)
    } catch (error) {
        console.error(error)
    }
})


//get all tasks
app.get('/todos',async (req,res)=>{
    try {
        const allTodos = await pool.query('select * from todo')
        res.json(allTodos.rows)
    } catch (error) {
        console.error(error)
    }
})


//update a task

app.put('/todo/:id',async (req,res)=>{
    try {
        const {id}=req.params
        const {name}=req.body
        console.log(id,name);
        const todo = await pool.query('update todo SET name = $1 where todo_id = $2',[name,id])
        res.json("Todo was updated")
    } catch (error) {
        console.error(error)
    }
  

})


//delete a task

app.delete('/todo/:id',async(req,res)=>{
    try {
       const {id}=req.params
       await pool.query('DELETE FROM todo WHERE todo_id=$1',[id]) 
       res.json('todo id was deleted')
    } catch (error) {
        console.error(error)
    }
})


app.listen(5000,async()=>{
    console.log("server started on port 5000");
})