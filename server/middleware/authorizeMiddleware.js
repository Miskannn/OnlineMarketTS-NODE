import jwt from "jsonwebtoken"

export default (req,res,next) => {
     if(req.method === 'OPTIONS')
       next()
    
     try {
        const jwtToken = req.headers.authorization.split(' ')[1] 
        if(!jwtToken){
            return res.status(401).json({message: 'User is not authorised'})
        }
        const decodedToken = jwt.verify(jwtToken,process.env.SECRET)
        req.user = decodedToken;
        next();
     } catch (error) {
         res.status(401).json({message: "User is not authorised"})
     }
}