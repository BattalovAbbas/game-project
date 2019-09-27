const p2 = require('p2');
import { interval, Observable } from 'rxjs';
import { filter, map, share } from 'rxjs/operators';
import { GAME_MAP_WIDTH, PLAYER_HEIGHT, PLAYER_WIDTH, UPDATE_INTERVAL } from '../common';
import { Movement, Player } from '../common/interfaces';

const SPEED = 3;

const colors = [ '#fea49f', '#51d0de', '#bf4aa8', '#F7882F', '#F7C331', '#1561ad', '#1dbab4', '#fc5226', '#eb1736', '#8bf0ba' ];

interface Players { [playerId: string]: Player }
interface PlayersObject { [playerId: string]: p2.Body }
interface PlayersMovement { [playerId: string]: Movement }

const players: Players = {};
const playersObject: PlayersObject = {};
const playersMovement: PlayersMovement = {};
let game: Observable<Players>;

const world = new p2.World({ gravity: [0, 0] });

export function gameCircle(): Observable<Players> {
  return game || (game = interval(UPDATE_INTERVAL).pipe(
    filter(() => Object.keys(players).length > 0),
    map(() => getUpdatedPositions()),
    share()
  ));
}

export function addNewPlayer(name: string, playerId: string): Player {
  players[playerId] = {
    ...getRandomPosition(),
    color: getRandomColor(),
    name
  };
  playersMovement[playerId] = {
    up: false,
    down: false,
    left: false,
    right: false
  };
  const body = new p2.Body({
    mass: 5,
    position: [ players[playerId].x, players[playerId].y ]
  });
  const shape = new p2.Circle({ radius: PLAYER_WIDTH });
  body.addShape(shape);
  world.addBody(body);
  playersObject[playerId] = body;
  return players[playerId];
}

export function movePlayer(playerId: string, movement: Movement): void {
  const player: Player = players[playerId];
  if (!player) {
    return;
  }
  playersMovement[playerId] = movement;
}

export function disconnectPlayer(playerId: string): void {
  delete players[playerId];
  delete playersMovement[playerId];
  delete playersObject[playerId];
}

function getUpdatedPositions(): Players {
  // checkInterval();
  for (const id of Object.keys(playersMovement)) {
    const movement = playersMovement[id];
    const player = players[id];
    const playerObject = playersObject[id];
    let x = player.x;
    let y = player.y;
    if (movement.left && player.x > PLAYER_WIDTH) {
      x -= SPEED;
    }
    if (movement.up && player.y > PLAYER_WIDTH) {
      y -= SPEED;
    }
    if (movement.right && player.x < GAME_MAP_WIDTH - PLAYER_WIDTH) {
      x += SPEED;
    }
    if (movement.down && player.y < GAME_MAP_WIDTH - PLAYER_HEIGHT) {
      y += SPEED;
    }
    playerObject.position = [ x, y ];
    console.log(playerObject.position);
  }
  world.step(UPDATE_INTERVAL);
  for (const id of Object.keys(playersMovement)) {
    const [ x, y ] = playersObject[id].position;
    players[id].x = x;
    players[id].y = y;
  }
  return players;
}

function getRandomPosition(): { x: number, y: number } {
  return {
    x: getRandomizer(PLAYER_WIDTH, GAME_MAP_WIDTH - PLAYER_WIDTH),
    y: getRandomizer(PLAYER_HEIGHT, GAME_MAP_WIDTH - PLAYER_HEIGHT)
  }
}

function getRandomizer(bottom: number, top: number): number {
  return Math.floor(Math.random() * (1 + top - bottom)) + bottom;
}

function getRandomColor(): string {
  let notUsed = colors.filter(color => {
    for (const id of Object.keys(players)) {
      if (players[id].color === color) {
        return false;
      }
    }
    return true;
  });
  if (notUsed.length === 0) {
    notUsed = colors;
  }
  let color;
  for (let i = 0; i < notUsed.length; i++) {
    color = notUsed[Math.floor(Math.random() * notUsed.length)];
  }
  return color;
}

// let count = 0;
// let lastTime = new Date();
// function checkInterval() {
//   let date = new Date();
//   count++;
//   if (date.getTime() - lastTime.getTime() > 1000) {
//     console.log(count);
//     count = 0;
//     lastTime = date;
//   }
// }
