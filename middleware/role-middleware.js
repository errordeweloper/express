function roleMiddleware(...args) {
    return (req, res, next)=>{
    const role = req.role
    if (!args.includes(role)) {
        return res.status(403).json({message: 'forbidden'})
    } 
    next()
    }
}


module.exports = roleMiddleware