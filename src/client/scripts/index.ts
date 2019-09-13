import { combineLatest, interval } from 'rxjs';
import { Socket } from 'socket.io';
import { UPDATE_INTERVAL } from '../../common';
import { keyEventsObservable } from './events-subscribers';
import { initGame } from './game-map';
import { move, registration } from './socket';

(function () {
  const button = document.getElementById('button');
  button.onclick = start;
  function start() {
    const input = document.getElementById('input') as HTMLInputElement;
    input.style.display = 'none';
    button.style.display = 'none';
    registration(input.value).subscribe((socket: Socket) => {
      if (socket) {
        combineLatest(keyEventsObservable(document), interval(UPDATE_INTERVAL)).subscribe(([ movement ]) => move(movement));
        initGame(document, socket);
      }
    });
  }
  return {
    start: start
  }
})();
