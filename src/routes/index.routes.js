import { Router } from 'express'
import {getDatabase} from '../controllers/index.controllers.js'
const router = Router()

router.get('/',getDatabase)

export default router