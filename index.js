const express = require("express")
const jwt = require('jsonwebtoken')
const {config} =require('dotenv')
const productRoute = require('./routers/product-route')
const categoryRoute = require('./routers/category-route')
const authRoute = require('./routers/auth-route')
config()

const port = process.env.PORT || 4000

const app = express()
app.use(express.json())

app.use('/product', productRoute)
app.use('/category', categoryRoute)
app.use('/auth', authRoute)
app.post('/refresh', (req, res)=>{
    const {refreshToken} = req.body
    const accessTokenSecret = process.env.ACCES_TOKEN_SECRET;
    const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET;
    const {username, role} = jwt.verify(refreshToken, refreshTokenSecret)
    const accesToken = jwt.sign({username,role},accessTokenSecret, {
        expiresIn:"120s"
    })
    res.send({succes: true, error: null, data: {accesToken}}) 
})

app.post('/', (req,res)=> res.send('Home address. POST method'))
app.get('/', (req,res)=> res.send('Home address. GET method'))
app.put('/', (req,res)=> res.send('Home address. PUT method'))
app.delete('/', (req,res)=> res.send('Home address. DELETE method'))

app.listen(port, () => console.log(`Server listening on localhost:${port}`))