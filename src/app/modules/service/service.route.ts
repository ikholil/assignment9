import express from 'express'
import { ENUM_USER_ROLE } from '../../../enums/user'
import auth from '../../middlewares/auth'
import { serviceController } from './service.controller'

const router = express.Router()

router.post('/create-service', auth(ENUM_USER_ROLE.ADMIN), serviceController.createService)
router.get('/', serviceController.getAllService)
router.get('/:id', serviceController.getSingleService)
// router.get('/category/:categoryId', serviceController.getServicesByCategoryId)
router.patch('/:id', auth(ENUM_USER_ROLE.ADMIN), serviceController.updateService)
router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), serviceController.deleteService)

export const serviceRouter = router