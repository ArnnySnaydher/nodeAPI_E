import { Router } from 'express'
import { getEmployees, postEmployees, patchtEmployee, deleteEmployee } from '../controllers/employees.controllers.js'

const router = Router()

router.get('/employees/:id', getEmployees)
router.post('/employees', postEmployees)
router.patch('/employees/:id', patchtEmployee)
router.delete('/employees/:id', deleteEmployee)

export default router