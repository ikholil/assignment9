import express from 'express'
import { ENUM_USER_ROLE } from '../../../enums/user'
import auth from '../../middlewares/auth'
import { FaqController } from './faq.controller'

const router = express.Router()

router.post('/create-faq', auth(ENUM_USER_ROLE.ADMIN), FaqController.createFaq)
router.get('/', FaqController.getAllFaq)
router.patch('/:id', auth(ENUM_USER_ROLE.ADMIN), FaqController.updateFaq)
router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), FaqController.deleteFaq)

export const faqRouter = router 