import express from 'express'
import { ENUM_USER_ROLE } from '../../../enums/user'
import auth from '../../middlewares/auth'
import validateRequest from '../../middlewares/validateRequest'
import { blogController } from './blog.controller'
import { blogValidation } from './blog.validation'

const router = express.Router()

router.post('/create-blog', validateRequest(blogValidation.create), auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN), blogController.createBlog)
router.get('/', blogController.getAllBlog)
router.get('/:id', blogController.getSingleBlog)
router.patch('/:id', validateRequest(blogValidation.update), auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN), blogController.updateBlog)
router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN), blogController.deleteBlog)

export const blogRouter = router