import { User } from '../../users/entities/User';
import { Game } from '../entities/Game';

export interface IGamesRepository {
  findByTitleContaining(title: string): Promise<Game[] | undefined>;
  countAllGames(): Promise<[{ count: string }]>;
  findUsersByGameId(id: string): Promise<User[] | undefined>;
}
