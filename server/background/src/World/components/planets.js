import { SphereGeometry, TorusGeometry, MeshStandardMaterial, Mesh, TextureLoader, MathUtils } from 'three';

function createPlanets() {
    const geometry1 = new SphereGeometry(20, 32, 16);
    const texture1 = new TextureLoader().load("textures/2k_mars.jpg");
    const material1 = new MeshStandardMaterial({ map: texture1 });
    const planet1 = new Mesh(geometry1, material1);
    planet1.position.set(-20, 10, 30);
    planet1.name = 'planet1';

    const geometry2 = new SphereGeometry(15, 32, 16);
    const texture2 = new TextureLoader().load("textures/2k_neptune.jpg");
    const material2 = new MeshStandardMaterial({ map: texture2 });
    const planet2 = new Mesh(geometry2, material2);
    planet2.position.set(35, -30, 30);
    // add ring
    const geometryRing = new TorusGeometry( 20, 1, 2, 68 );
    const textureRing = new TextureLoader().load("textures/2k_saturn_ring_alpha_2.png");
    const materialRing = new MeshStandardMaterial({ map: textureRing,  color: 0x888888 });
    const ring = new Mesh(geometryRing, materialRing);
    ring.position.set(35, -30, 30);
    ring.rotation.set(MathUtils.degToRad(95), MathUtils.degToRad(-10), MathUtils.degToRad(0));
    // add ring2
    const geometryRing2 = new TorusGeometry( 24, 1, 2, 68 );
    const textureRing2 = new TextureLoader().load("textures/2k_saturn_ring_alpha_2.png");
    const materialRing2 = new MeshStandardMaterial({ map: textureRing2,  color: 0x666666 });
    const ring2 = new Mesh(geometryRing2, materialRing2);
    ring2.position.set(35, -30, 30);
    ring2.rotation.set(MathUtils.degToRad(95), MathUtils.degToRad(10), MathUtils.degToRad(0));
    
    planet2.name = 'planet2';

    const geometry3 = new SphereGeometry(14, 32, 16);
    const texture3 = new TextureLoader().load("textures/2k_venus_pink.png");
    const material3 = new MeshStandardMaterial({ map: texture3 });
    const planet3 = new Mesh(geometry3, material3);
    planet3.position.set(35, 50, 30);
    planet3.name = 'planet3';

    const geometry4 = new SphereGeometry(13, 32, 16);
    const texture4 = new TextureLoader().load("textures/2k_venus_surface.jpg");
    const material4 = new MeshStandardMaterial({ map: texture4 });
    const planet4 = new Mesh(geometry4, material4);
    planet4.position.set(-90, -40, 30);
    planet4.name = 'planet4';

    const geometry5 = new SphereGeometry(27, 32, 16);
    const texture5 = new TextureLoader().load("textures/2k_saturn.jpg");
    const material5 = new MeshStandardMaterial({ map: texture5 });
    const planet5 = new Mesh(geometry5, material5);
    planet5.position.set(100, 0, 30);
    planet5.name = 'planet5';

    const geometry6 = new SphereGeometry(30, 32, 16);
    const texture6 = new TextureLoader().load("textures/2k_mercury_purple.png");
    const material6 = new MeshStandardMaterial({ map: texture6 });
    const planet6 = new Mesh(geometry6, material6);
    planet6.position.set(-85, 50, 30);
    planet6.name = 'planet6';

    const geometry7 = new SphereGeometry(23, 32, 16);
    const texture7 = new TextureLoader().load("textures/2k_saturn_green.png");
    const material7 = new MeshStandardMaterial({ map: texture7 });
    const planet7 = new Mesh(geometry7, material7);
    planet7.position.set(-40, -70, 30);
    planet7.name = 'planet7';

    return { planet1, planet2, ring, ring2, planet3, planet4, planet5, planet6, planet7 };
}

export { createPlanets };