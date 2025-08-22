import { Router } from 'express'
import { create } from '../controllers/article.controller.js'
import auth from '../middlewares/auth.js'

const router = Router()

router.post('/new', auth, create)


export default router