import { Router } from 'express'
import { register, login, getAll, getOne, updateOne } from '../controllers/user.controller.js'

const router = Router()

router.post('/register', register)
router.post('/login', login)
router.get('/list', getAll)
router.get('/:id', getOne)
router.put('/:id', updateOne)

export default router