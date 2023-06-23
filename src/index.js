import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import UserRouter from './routes/userRoute.js'
const app = express()
app.use(express.json());
dotenv.config();
connectDB();
let PORT = process.env.PORT || 3000
app.use('/api',UserRouter)





app.listen(PORT,()=>{
    console.log(`server is up and running on port ${PORT}`);
})