import jwt from 'jsonwebtoken'

export default role => {
    return function (req, res, next) {
        if (req.method === "OPTIONS") 
            next()
        
        try {
            const token = req.headers.authorization.split(' ')[1]
            if (!token) {
                return res.status(401).json({message: "Not authorised"})
            }
            const decoded = jwt.verify(token, process.env.SECRET)
            if (decoded.role !== role) {
                return res.status(403).json({message: "You are not admin"})
            }
            req.user = decoded;
            next()
        } catch (e) {
            res.status(401).json({message: "Не авторизован"})
        }
    };
}