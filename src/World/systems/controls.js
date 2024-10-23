import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

function createControls(camera, canvas) {
  const controls = new OrbitControls(camera, canvas);

  controls.enableDamping = true;
  controls.autoRotate = false;
  // controls.autoRotateSpeed = controls.autoRotateSpeed* 0.15;

  controls.minDistance = 200;
  controls.maxDistance = 280;  

  // Disable rotation
  controls.enableRotate = false;


  // forward controls.update to our custom .tick method
  controls.tick = () => controls.update();

  return controls;
}

export { createControls };
