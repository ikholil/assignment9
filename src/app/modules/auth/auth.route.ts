import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { authController } from './auth.controller'
import { loginZodSchema, signUpZodSchema } from './auth.validation'
const router = express.Router()

router.post("/signup", validateRequest(signUpZodSchema), authController.signUp)
router.post("/signin", validateRequest(loginZodSchema), authController.signIn)

export const AuthRouter = router