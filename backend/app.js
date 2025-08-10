import express from 'express'
import 'dotenv/config.js'
import { dbconnection } from './config/dbconnections.js'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import { router } from './routes/restaurant_routes.js'
import cors from 'cors'
import { route } from './routes/user_routes.js'
import { items } from './routes/menu_routes.js'
import { cart_route } from './routes/cart_routes.js'
export const app = express()
const cors = require('cors');
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
// app.use('/api/v1/mail',mail_route)
const port = process.env.PORT || 5000

app.listen(port,async()=>{
    await dbconnection()
    console.log(`Server is running at ${port}`)
})