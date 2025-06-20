import { Server as httpServer } from 'http'
import { Server, type Socket } from 'socket.io'

const initializeSocket = (server: httpServer): void => {
  const io = new Server(server, {
    cors: {
      origin: 'https://localhost:5173',
      methods: ['GET', 'POST'],
    },
  })

  io.on('connection', (socket: Socket) => {
    console.log(`Socket connected: ${socket.id}`)

    socket.on('join', (room: string) => {
      socket.join(room)
      console.log(`Socket ${socket.id} joined room: ${room}`)
    })

    socket.on('message', (data: { room: string; message: string }) => {
      console.log(
        `Message from ${socket.id} in room ${data.room}: ${data.message}`
      )
      io.to(data.room).emit('message', { id: socket.id, message: data.message })
    })

    socket.on('disconnect', () => {
      console.log(`Socket disconnected: ${socket.id}`)
    })
  })
}

export default initializeSocket
