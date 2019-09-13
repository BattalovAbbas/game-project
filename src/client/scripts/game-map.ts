import { Socket } from 'socket.io';
import { GAME_MAP_HEIGHT, GAME_MAP_WIDTH, PLAYER_HEIGHT, PLAYER_WIDTH } from '../../common';
import { Player } from '../../common/interfaces';

export function initGame(document: Document, socket: Socket) {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  canvas.style.display = 'block';
  const context = canvas.getContext('2d');
  canvas.width = GAME_MAP_WIDTH;
  canvas.height = GAME_MAP_HEIGHT;
  socket.on('state', (players: { [playerId: string]: Player }) => {
    context.clearRect(0, 0, GAME_MAP_WIDTH, GAME_MAP_WIDTH);
    for (let id in players) {
      const { x, y, color, name } = players[id];
      context.strokeStyle = color;
      context.lineWidth = 3;
      context.textBaseline = "middle";
      context.font = "7pt sans-serif";
      context.fillStyle = "black";
      let textX = x + PLAYER_WIDTH / 2 - context.measureText(name).width/2;
      let textY = y + PLAYER_HEIGHT / 2;
      context.beginPath();
      context.strokeRect(x, y, PLAYER_WIDTH, PLAYER_HEIGHT);
      context.fillText(name, textX, textY);
      context.fill();
    }
  });
}
