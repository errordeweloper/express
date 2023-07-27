function authMiddleware(req, res, next) {
    const{username, password} = req.body
    if (!username || !password) {
        throw new Error('User and password must be provided')
    }
    if(username != 'datamarkaz'){
        throw new Error(`User with username: ${username} not found`)
    }
    if(password != 'datamarkaz'){
        throw new Error(`Wrong password`)
    }
    next()
}

module.exports = authMiddleware