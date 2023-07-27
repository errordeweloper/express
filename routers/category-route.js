const express = require('express')
const categoryRoute = express.Router()

categoryRoute.post('/', (req,res)=> res.send('Category address. POST method'))
categoryRoute.get('/pig', (req,res)=> res.send('Category address. GET method, pig page'))
categoryRoute.put('/', (req,res)=> res.send('Category address. PUT method'))
categoryRoute.delete('/', (req,res)=> res.send('Category address. DELETE method'))

module.exports = categoryRoute