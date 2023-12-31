import express from 'express'
import { ENUM_USER_ROLE } from '../../../enums/user'
import auth from '../../middlewares/auth'
import { feedbackController } from './feedback.controller'

const router = express.Router()

router.post('/create-feedback', auth(ENUM_USER_ROLE.CUSTOMER), feedbackController.createFeedback)
router.get('/', auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN), feedbackController.getAllFeedback)
router.get('/:id', auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN), feedbackController.getSingleFeedback)


export const feedbackRouter = router  