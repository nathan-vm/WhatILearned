import AppError from '@shared/errors'
import IUsersRepository from '@modules/users/repositories/IUsersRepository'

import User from '@modules/users/infra/mongo/entities/User'
import UsersRepository from '@modules/users/infra/mongo/repositories/UserRepository'

interface IRequest {
  name: string
  email: string
  password: string
}

class CreateUserService {
  private usersRepository: IUsersRepository

  constructor() {
    this.usersRepository = new UsersRepository()
  }

  public async execute({ name, email, password }: IRequest): Promise<User> {
    const checkUserExist = await this.usersRepository.findByEmail(email)

    if (checkUserExist) {
      throw new AppError('Email address already used')
    }

    const user = await this.usersRepository.create({
      name,
      email,
      password,
    })

    return user
  }
}

export default CreateUserService
