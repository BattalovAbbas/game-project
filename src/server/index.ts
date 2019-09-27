import { Socket } from 'socket.io';
import { Movement, PORT, SERVER_URL } from '../common';
import { addNewPlayer, disconnectPlayer, gameCircle, movePlayer } from './game';

const app = require('express')();
const http = require('http').createServer(app);
const socketIO = require('socket.io')(http);
const cors = require("cors");

app.use(cors());
app.get('/', (req: any, res: any) => {
  res.send('<h1>Server</h1>');
});

socketIO.on('connection', (socket: Socket) => {
  socket.on('join', name => {
    const player = addNewPlayer(name, socket.id);
    if (player) {
      socketIO.to(`${ socket.id }`).emit('joined', true);
      gameCircle().subscribe(players => socket.emit('state', players));
    }
  });
  socket.on('movement', (data: Movement) => {
    movePlayer(socket.id, data);
  });
  socket.on('disconnect', () => {
    disconnectPlayer(socket.id);
  });
});

http.listen(PORT, () => {
  console.log('listening on ' + SERVER_URL);
});
