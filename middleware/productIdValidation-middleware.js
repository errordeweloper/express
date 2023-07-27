function numMiddleware(req, res, next) {
    const idPost= Number(req.params.id)
    if (!idPost) {
        throw new Error('User and password must be provided')
    }
    if(typeof idPost !== 'number' || Number.isInteger(idPost) == false || 0>idPost || idPost>200){
        throw new Error(`butun son emas`)
    }
    next()
}

module.exports = numMiddleware