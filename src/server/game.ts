import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GAME_MAP_WIDTH, PLAYER_WIDTH, UPDATE_INTERVAL } from '../common';
import { Movement, Player } from '../common/interfaces';

const SPEED = 5;

interface Players { [playerId: string]: Player }

const players: Players = {};

export function gameCircle(): Observable<Players> {
  return interval(UPDATE_INTERVAL).pipe(map(() => players));
}

export function addNewPlayer(name: string, playerId: string): Player {
  players[playerId] = {
    ...getRandomPosition(),
    color: getRandomColor(),
    name
  };
  return players[playerId];
}

export function movePlayer(playerId: string, data: Movement): void {
  const player: Player = players[playerId];
  if (!player) {
    return;
  }
  if (data.left && player.x > 0) {
    player.x -= SPEED;
  }
  if (data.up && player.y > 0) {
    player.y -= SPEED;
  }
  if (data.right && player.x < GAME_MAP_WIDTH - PLAYER_WIDTH) {
    player.x += SPEED;
  }
  if (data.down && player.y < GAME_MAP_WIDTH - PLAYER_WIDTH) {
    player.y += SPEED;
  }
}

export function deletePlayer(playerId: string) {
  delete players[playerId];
}

function getRandomPosition(): { x: number, y: number } {
  return {
    x: getRandomizer(PLAYER_WIDTH, GAME_MAP_WIDTH - PLAYER_WIDTH),
    y: getRandomizer(PLAYER_WIDTH, GAME_MAP_WIDTH - PLAYER_WIDTH)
  }
}

function getRandomizer(bottom: number, top: number): number {
  return Math.floor(Math.random() * (1 + top - bottom)) + bottom;
}

function getRandomColor(): string {
  const letters = '123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
