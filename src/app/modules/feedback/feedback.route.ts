import express from 'express'
import { ENUM_USER_ROLE } from '../../../enums/user'
import auth from '../../middlewares/auth'
import validateRequest from '../../middlewares/validateRequest'
import { feedbackController } from './feedback.controller'
import { feedbackValidation } from './feedback.validation'

const router = express.Router()

router.post('/create-feedback', validateRequest(feedbackValidation.create), auth(ENUM_USER_ROLE.CUSTOMER), feedbackController.createFeedback)
router.get('/', auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN), feedbackController.getAllFeedback)
router.get('/:id', auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN), feedbackController.getSingleFeedback)


export const feedbackRouter = router  