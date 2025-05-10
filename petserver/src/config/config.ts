require('dotenv').config()

const config = {
  JWT_SECRET: process.env.JWT_SECRET || 'default_secret',
  PORT: process.env.PORT || 8080,
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/petnect',
  NODE_ENV: process.env.NODE_ENV || 'development',
}

export default config
export const isProduction = config.NODE_ENV === 'production'
export const isDevelopment = config.NODE_ENV === 'development'
export const isTest = config.NODE_ENV === 'test'
