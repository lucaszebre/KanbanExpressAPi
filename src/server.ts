import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { protect } from './modules/auth'
import { createNewUser, signin } from './handlers/user'
import router from './router'

const app = express()

// Middleware
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Public routes
app.post('/register', createNewUser)
app.post('/login', signin)




// Protected routes
app.use('/api', protect, router)

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({message: `Internal server error: ${err.message}`})
})

// 404 handler
app.use((req, res) => {
  res.status(404).json({message: 'Not Found'})
})

export default app