import { useEffect } from 'react'
import { createSocketConnection } from './utils/socket'

const App = () => {
  useEffect(() => {
    const socket = createSocketConnection()
    socket.emit('join', { senderId: '111', receiverId: '222' })
    return () => {
      socket.disconnect()
    }
  }, [])

  return <div>App</div>
}

export default App
