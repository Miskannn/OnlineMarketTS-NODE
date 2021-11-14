import ApiError from '../Errors/ApiError.js';

export default (err, req, res, next) => 
err instanceof ApiError 
?res.status(err.status).json({message: err.message})
:res.status(500).json({message: "Непредвиденная ошибка!"})
    


