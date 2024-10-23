import { createCamera } from './components/camera.js';
import { createCube } from './components/cube_test.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';
import { generateUniversePlane } from './components/plane.js'; 
import { createPlanets } from './components/planets.js';

import { createControls } from './systems/controls.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';
import { Raycaster, Vector2 } from 'three';

let camera;
let renderer;
let scene;
let loop;
let raycaster;
const pointer = new Vector2();

function onPointerMove( event ) {

	// calculate pointer position in normalized device coordinates
	// (-1 to +1) for both components

	pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}

class Caster {
  constructor(planets) {
    this.planets = planets;
  }

  tick() {
  // update the picking ray with the camera and pointer position
	raycaster.setFromCamera( pointer, camera );

	// calculate objects intersecting the picking ray
  const intersectedPlanets = this.planets;
	const intersects = raycaster.intersectObjects( intersectedPlanets );
  console.log(scene.children);
  console.log(intersectedPlanets);
    // set default color in the beginning and make planets reset to default color after the planet is not hovererd anymore
    for ( let i = 0; i < this.planets.length; i ++ ) {

      this.planets[ i ].material.color.set( 0xffffff );
    }
    for ( let i = 0; i < intersects.length; i ++ ) {
      intersects[ i ].object.material.color.set( 0xff88ff );
      console.log("pink glow!");
    }
  }
}

class Rotator {
  constructor(planets) {
    this.planets = planets;
  }

  tick(delta) {
    this.planets.forEach(planet => {
      planet.rotation.y += delta * 0.1;
    });
  }
}

class Rotator2 {
  constructor(planets) {
    this.planets = planets;
  }

  tick(delta) {
    this.planets.forEach(planet => {
      planet.rotation.x += delta * 0.1;
    });
  }
}

class World {
  constructor(container) {
    camera = createCamera();
    renderer = createRenderer();
    scene = createScene();
    raycaster = new Raycaster();
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);

    const controls = createControls(camera, renderer.domElement);
    const light = createLights();

    const plane = generateUniversePlane();
    const { planet1, planet2, ring, ring2, planet3, planet4, planet5, planet6, planet7 } = createPlanets(); // destructure planets from the returned object
                                                                                            
    scene.add(plane, planet1, ring, ring2, planet2, planet3, planet4, planet5, planet6, planet7, light);

    loop.updatables.push(controls);
    loop.updatables.push(new Caster([planet1, planet2, planet3, planet4, planet5, planet6, planet7]));
    loop.updatables.push(new Rotator([planet1, planet2, planet4, planet7, ring, ring2, planet5, planet7, planet6]));
    loop.updatables.push(new Rotator2([planet3, planet5, planet6, ring, planet7]));

    const resizer = new Resizer(container, camera, renderer);
  
  }

  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

window.addEventListener( 'pointermove', onPointerMove );

export { World };
