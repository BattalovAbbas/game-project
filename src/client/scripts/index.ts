import { combineLatest, interval } from 'rxjs';
import { Socket } from 'socket.io';
import { UPDATE_INTERVAL } from '../../common';
import { keyEventsObservable } from './events-subscribers';
import { initGame } from './game-map';
import { move, registration } from './socket';

(function () {
  window.onload = function () {
    registration().subscribe((socket: Socket) => {
      if (socket) {
        combineLatest(keyEventsObservable(document), interval(UPDATE_INTERVAL)).subscribe(([ movement ]) => move(movement));
        initGame(document, socket);
      }
    });
  };
})();
