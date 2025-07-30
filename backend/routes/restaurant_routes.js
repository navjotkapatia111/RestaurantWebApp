import express from 'express'
import { createRestaurant, getMenu, getRestaurant, updateRestaurant } from '../controller/restaurantcontroller.js'

export const router = express.Router()

router.post('/create',createRestaurant)
router.get('/get',getRestaurant)
router.put('/update',updateRestaurant)
router.get('/menu',getMenu)