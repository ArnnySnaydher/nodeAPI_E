import express from 'express'
import employeesRouter from './routes/employees.routes.js'
import indexRouter from './routes/index.routes.js'

const app = express()

//Configuracion del Middleware para analisis de datos enviados en la oslicitud HTTP => (req.body)
app.use(express.json())

app.use('/api',employeesRouter)
app.use(indexRouter)

//Si no hay ruta especifica
app.use((req,res)=>{return res.status(404).json({
  message : 'endpoint not found'
})})

export default app
