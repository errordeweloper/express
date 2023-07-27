const express = require("express")
const {config} =require('dotenv')
const productRoute = require('./routers/product-route')
const categoryRoute = require('./routers/category-route')
config()

const port = process.env.PORT || 4000

const app = express()
app.use(express.json())

app.use('/product', productRoute)
app.use('/category', categoryRoute)
app.post('/:id', (req, res)=>{
    res.send({id: req.params.id})
})

app.post('/', (req,res)=> res.send('Home address. POST method'))
app.get('/', (req,res)=> res.send('Home address. GET method'))
app.put('/', (req,res)=> res.send('Home address. PUT method'))
app.delete('/', (req,res)=> res.send('Home address. DELETE method'))

app.listen(port, () => console.log(`Server listening on localhost:${port}`))