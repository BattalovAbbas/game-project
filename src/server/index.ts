import { Socket } from 'socket.io';
import { PORT, SERVER_URL, UPDATE_INTERVAL } from '../common';

const app = require('express')();
const http = require('http').createServer(app);
const socketIO = require('socket.io')(http);

app.get('/', (req: any, res: any) => {
  res.send('<h1>Server</h1>');
});

const players: any = {};
socketIO.on('connection', (socket: Socket) => {
  socket.on('join', function() {
    players[socket.id] = {
      x: 300,
      y: 300
    };
    socketIO.sockets.emit('joined', true);
  });
  socket.on('movement', data => {
    const player = players[socket.id] || {};
    if (data.left) {
      player.x -= 5;
    }
    if (data.up) {
      player.y -= 5;
    }
    if (data.right) {
      player.x += 5;
    }
    if (data.down) {
      player.y += 5;
    }
  });
});

setInterval(function() {
  socketIO.sockets.emit('state', players);
}, UPDATE_INTERVAL);

http.listen(PORT, () => {
  console.log('listening on ' + SERVER_URL);
});
