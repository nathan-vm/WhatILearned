import mongoose from 'mongoose'
import { UserSchema } from '@modules/users/infra/mongo/entities/User'
mongoose.connect('mongodb://localhost:27017/wilapi', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})

mongoose.model('User', UserSchema)
