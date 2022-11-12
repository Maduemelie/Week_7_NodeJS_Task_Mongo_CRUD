const express = require('express')
const app = express()
const dbConnect = require('./configDB/dbConnect')
const todoRoutes = require('./route/todoRoute') 

const PORT = process.env.PORT || 7000


app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/todo', todoRoutes)
dbConnect()

app.get('/', (req, res) => {
    res.json("Todos")
})

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})