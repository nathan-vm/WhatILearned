import User from '@modules/users/infra/mongo/entities/User'
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO'

export default interface IUserRepository {
  index(id: string): Promise<User[]>
  findById(id: string): Promise<User | undefined>
  findByEmail(email: string): Promise<User | undefined>
  create(data: ICreateUserDTO): Promise<User>
  update(user: User): Promise<User>
}
