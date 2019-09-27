import Konva from "konva";
import { Group } from 'konva/types/Group';
import { Layer } from 'konva/types/Layer';
import { Socket } from 'socket.io';
import { GAME_MAP_HEIGHT, GAME_MAP_WIDTH, Player, PLAYER_WIDTH } from '../../common';

export function initGame(document: Document, socket: Socket) {
  const stage = new Konva.Stage({
    container: 'container',
    width: GAME_MAP_WIDTH,
    height: GAME_MAP_HEIGHT
  });
  const layer = new Konva.Layer();
  stage.add(layer);
  let playersObjects: { [playerId: string]: Group } = {};
  let players: { [playerId: string]: Player } = {};

  socket.on('state', (data: { [playerId: string]: Player }) => {
    players = data;
    if (Object.keys(players).length !== Object.keys(playersObjects).length) {
      playersObjects = updateGameObjects(layer, playersObjects, players);
    }
  });
  const anim = new Konva.Animation(() => {
    for (let id in players) {
      let object = playersObjects[id];
      if (object) {
        object.x(players[id].x);
        object.y(players[id].y);
        object.rotate(1);
      }
    }
  }, layer);
  anim.start();
}

function createNewObject(layer: Layer, { x, y, name, color }: Player): Group {
  const container = new Konva.Group({
    x,
    y
  });
  const object = new Konva.Circle({
    x: 0,
    y: 0,
    radius: PLAYER_WIDTH,
    fill: color,
    stroke: 'black',
    shadowColor: 'black',
    shadowBlur: 10,
    shadowOffset: {
      x: 5,
      y: 5
    },
    shadowOpacity: 0.6,
    strokeWidth: 0
  });
  // const object = new Konva.Star({
  //   x: 0,
  //   y: 0,
  //   numPoints: 5,
  //   innerRadius: PLAYER_WIDTH - 15,
  //   outerRadius: PLAYER_WIDTH,
  //   fill: color,
  //   opacity: 0.8,
  //   rotation: Math.random() * 180,
  //   shadowColor: 'black',
  //   shadowBlur: 10,
  //   shadowOffset: {
  //     x: 5,
  //     y: 5
  //   },
  //   shadowOpacity: 0.6,
  // });
  const text = new Konva.Text({
    x: -(PLAYER_WIDTH / 2),
    y: -(PLAYER_WIDTH / 5),
    text: name,
    fontSize: 12,
    fontFamily: 'Courier',
    fill: 'black'
  });
  container.rotate = (value) => { object.rotate(value); return container; };
  container.add(object);
  container.add(text);
  layer.add(container);
  return container;
}

function updateGameObjects(layer: Layer, playersObjects: { [playerId: string]: Group }, players: { [playerId: string]: Player }): { [playerId: string]: Group } {
  const playersIds = Object.keys(players);
  Object.keys(playersObjects).filter(x => !playersIds.includes(x)).forEach(player => playersObjects[player].destroy());
  let newPlayersObjects: { [playerId: string]: Group } = {};
  playersIds.forEach(id => newPlayersObjects[id] = playersObjects[id] || createNewObject(layer, players[id]));
  return newPlayersObjects;
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
