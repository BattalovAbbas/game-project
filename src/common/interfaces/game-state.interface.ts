import { Bullet } from './bullet.interface';
import { Player } from './player.interface';
import { Wall } from './wall.interface';

export interface GameState {
  players: { [playerId: string]: Player };
  bullets: { [id: string]: Bullet };
  walls: { [id: string]: Wall };
}
