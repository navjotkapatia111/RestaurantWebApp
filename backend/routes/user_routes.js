import express from 'express'
import { forgotpassword, get, login, logout, put, register, resetpassword } from '../controller/usercontroller.js'
import { verifytoken } from '../middleware/jwauth.js'
export const route = express.Router() 
route.post('/register',register)
route.get('/get',get)
route.put('/put',put)
route.post('/login',login)
route.get('/logout',logout)
route.post('/forgot',forgotpassword)
route.post('/reset',verifytoken,resetpassword)