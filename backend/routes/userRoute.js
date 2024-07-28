import express from 'express'
import { loginUser, signupUser } from '../controllers/userController.js'

const userRouter = express.Router()

userRouter.post('/signup', signupUser)
userRouter.post('/login', loginUser)

export default userRouter;