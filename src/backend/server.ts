import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(express.static('public'))
const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})

process.on('SIGINT', () => {
  console.log('\n🛸 Shutting down Anturax server...')
  server.close(() => {
    console.log('Server closed')
    process.exit(0)
  })
})

export default app