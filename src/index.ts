import express from 'express'
import cors from 'cors'
import router from './routes'

const app = express()
const PORT = 3000

app.use(cors())

app.use(router)

app.listen(PORT, () => (
  console.log(`Server running on http://localhost:${PORT}`)
))