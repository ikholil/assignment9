import express from 'express'
import { ENUM_USER_ROLE } from '../../../enums/user'
import auth from '../../middlewares/auth'
import { bookingController } from './booking.controller'

const router = express.Router()

router.post('/create-booking', auth(ENUM_USER_ROLE.CUSTOMER), bookingController.createBooking)
router.get('/', bookingController.getAllBooking)
router.get('/:id', bookingController.getSingleBooking)
router.patch('/:id', auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER, ENUM_USER_ROLE.SUPER_ADMIN), bookingController.updateBooking)
router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER, ENUM_USER_ROLE.SUPER_ADMIN), bookingController.deleteBooking)

export const bookingRouter = router