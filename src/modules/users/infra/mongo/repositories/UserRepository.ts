import mongoose, { Model } from 'mongoose'

import IUserRepository from '@modules/users/repositories/IUserRepository'
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO'
import User from '@modules/users/infra/mongo/entities/User'

class UsersRepository implements IUserRepository {
  private mongoRepository: Model<User>

  constructor() {
    this.mongoRepository = mongoose.model('User')
  }

  public async index(): Promise<User[]> {
    const users = await this.mongoRepository.find()

    return users
  }

  public async create({
    name,
    email,
    password,
  }: ICreateUserDTO): Promise<User> {
    const user = await this.mongoRepository.create({ name, email, password })

    return user
  }

  public async findById(id: string): Promise<User | undefined> {
    const user = await this.mongoRepository.findById(id)

    return user
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.mongoRepository.findOne({ email })

    return user
  }

  public async update({
    name,
    email,
    password,
  }: ICreateUserDTO): Promise<User> {
    const user = await this.mongoRepository.findOneAndUpdate({
      name,
      email,
      password,
    })

    return user
  }
}

export default UsersRepository
