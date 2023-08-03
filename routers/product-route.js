const express = require('express')
const authMiddleware = require('../middleware/auth-middleware')
const productIdValidation = require('../middleware/productIdValidation-middleware')
const productRoute = express.Router()

productRoute.post('/',authMiddleware, (req,res)=> res.send('butun son'))
productRoute.get('/', (req,res)=> res.send('Product address. GET method'))
productRoute.put('/', (req,res)=> res.send('Product address. PUT method'))
productRoute.delete('/', (req,res)=> res.send('Product address. DELETE method'))

module.exports = productRoute