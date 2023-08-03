const express = require('express')
const jwt = require('jsonwebtoken')
const authRoute = express.Router()

authRoute.post('/register/user', (req,res)=>{
    try{
        const {username, password} = req.body
    if(username != 'user1'){
        throw new Error(`Username: ${username} already taken`)
    }
    res.json({succes: true, error: null, message: {username, password}})
    } catch (error){
        res
            .status(400)
            .json({succes: false, error: error, message: error.message})
    }
});

authRoute.post('/register/moderator', (req,res)=>{
    try{
        const {username, password} = req.body
        if(username != 'moderator' || password != 'moderator1'){
            throw new Error(`Wrong username or password`)
        }
        const accessTokenSecret = process.env.MODERATOR_ACCES_TOKEN_SECRET;
        const refreshTokenSecret = process.env.MODERATOR_REFRESH_TOKEN_SECRET;
        const accesToken = jwt.sign({username, role: "moderator"}, accessTokenSecret, {
            expiresIn:"120s"
        })
        const refreshToken = jwt.sign(
            {username, role: "moderator" },
            refreshTokenSecret,
            {expiresIn: "20m"}
        )
        res.send({succes: true, error: null, data: {accesToken, refreshToken}}) 
    }catch (error){
        res.send({succes:false,error, message: error.message})
    }
})

authRoute.post('/register/admin', (req,res)=>{
    try{
        const {username, password} = req.body
        if(username != 'admin' || password != 'admin7'){
            throw new Error(`Wrong username or password`)
        }
        const accessTokenSecret = process.env.ADMIN_ACCES_TOKEN_SECRET;
        const refreshTokenSecret = process.env.ADMIN_REFRESH_TOKEN_SECRET;
        const accesToken = jwt.sign({username, role: "admin"}, accessTokenSecret, {
            expiresIn:"120s"
        })
        const refreshToken = jwt.sign(
            {username, role: "admin" },
            refreshTokenSecret,
            {expiresIn: "20m"}
        )
        res.send({succes: true, error: null, data: {accesToken, refreshToken}}) 
    }catch (error){
        res.send({succes:false,error, message: error.message})
    }
})

authRoute.post('/sign-in/user', (req,res)=>{
    try{
        const {username, password} = req.body
        if(username != 'user1' || password != 'user1'){
            throw new Error(`Wrong username or password`)
        }
        const accessTokenSecret = process.env.USER_ACCES_TOKEN_SECRET;
        const refreshTokenSecret = process.env.USER_REFRESH_TOKEN_SECRET;
        const accesToken = jwt.sign({username, role: "user"}, accessTokenSecret, {
            expiresIn:"120s"
        })
        const refreshToken = jwt.sign(
            {username, role: "user" },
            refreshTokenSecret,
            {expiresIn: "20m"}
        )
        res.send({succes: true, error: null, data: {accesToken, refreshToken}}) 
    }catch (error){
        res.send({succes:false,error, message: error.message})
    }
    
})

module.exports = authRoute