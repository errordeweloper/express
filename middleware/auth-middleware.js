const jwt = require('jsonwebtoken')

function authMiddleware(req, res, next) {
    try {
        const token = req.headers?.authorization?.split(' ')[1];
        if (!token) {
            res.status(400)
            throw new Error('JWT must be provided')
        }
        const accessTokenSecret = process.env.ACCES_TOKEN_SECRET
        const decryptedToken = jwt.verify(token,accessTokenSecret)
        const {username, role} = decryptedToken
        req.username = username
        req.role = role
        next()
    } catch (error) {
        res.send({succes: false, message: error.message})
    }
}

module.exports = authMiddleware