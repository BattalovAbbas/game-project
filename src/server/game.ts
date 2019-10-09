const Matter = require('matter-js');
import { Body } from 'matter-js';
import { interval, Observable } from 'rxjs';
import { filter, map, share } from 'rxjs/operators';
import {
  Bullet, BULLET_RADIUS, GAME_MAP_HEIGHT, GAME_MAP_WIDTH, GameState, PLAYER_HEIGHT, PLAYER_WIDTH, UPDATE_INTERVAL, Wall
} from '../common';
import { Movement, Player } from '../common/interfaces';

const SPEED = 5;
const BULLET_SPEED = 20;
const GUN_SPEED = 5;
const WALLS_COUNT = 10;

const colors = [ '#fea49f', '#51d0de', '#bf4aa8', '#F7882F', '#F7C331', '#1561ad', '#1dbab4', '#fc5226', '#eb1736', '#8bf0ba' ];

interface Players { [playerId: string]: Player }
interface PlayersBody { [playerId: string]: Body }
interface PlayersMovement { [playerId: string]: Movement }

const players: Players = {};
const playersBody: PlayersBody = {};
const playersMovement: PlayersMovement = {};
const bullets: { [id: string]: Bullet } = {};
const walls: { [id: string]: Wall } = {};
const bulletsBody: { [id: string]: Body } = {};
const wallsBody: { [id: string]: Body } = {};
let game: Observable<GameState>;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Events = Matter.Events;
const engine = Engine.create();
engine.world.gravity.y = 0;

const topWall = Bodies.rectangle(0, 0, GAME_MAP_WIDTH * 2, 1, { isStatic: true });
const leftWall = Bodies.rectangle(0, 0, 1, GAME_MAP_HEIGHT * 2, { isStatic: true });
const rightWall = Bodies.rectangle(GAME_MAP_WIDTH, 0, 1, GAME_MAP_HEIGHT * 2, { isStatic: true });
const bottomWall = Bodies.rectangle(0, GAME_MAP_HEIGHT, GAME_MAP_WIDTH * 2, 1, { isStatic: true });

World.add(engine.world, [ topWall, leftWall, rightWall, bottomWall ]);

export function gameCircle(): Observable<GameState> {
  return game || (game = interval(UPDATE_INTERVAL).pipe(
    filter(() => Object.keys(players).length > 0),
    map(() => updateState()),
    share()
  ));
}

export function addNewPlayer(name: string, playerId: string): Player {
  players[playerId] = {
    ...getRandomPosition(PLAYER_WIDTH, PLAYER_HEIGHT),
    color: getRandomColor(),
    name,
    angle: 0,
    lastFire: 0,
    health: 3
  };
  playersMovement[playerId] = {
    up: false,
    down: false,
    left: false,
    right: false,
    arrowLeft: false,
    arrowRight: false,
    fire: false
  };
  const body = Bodies.rectangle(players[playerId].x, players[playerId].y, PLAYER_WIDTH, PLAYER_HEIGHT, { id: playerId });
  World.add(engine.world, [ body ]);
  playersBody[playerId] = body;
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
  if (playersBody[playerId]) {
    World.remove(engine.world, playersBody[playerId]);
  }
  delete players[playerId];
  delete playersMovement[playerId];
  delete playersBody[playerId];
}

function updateState(): GameState {
  // checkInterval();
  for (const id of Object.keys(playersMovement)) {
    const movement = playersMovement[id];
    const player = players[id];
    const playerObject = playersBody[id];
    let x = player.x;
    let y = player.y;
    let rotation = player.angle;
    if (movement.left) {
      x -= SPEED;
    }
    if (movement.up) {
      y -= SPEED;
    }
    if (movement.right) {
      x += SPEED;
    }
    if (movement.down) {
      y += SPEED;
    }
    if (movement.arrowLeft) {
      rotation -= GUN_SPEED;
    }
    if (movement.arrowRight) {
      rotation += GUN_SPEED;
    }
    player.angle = rotation;
    if (movement.fire && player.lastFire + 1000 < Date.now()) {
      generateBullet(player)
    }
    Body.setPosition(playerObject, { x, y });
    // Body.rotate(playerObject, rotation);
  }
  if (Object.keys(walls).length < WALLS_COUNT) {
    for(let i = 0; i < WALLS_COUNT - Object.keys(walls).length; i++) {
      generateWall()
    }
  }
  for (const id of Object.keys(bullets)) {
    let { x, y, angle } = bullets[id];
    const bulletBody = bulletsBody[id];
    x += BULLET_SPEED*(Math.cos(getRadians(angle)));
    y += BULLET_SPEED*(Math.sin(getRadians(angle)));
    Body.setPosition(bulletBody, { x, y });
  }
  Engine.update(engine, UPDATE_INTERVAL);
  Events.on(engine, 'collisionStart', (event: any) => {
    let i, pair, length = event.pairs.length;
    for (i = 0; i < length; i++) {
      pair = event.pairs[i];
      if (Object.keys(bulletsBody).includes(pair.bodyA.id.toString())) {
        destroyBullet(pair.bodyA.id);
        if (Object.keys(playersBody).includes(pair.bodyB.id.toString())) {
          if (players[pair.bodyB.id].health === 1) {
            disconnectPlayer(pair.bodyB.id);
          } else {
            players[pair.bodyB.id].health -= 1;
          }
        }
      }
      if (Object.keys(bulletsBody).includes(pair.bodyB.id.toString())) {
        destroyBullet(pair.bodyB.id);
        if (Object.keys(playersBody).includes(pair.bodyA.id.toString())) {
          if (players[pair.bodyA.id].health === 1) {
            disconnectPlayer(pair.bodyA.id);
          } else {
            players[pair.bodyA.id].health -= 1;
          }
        }
      }
    }
  });
  for (const id of Object.keys(playersBody)) {
    const { x, y } = playersBody[id].position;
    players[id].x = x;
    players[id].y = y;
    // players[id].angle = playersObject[id].angle;
  }
  for (const id of Object.keys(wallsBody)) {
    const { x, y } = wallsBody[id].position;
    walls[id].x = x;
    walls[id].y = y;
  }
  for (const id of Object.keys(bulletsBody)) {
    const { x, y } = bulletsBody[id].position;
    bullets[id].x = x;
    bullets[id].y = y;
  }
  return { players, bullets, walls };
}

function getRadians(degrees: number): number {
  return degrees * Math.PI / 180;
}

function generateWall() {
  const width = getRandomizer(40, 100);
  const height = getRandomizer(40, 100);
  const { x, y } = getRandomPosition(width, height);
  const id = getRandomizer(0, 1000000);
  walls[id] = { x, y, width, height };
  const wallBody = Bodies.rectangle(x, y, width, height, { id });
  wallsBody[id] = wallBody;
  World.add(engine.world, [ wallBody ]);
}

function generateBullet(player: Player) {
  const x = player.x + (PLAYER_WIDTH / 2)*(Math.cos(getRadians(player.angle)));
  const y = player.y + (PLAYER_HEIGHT / 2)*(Math.sin(getRadians(player.angle)));
  const id = getRandomizer(0, 1000000);
  bullets[id] = { id, angle: player.angle, x, y };
  const bulletBody = Bodies.circle(x, y, BULLET_RADIUS, { id });
  bulletsBody[id] = bulletBody;
  World.add(engine.world, [ bulletBody ]);
  player.lastFire = Date.now();
}

function destroyBullet(id: number) {
  if (bulletsBody[id]) {
    World.remove(engine.world, bulletsBody[id]);
  }
  delete bullets[id];
  delete bulletsBody[id];
}

function getRandomPosition(width: number, height: number): { x: number, y: number } {
  return {
    x: getRandomizer(width, GAME_MAP_WIDTH - width),
    y: getRandomizer(height, GAME_MAP_HEIGHT - height)
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
