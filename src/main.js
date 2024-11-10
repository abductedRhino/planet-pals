import { World } from './World/World.js';

function main() {
  // create a new world
  const world = new World(document.body);

  // draw the scene
  world.start();
}

main();
