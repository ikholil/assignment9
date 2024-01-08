import express from 'express'
import { ENUM_USER_ROLE } from '../../../enums/user'
import auth from '../../middlewares/auth'
import validateRequest from '../../middlewares/validateRequest'
import { bookingController } from './booking.controller'
import { bookingValidation } from './booking.validation'

const router = express.Router()

router.post('/create-booking', validateRequest(bookingValidation.create), auth(ENUM_USER_ROLE.CUSTOMER), bookingController.createBooking)
router.get('/my-bookings', auth(ENUM_USER_ROLE.CUSTOMER), bookingController.getUserBookings)
router.get('/', auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN), bookingController.getAllBooking)
router.get('/:id', bookingController.getSingleBooking)
router.patch('/:id', auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER, ENUM_USER_ROLE.SUPER_ADMIN), bookingController.updateBooking)
router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER, ENUM_USER_ROLE.SUPER_ADMIN), bookingController.deleteBooking)

export const bookingRouter = router