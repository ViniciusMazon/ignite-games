import { IFindUserWithGamesDTO, IFindUserByFullNameDTO } from '../dtos';
import { User } from '../entities/User';

export interface IUsersRepository {
  findUserWithGamesById(data: IFindUserWithGamesDTO): Promise<User | undefined>;
  findAllUsersOrderedByFirstName(): Promise<User[]>;
  findUserByFullName(data: IFindUserByFullNameDTO): Promise<User[] | undefined>;
}
