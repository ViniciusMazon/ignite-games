import { getRepository, Like, Repository } from 'typeorm';

import { User } from '../../../users/entities/User';
import { Game } from '../../entities/Game';

import { IGamesRepository } from '../IGamesRepository';

export class GamesRepository implements IGamesRepository {
  private repository: Repository<Game>;

  constructor() {
    this.repository = getRepository(Game);
  }

  async findByTitleContaining(param: string): Promise<Game[] | undefined> {
    // Complete usando query builder
    return await this.repository
      .createQueryBuilder('games').where('title ILIKE LOWER(:param)', { param: `%${param}%` }).getMany();
  }

  async countAllGames(): Promise<[{ count: string }]> {
    // Complete usando raw query
    return this.repository.query(`SELECT COUNT(*) FROM games`);
  }

  async findUsersByGameId(id: string): Promise<User[] | undefined> {
    // Complete usando query builder
    return this.repository
      .createQueryBuilder()
      .relation(Game, "users")
      .of(id)
      .loadMany();
  }
}
