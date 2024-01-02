import express from 'express'
import { ENUM_USER_ROLE } from '../../../enums/user'
import auth from '../../middlewares/auth'
import validateRequest from '../../middlewares/validateRequest'
import { FaqController } from './faq.controller'
import { faqValidation } from './faq.validation'

const router = express.Router()

router.post('/create-faq', validateRequest(faqValidation.create), auth(ENUM_USER_ROLE.ADMIN), FaqController.createFaq)
router.get('/', FaqController.getAllFaq)
router.patch('/:id', validateRequest(faqValidation.update), auth(ENUM_USER_ROLE.ADMIN), FaqController.updateFaq)
router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), FaqController.deleteFaq)

export const faqRouter = router 