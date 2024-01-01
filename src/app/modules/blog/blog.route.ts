import express from 'express'
import { ENUM_USER_ROLE } from '../../../enums/user'
import auth from '../../middlewares/auth'
import { blogController } from './blog.controller'

const router = express.Router()

router.post('/create-blog', auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN), blogController.createBlog)
router.get('/', blogController.getAllBlog)
router.get('/:id', blogController.getSingleBlog)
router.patch('/:id', auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN), blogController.updateBlog)
router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN), blogController.deleteBlog)

export const blogRouter = router