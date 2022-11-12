const express = require('express')
const todoRouter = express.Router()
const todoController = require('../controller/todoController')

todoRouter.route('/')
           .get(todoController.getAllTodo)
           .post(todoController.createTodo)

todoRouter.route('/:id')
          .put(todoController.updateTodo)
          .delete(todoController.deleteTodo)




 module.exports= todoRouter          