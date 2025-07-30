import express, { Router } from 'express'
import { menu_items } from '../controller/menucontroller.js'

export const items = express.Router()

items.post('/menu',menu_items)