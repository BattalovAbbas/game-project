import Konva from "konva";
import { Layer } from 'konva/types/Layer';
import { Socket } from 'socket.io';
import { Bullet, BULLET_RADIUS, GAME_MAP_HEIGHT, GAME_MAP_WIDTH, GameState, Wall } from '../../common';
import { createPlayer, PlayerObject } from './player';

export function initGame(document: Document, socket: Socket) {
  const stage = new Konva.Stage({
    container: 'container',
    width: GAME_MAP_WIDTH,
    height: GAME_MAP_HEIGHT
  });
  const layer = new Konva.Layer();
  stage.add(layer);
  let playersObjects: { [playerId: string]: PlayerObject } = {};
  let wallsObjects: { [id: number]: Konva.Rect } = {};
  let bulletsObjects: { [id: number]: Konva.Circle } = {};
  let state: GameState;
  const objects: {
    playersObjects: { [playerId: string]: PlayerObject };
    wallsObjects: { [id: string]: Konva.Rect };
    bulletsObjects: { [id: string]: Konva.Circle };
  } = { playersObjects, wallsObjects, bulletsObjects };

  socket.on('state', (newState: GameState) => {
    state = newState;
    updateGameObjects(layer, objects, state);
  });
  const anim = new Konva.Animation(() => {
    if (state) {
      for (let id in state.players) {
        let object = objects.playersObjects[id];
        if (object) {
          object.setPosition(state.players[id].x, state.players[id].y);
          object.rotateGun(state.players[id].angle);
        }
      }
      for (let id in state.walls) {
        let object = objects.wallsObjects[id];
        if (object) {
          object.x(state.walls[id].x);
          object.y(state.walls[id].y);
        }
      }
      for (let id in state.bullets) {
        let object = objects.bulletsObjects[id];
        if (object) {
          object.x(state.bullets[id].x);
          object.y(state.bullets[id].y);
        }
      }
    }
  }, layer);
  anim.start();
}

function updateGameObjects(layer: Layer, objects: any, state: GameState) {
  const playersIds = Object.keys(state.players);
  Object.keys(objects.playersObjects).filter(x => !playersIds.includes(x)).forEach(player => objects.playersObjects[player].destroy());
  let newPlayersObjects: { [playerId: string]: PlayerObject } = {};
  playersIds.forEach(id => newPlayersObjects[id] = objects.playersObjects[id] || createPlayer(layer, state.players[id]));
  objects.playersObjects = newPlayersObjects;
  const wallIds = Object.keys(state.walls);
  Object.keys(objects.wallsObjects).filter(x => !wallIds.includes(x)).forEach(wall => objects.wallsObjects[wall].destroy());
  let newWallsObjects: { [id: string]: Konva.Rect } = {};
  wallIds.forEach(id => newWallsObjects[id] = objects.wallsObjects[id] || createWall(layer, state.walls[id]));
  objects.wallsObjects = newWallsObjects;
  const bulletsIds = Object.keys(state.bullets);
  Object.keys(objects.bulletsObjects).filter(x => !bulletsIds.includes(x)).forEach(bullet => objects.bulletsObjects[bullet].destroy());
  let newBulletsObjects: { [id: string]: Konva.Circle } = {};
  bulletsIds.forEach(id => newBulletsObjects[id] = objects.bulletsObjects[id] || createBullet(layer, state.bullets[id]));
  objects.bulletsObjects = newBulletsObjects;
}

function createWall(layer: Layer, wall: Wall): Konva.Rect {
  const body = new Konva.Rect({
    x: wall.x,
    y: wall.y,
    width: wall.width,
    height: wall.height,
    fill: 'white',
    stroke: 'black',
    shadowColor: 'black',
    shadowBlur: 10,
    shadowOffset: {
      x: 5,
      y: 5
    },
    shadowOpacity: 0.6,
    strokeWidth: 0,
    offset: {
      x: wall.width / 2,
      y: wall.height / 2
    }
  });
  layer.add(body);
  return body;
}

function createBullet(layer: Layer, bullet: Bullet): Konva.Circle {
  const body = new Konva.Circle({
    x: bullet.x,
    y: bullet.y,
    radius: BULLET_RADIUS,
    fill: 'white',
  });
  layer.add(body);
  return body;
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
