import { Schema, model } from 'mongoose'

const UserSchema = new Schema({
  userName: { type: String, uniqie: true, required: true },
  email: { type: String, uniqie: true, required: true },
  password: { type: String, required: true },
  isActivated: { type: Boolean, default: false },
  activationLink: { type: String },
})

export default model('User', UserSchema)