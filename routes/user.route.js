import { Router } from 'express'
import { register, login, getAll, getOne, updateUser } from '../controllers/user.controller.js'

const router = Router()

router.post('/register', register)
router.post('/login', login)
router.get('/list', getAll)
router.get('/:id', getOne)
router.put('/:id', updateUser)

export default router