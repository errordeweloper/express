const express = require("express");
const categoryRoute = express.Router()

categoryRoute.post('/', (req,res)=> res.send('Category route. POST method'))
categoryRoute.get('/', (req,res)=> res.send('Category route. GET method'))
categoryRoute.put('/', (req,res)=> res.send('Category route. PUT method'))
categoryRoute.delete('/', (req,res)=> res.send('Category route. DELETE method'))

module.exports = categoryRoute