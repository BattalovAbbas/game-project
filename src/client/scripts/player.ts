import Konva from 'konva';
import { Layer } from 'konva/types/Layer';
import { Player, PLAYER_GUN_HEIGHT, PLAYER_GUN_WIDTH, PLAYER_HEIGHT, PLAYER_WIDTH } from '../../common';

export interface PlayerObject {
  destroy: () => void;
  setPosition: (x: number, y: number) => void;
  rotateGun: (angle: number) => void;
}

export function createPlayer(layer: Layer, { x, y, name, color }: Player): PlayerObject {
  const container = new Konva.Group({
    x,
    y
  });
  const body = new Konva.Rect({
    x: 0,
    y: 0,
    width: PLAYER_WIDTH,
    height: PLAYER_HEIGHT,
    fill: color,
    stroke: 'black',
    shadowColor: 'black',
    shadowBlur: 10,
    shadowOffset: {
      x: 5,
      y: 5
    },
    shadowOpacity: 0.6,
    strokeWidth: 0,
    offset: {
      x: PLAYER_WIDTH / 2,
      y: PLAYER_HEIGHT / 2
    }
  });
  const gun = new Konva.Rect({
    x: 0,
    y: 0,
    width: PLAYER_GUN_WIDTH,
    height: PLAYER_GUN_HEIGHT,
    fill: 'black',
    stroke: 'black',
    shadowColor: 'black',
    shadowBlur: 10,
    shadowOffset: {
      x: 1,
      y: 1
    },
    shadowOpacity: 0.8,
    strokeWidth: 0,
    offset: {
      x: - PLAYER_GUN_HEIGHT,
      y: PLAYER_GUN_HEIGHT / 2
    },
  });
  const text = new Konva.Text({
    x: -(PLAYER_WIDTH / 2),
    y: -(PLAYER_WIDTH / 2),
    text: name,
    fontSize: 12,
    fontFamily: 'Courier',
    fill: 'black'
  });
  container.add(body);
  container.add(gun);
  container.add(text);
  layer.add(container);
  return {
    destroy: () => container.destroy(),
    setPosition: (x ,y) => {
      container.x(x);
      container.y(y);
    },
    rotateGun: (angle) => gun.rotation(angle)
  };
}
