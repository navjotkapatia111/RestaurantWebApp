import { user } from "../models/usermodel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import nodemailer from 'nodemailer'
const cookieoptions={
    secure:false,
    maxAge:24*7*60*60*1000,
    http:true
}
export const register = async(req,res)=>{
    try{
        const{firstname,password,email} = req.body
        
        if(!firstname || !password || !email){
         return   res.status(400).json({message:"All fields are required!!!"})
        }
        const exists = await user.findOne({email})
        console.log(exists,'===>>')
        if(exists){
          return  res.status(400).json({message:"This email is already exists"})
        }
        const response = await user.create({
            firstname,
            password:await bcrypt.hash(password,10),
            email
        })
        res.status(200).json({
            success:true,
            message:"You Successfully LoggedIn",
            response
        })
    }
    catch(error){
        console.log(error.message)
    }
}

export const get = async(req,res)=>{
    try{
        const id = req.query.id
        const response = await user.findById(id)

    if(!response){
        return res.status(400).json({message:'User not found'})
    }

    res.status(200).json({
        success:true,
        message:"Your data is:-",
        response
    })}
    catch(error){
        return console.log("Error Occurrred",error.message)
    }
}

export const put = async(req,res)=>{
    try{
        const {firstname,email} = req.body

        const updateuser = await user.findByIdAndUpdate({firstname,email},{new:true})
        console.log("....>>>",updateuser)
        res.status(200).json({
            success: true,
            message: "User updated successfully",
            data: updateuser
        })
    }
    catch(error){
        console.log("Error occurred",error.message)
    }
}

export const login = async(req,res)=>{
    try {
        const {email,password} = req.body
        if(!email || !password){
            res.status(400).json({message:"All fields are required"})
        }
        const find = await user.findOne({email}).select('+password')
        if(!find){
            res.status(400).json({message:"User not found"})
        }
        const ismatch = await bcrypt.compare(`${password}`,find.password)
        if(!ismatch){
            res.status(400).json({message:'Invalid credentials'})
        }
        let userdata = {
            email:find.email
        }
        const jwttoken = jwt.sign(userdata,"test",({expiresIn:'5000s'}))
        res.cookie('token',jwttoken,cookieoptions)

        return res.status(200).json({message:"User successfully loggedIn",userdata})
        
    } catch (error) {
        return console.log("Server Error ",error.message)
    }
}

export const logout = async(req,res)=>{
    try{
        res.cookie("token",{
        secure:true,
        http:true,
        maxAge:0
    })
    res.status(200).json({message:"User logged out successfully"})
    }
    catch(error){
        return console.log("Error Occured:- ",error)
    }
}

export const forgotpassword = async(req,res)=>{
    try {
        const {email}=req.body
        if(!email){
            res.status(400).json({message:"Email required"})
        }
        const findemail = await user.findOne({email})
        if(!findemail){
            res.status(400).json({message:"No user found"})
        }
        let founddata = {
            id:findemail.id,
            email:findemail.email
        }

        const resettoken = jwt.sign(founddata,"test",({expiresIn:"15m"}))
        const link = `http://localhost:1234/reset/${resettoken}`
        console.log("...>>>link",link)
        let transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
              user: 'navjotkapatia111@gmail.com',
              pass: 'ungx hzer gkzh rjme'
            }
          });
          const info = await transporter.sendMail({
            to: email,
            subject: 'Password Reset',
            html: `<p>Click <a href="${link}">here</a> to reset your password.</p>`
          });
          res.status(200).send({message:"Message Send",info})

    } catch (error) {
        return console.log("Error Occured:- ",error)
    }
}

export const resetpassword = async(req,res)=>{
    try{
        // const id = req.user.id
        // console.log(id)
        const { token, password } = req.body;
        if(!token){
           return res.status(400).json({message:"Id Missing"})
        }
        const decoded = jwt.verify(token,'test')
        const id = decoded.id

        const reset = await user.findByIdAndUpdate(id,{password: await bcrypt.hash(password,10)},{new:true})
        
        return res.status(200).json({
            success:true,
            message:'Password',
            reset
        })
    }
    catch(error){
        return console.log("Error occurred:-",error)
    }
}