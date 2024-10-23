import { AmbientLight } from 'three';

function createLights() {
  const light = new AmbientLight(0xffffff, 1);

  return light;
}

export { createLights };
