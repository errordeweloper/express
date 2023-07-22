const express = require("express")
const {config} =require('dotenv')
const productRoute = require('./routes/product-route')
const categoryRoute = require('./routes/category-route')
config()

const port = process.env.PORT || 4000

const app = express()
app.use('/product', productRoute)
app.use('/category', categoryRoute)

app.post('/', (req,res)=> res.send('Home address. POST method'))
app.get('/', (req,res)=> res.send('Home address. GET method'))
app.put('/', (req,res)=> res.send('Home address. PUT method'))
app.delete('/', (req,res)=> res.send('Home address. DELETE method'))

app.listen(port, () => console.log(`Server listening on localhost:${port}`))