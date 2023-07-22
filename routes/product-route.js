const express = require("express");
const productRoute = express.Router()

productRoute.post('/', (req,res)=> res.send('Product route. POST method'))
productRoute.get('/', (req,res)=> res.send('Product route. GET method'))
productRoute.put('/', (req,res)=> res.send('Product route. PUT method'))
productRoute.delete('/', (req,res)=> res.send('Product route. DELETE method'))

module.exports = productRoute