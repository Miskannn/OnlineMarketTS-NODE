import ApiError from "../Errors/ApiError.js"
import bcrypt from "bcrypt"
import {User,Basket} from "../models/models.js"
import jwt from "jsonwebtoken"

class UserController{

     static generateJwt = (id, email, role) =>  jwt.sign({id, email, role},process.env.SECRET,{expiresIn: '1h'})

     registration = async(req,res,next) => {
          const {email, password, role} = req.body
        if (!email || !password) {
            return next(ApiError.badRequest('Некорректный email или password'))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 7)
        const user = await User.create({email, role, password: hashPassword})
        const basket = await Basket.create({userId: user.id})
        const token = UserController.generateJwt(user.id, user.email, user.role)
        return res.json({token})
     }

     login = async(req,res,next) => {
          let {email,password} = req.body;
          const user = await User.findOne({where: {email}})
          if(!user){
               return next(ApiError.internal('User does not finded'))
          }
          let comPassword = bcrypt.compareSync(password,user.password)
          if(!comPassword){
               return next(ApiError.internal('Password is wrong'))
          }
          let jwtToken = UserController.generateJwt(user.id,user.email,user.role)
          return res.json({jwtToken})
     }

     check = async (req,res) =>{  
          let {user} = req;   
          const jwtToken = UserController.generateJwt(user.id,user.email,user.role)
          return res.json({jwtToken})
     }
}

export default new UserController()