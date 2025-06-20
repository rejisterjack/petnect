import { Elysia } from 'elysia'
import http from 'http'
import initializeSocket from './utils/socker'

const port = process.env.PORT || 8080

const app = new Elysia()

const server = http.createServer(app)
initializeSocket(server)

app.get('/', () => 'Hello World!')

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
