import "./style.css";
import * as THREE from "three";

const textureLoader = new THREE.TextureLoader();

const canvas = document.querySelector(".webgl");

const scene = new THREE.Scene();

scene.background = textureLoader.load("./textures/2k_stars_milky_way.jpg");

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  300
);
camera.position.y = 0;
camera.position.x = 0;
camera.position.z = 200;

scene.add(camera);

// Earth

const earthMap = textureLoader.load("./textures/2k_earth_daymap.jpg");
const earthGeometry = new THREE.SphereGeometry(0.2744740432253895, 30, 30);
const earthMaterial = new THREE.MeshBasicMaterial({
  map: earthMap,
});
const earth = new THREE.Mesh(earthGeometry, earthMaterial);

scene.add(earth);

//Sun

const sunMap = textureLoader.load("./textures/2k_sun.jpg");
const sunGeometry = new THREE.SphereGeometry(30, 30, 30); // 1.3927 million kms
const sunMaterial = new THREE.MeshBasicMaterial({
  map: sunMap,
});
const sun = new THREE.Mesh(sunGeometry, sunMaterial);

scene.add(sun);

// Mercury

const mercuryMap = textureLoader.load("./textures/2k_mercury.jpg");
const mercuryGeometry = new THREE.SphereGeometry(2, 30, 30);
const mercuryMaterial = new THREE.MeshBasicMaterial({
  map: mercuryMap,
});
const mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);

scene.add(mercury);

// Jupiter

const jupiterMap = textureLoader.load("./textures/2k_jupiter.jpg");
const jupiterGeometry = new THREE.SphereGeometry(2, 30, 30);
const jupiterMaterial = new THREE.MeshBasicMaterial({
  map: jupiterMap,
});
const jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);

scene.add(jupiter);

// Neptune
// Saturn

const saturnMap = textureLoader.load("./textures/2k_saturn.jpg");
const saturnGeometry = new THREE.SphereGeometry(3, 30, 30);
const saturnMaterial = new THREE.MeshBasicMaterial({
  map: saturnMap,
});

const saturnRingGeometry = new THREE.RingGeometry(4, 5, 32);
const saturnRing = new THREE.Mesh(saturnRingGeometry, saturnMaterial);

const saturnPlanet = new THREE.Mesh(saturnGeometry, saturnMaterial);

const saturn = new THREE.Group();

scene.add(saturnPlanet, saturnRing, saturn);

// Venus
// Uranus
// Moon

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

renderer.setSize(window.innerWidth, window.innerHeight);

const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Sun
  sun.rotation.y = elapsedTime / 10;

  // Earth
  earth.rotation.y = elapsedTime;
  earth.position.x = Math.sin(elapsedTime * 0.2274) * 70;
  earth.position.z = Math.cos(elapsedTime * 0.2274) * 70;

  // Mercury
  mercury.rotation.y = elapsedTime;
  mercury.position.x = Math.sin(elapsedTime * 0.365) * 40;
  mercury.position.z = Math.cos(elapsedTime * 0.365) * 40;

  // Jupiter
  jupiter.rotation.y = elapsedTime;
  jupiter.position.x = Math.sin(elapsedTime * 0.365) * 90;
  jupiter.position.z = Math.cos(elapsedTime * 0.365) * 90;

  // Neptune

  // Saturn

  saturn.rotation.y = elapsedTime;
  saturn.position.x = Math.sin(elapsedTime * 0.365) * 100;
  saturn.position.z = Math.cos(elapsedTime * 0.365) * 100;

  // Venus

  // Uranus

  // Moon

  renderer.render(scene, camera);
  requestAnimationFrame(tick);
};

tick();
