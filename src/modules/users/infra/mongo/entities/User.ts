import mongoose from 'mongoose'

export default interface User {
  name: String
  email: String
  password: String
  createdAt: Date
}

export const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})
