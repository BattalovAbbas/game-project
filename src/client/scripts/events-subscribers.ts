import { Observable, Subject } from 'rxjs';
import { Movement } from '../../common';

export function keyEventsObservable(document: Document): Observable<Movement> {
  const subject = new Subject<Movement>();
  const movement: Movement = {
    up: false,
    down: false,
    left: false,
    right: false
  };
  document.addEventListener('keydown', event => {
    switch (event.keyCode) {
      case 65: // A
        movement.left = true;
        break;
      case 87: // W
        movement.up = true;
        break;
      case 68: // D
        movement.right = true;
        break;
      case 83: // S
        movement.down = true;
        break;
    }
    subject.next(movement);
  });
  document.addEventListener('keyup', event => {
    switch (event.keyCode) {
      case 65: // A
        movement.left = false;
        break;
      case 87: // W
        movement.up = false;
        break;
      case 68: // D
        movement.right = false;
        break;
      case 83: // S
        movement.down = false;
        break;
    }
    subject.next(movement);
  });
  return subject.asObservable();
}
