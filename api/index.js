import express from 'express'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import cors from 'cors'
import { route } from '../backend/routes/user_routes.js'
import { items } from '../backend/routes/menu_routes.js'
import { cart_route } from '../backend/routes/cart_routes.js'
import { router } from '../backend/routes/restaurant_routes.js'
export const app = express()
app.use(cors({
  origin: '*'
}));
app.use(express.json())
app.use(morgan('dev'))
app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use('/api/v1/user',router)
app.use('/api/v1/router',route)
app.use('/api/v1/items',items)
app.use('/api/v1/cart',cart_route)