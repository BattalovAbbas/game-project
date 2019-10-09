import { Observable, Subject } from 'rxjs';
import { Movement } from '../../common';

enum Keys {
  Up = 87,
  Down = 83,
  Left = 65,
  Right = 68,
  ArrowLeft = 37,
  ArrowRight = 39,
  Space = 32,
}

export function keyEventsObservable(document: Document): Observable<Movement> {
  const subject = new Subject<Movement>();
  const movement: Movement = {
    up: false,
    down: false,
    left: false,
    right: false,
    arrowLeft: false,
    arrowRight: false,
    fire: false
  };
  document.addEventListener('keydown', event => {
    if (event.repeat) {
      return;
    }
    switch (event.keyCode) {
      case Keys.Left: // A
        movement.left = true;
        movement.right = false;
        break;
      case Keys.Up: // W
        movement.up = true;
        movement.down = false;
        break;
      case Keys.Right: // D
        movement.right = true;
        movement.left = false;
        break;
      case Keys.Down: // S
        movement.down = true;
        movement.up = false;
        break;
      case Keys.ArrowLeft:
        movement.arrowLeft = true;
        movement.arrowRight = false;
        break;
      case Keys.ArrowRight:
        movement.arrowRight = true;
        movement.arrowLeft = false;
        break;
      case Keys.Space:
        movement.fire = true;
        break;
    }
    subject.next(movement);
  });
  document.addEventListener('keyup', event => {
    switch (event.keyCode) {
      case Keys.Left: // A
        movement.left = false;
        break;
      case Keys.Up: // W
        movement.up = false;
        break;
      case Keys.Right: // D
        movement.right = false;
        break;
      case Keys.Down: // S
        movement.down = false;
        break;
      case Keys.ArrowLeft:
        movement.arrowLeft = false;
        break;
      case Keys.ArrowRight:
        movement.arrowRight = false;
        break;
      case Keys.Space:
        movement.fire = false;
        break;
    }
    subject.next(movement);
  });
  return subject.asObservable();
}
