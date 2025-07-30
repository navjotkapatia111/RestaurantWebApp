import express, { Router } from 'express'
import { add_cart, delete_cart, get_cart } from '../controller/cartcontroller.js'

export const cart_route = express.Router()

cart_route.post('/add',add_cart)
cart_route.get('/get',get_cart)
cart_route.delete('/del',delete_cart)