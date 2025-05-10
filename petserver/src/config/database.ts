import mongoose from 'mongoose'
import config from './config'

const connectDB = async () => {
  try {
    await mongoose.connect(config.MONGO_URI)
    console.log('MongoDB connected successfully')
  } catch (error) {
    console.error('Database connection error:', error)
  }
}

export const disconnectDB = async () => {
  try {
    await mongoose.connection.close()
    console.log('MongoDB disconnected successfully')
  } catch (error) {
    console.error('Error disconnecting from MongoDB:', error)
  }
}

export default connectDB
