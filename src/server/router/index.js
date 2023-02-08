import express from 'express'
import { body } from 'express-validator'

import userController from '../controllers/user-controller.js'
import authMiddleware from '../middlewares/auth-middleware.js'

const router = express.Router()

router.post('/registration',
  body('email').isEmail(),
  body('password').isLength({ min: 3, max: 32 }),
  userController.registration
)
router.post('/login', userController.login)
router.post('/logout', userController.logout)
router.post('/avatar', authMiddleware, userController.uploadAvatar)
router.delete("/avatar", authMiddleware, userController.deleteAvatar);
router.get('/activate/:link', userController.activate)
router.get('/refresh', userController.refresh)
router.get('/users', authMiddleware, userController.getUsers)

export default router
