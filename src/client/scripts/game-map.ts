import { Socket } from 'socket.io';

export function initGame(document: Document, socket: Socket) {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const context = canvas.getContext('2d');
  socket.on('state', function (players: any) {
    context.clearRect(0, 0, 800, 600);
    context.fillStyle = 'green';
    for (let id in players) {
      const player = players[id];
      context.beginPath();
      context.arc(player.x, player.y, 10, 0, 2 * Math.PI);
      context.fill();
    }
  });
}
