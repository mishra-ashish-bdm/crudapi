import express from 'express'
import { CreateUser, deleteUser, getUser, updateUser } from '../controllers/userController.js'
const UserRouter = express.Router()


UserRouter.post('/createuser', CreateUser)
UserRouter.patch('/updateuser', updateUser)
UserRouter.get('/getuser/:id', getUser)
UserRouter.delete('/deluser/:id', deleteUser)

export default UserRouter