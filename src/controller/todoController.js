const Todos = require("../model/todoModel")




//Create a Todo

const createTodo = async(req, res) =>{
    try {
        const {title, description} = req.body
        const newTodo = new Todos({
            title,
            description
        })
        const todo = await newTodo.save()
        res.status(200).json({ message: "Todo created",todo})
    } catch (error) {
        res.status(500).json(error.message)
        
    }
}

//Update a todo
const updateTodo = async (req, res) =>{
    try {
        const id = req.params.id
        const { title, description} = req.body

        const updatedTodo = await Todos.findByIdAndUpdate(id, {title, description}, {new: true})
        await updatedTodo.save()
        res.status(200).json({message: "updated sucessfully", updatedTodo})
        
    } catch (error) {
         res.status(500).json(error.message)
        
    }
}

// Get all todos

const getAllTodo = async(req, res) =>{
    try {
        const todos = await Todos.find({})
        res.status(200).json(todos)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

//Delete todo
const deleteTodo = async (req, res) =>{
    try {
        const id = req.params.id
       

        const todoToDelete = await Todos.findByIdAndDelete(id)
        res.status(200).json({message: "deleted sucessfully"})
        
    } catch (error) {
         res.status(500).json(error.message)
        
    }
}


module.exports = {createTodo, updateTodo, getAllTodo, deleteTodo}