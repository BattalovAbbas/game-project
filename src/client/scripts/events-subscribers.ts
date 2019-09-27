import { Observable, Subject } from 'rxjs';
import { Movement } from '../../common';

enum Keys {
  UP = 87,
  DOWN = 83,
  LEFT = 65,
  RIGHT = 68
}

export function keyEventsObservable(document: Document): Observable<Movement> {
  const subject = new Subject<Movement>();
  const movement: Movement = {
    up: false,
    down: false,
    left: false,
    right: false
  };
  document.addEventListener('keydown', event => {
    if (event.repeat) {
      return;
    }
    switch (event.keyCode) {
      case Keys.LEFT: // A
        movement.left = true;
        movement.right = false;
        break;
      case Keys.UP: // W
        movement.up = true;
        movement.down = false;
        break;
      case Keys.RIGHT: // D
        movement.right = true;
        movement.left = false;
        break;
      case Keys.DOWN: // S
        movement.down = true;
        movement.up = false;
        break;
    }
    subject.next(movement);
  });
  document.addEventListener('keyup', event => {
    switch (event.keyCode) {
      case Keys.LEFT: // A
        movement.left = false;
        break;
      case Keys.UP: // W
        movement.up = false;
        break;
      case Keys.RIGHT: // D
        movement.right = false;
        break;
      case Keys.DOWN: // S
        movement.down = false;
        break;
    }
    subject.next(movement);
  });
  return subject.asObservable();
}
