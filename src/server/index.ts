import { Socket } from 'socket.io';
import { Movement, PORT, SERVER_URL, UPDATE_INTERVAL } from '../common';
import { addNewPlayer, deletePlayer, gameCircle, movePlayer } from './game';

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
      socketIO.sockets.emit('joined', true);
    }
  });
  socket.on('movement', (data: Movement) => {
    movePlayer(socket.id, data);
  });
  socket.on('disconnect', () => {
    deletePlayer(socket.id);
  });
  gameCircle().subscribe(players => socketIO.sockets.emit('state', players))
});

http.listen(PORT, () => {
  console.log('listening on ' + SERVER_URL);
});
