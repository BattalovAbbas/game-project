import { Observable, Subject } from 'rxjs';
import { Socket } from 'socket.io';
import { SERVER_URL } from '../../common';
import { Movement } from '../../common/interfaces';

const io = require('socket.io-client');
const socket = io(SERVER_URL);

export function registration(): Observable<Socket> {
  const subject = new Subject<Socket>();
  socket.emit('join');
  socket.on('joined', () => {
    subject.next(socket);
  });
  return subject.asObservable();
}

export function move(movement: Movement) {
  socket.emit('movement', movement);
}
