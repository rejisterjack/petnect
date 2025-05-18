import type { Document, Schema } from 'mongoose'

export interface UserType extends Document {
  email: string
  password: string
  verified: boolean
  pets: Schema.Types.ObjectId[]
  createdAt: Date
  updatedAt: Date
  comparePassword: (password: string) => Promise<boolean>
}
