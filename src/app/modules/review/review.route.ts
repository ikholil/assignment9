import express from 'express'
import { ENUM_USER_ROLE } from '../../../enums/user'
import auth from '../../middlewares/auth'
import { reviewController } from './review.controller'

const router = express.Router()

router.post('/create-review', auth(ENUM_USER_ROLE.CUSTOMER), reviewController.createReview)
router.patch('/:id', auth(ENUM_USER_ROLE.CUSTOMER), reviewController.updateReview)
router.delete('/:id', auth(ENUM_USER_ROLE.CUSTOMER), reviewController.deleteReview)

export const reviewRouter = router  