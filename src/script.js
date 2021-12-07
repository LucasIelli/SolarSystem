import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const textureLoader = new THREE.TextureLoader();

const canvas = document.querySelector(".webgl");

const scene = new THREE.Scene();

scene.background = textureLoader.load("./textures/2k_stars_milky_way.jpg");

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  1,
  350
);
camera.position.y = 0;
camera.position.x = 0;
camera.position.z = 150;

scene.add(camera);

//Sun

const sunMap = textureLoader.load("./textures/2k_sun.jpg");
const sunGeometry = new THREE.SphereGeometry(25, 64, 32); // The real radius has to be 50 compare to the other planets.
const sunMaterial = new THREE.MeshBasicMaterial({
  map: sunMap,
});
const sun = new THREE.Mesh(sunGeometry, sunMaterial);

scene.add(sun);

// Mercury

const mercuryMap = textureLoader.load("./textures/2k_mercury.jpg");
const mercuryGeometry = new THREE.SphereGeometry(0.1751777123572916, 64, 32);
const mercuryMaterial = new THREE.MeshBasicMaterial({
  map: mercuryMap,
});
const mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);

scene.add(mercury);

// Venus

const venusMap = textureLoader.load("./textures/2k_venus_atmosphere.jpg");
const venusGeometry = new THREE.SphereGeometry(0.434551590435844, 64, 32);
const venusMaterial = new THREE.MeshBasicMaterial({
  map: venusMap,
});
const venus = new THREE.Mesh(venusGeometry, venusMaterial);

scene.add(venus);

// Earth

const earthMap = textureLoader.load("./textures/2k_earth_daymap.jpg");
const earthGeometry = new THREE.SphereGeometry(0.4574567387089826, 64, 32);
const earthMaterial = new THREE.MeshBasicMaterial({
  map: earthMap,
});
const earth = new THREE.Mesh(earthGeometry, earthMaterial);

scene.add(earth);

// Moon

//const moonMap = textureLoader.load("./textures/2k_moon.jpg");
//const moonGeometry = new THREE.SphereGeometry(0.1247504846700653, 64, 32);
//const moonMaterial = new THREE.MeshBasicMaterial({
//  map: moonMap,
//});
//const moon = new THREE.Mesh(moonGeometry, moonMaterial);

//scene.add(moon);

// Mars

const marsMap = textureLoader.load("./textures/2k_mars.jpg");
const marsGeometry = new THREE.SphereGeometry(0.243376175773677, 64, 32);
const marsMaterial = new THREE.MeshBasicMaterial({
  map: marsMap,
});
const mars = new THREE.Mesh(marsGeometry, marsMaterial);

scene.add(mars);

// Jupiter

const jupiterMap = textureLoader.load("./textures/2k_jupiter.jpg");
const jupiterGeometry = new THREE.SphereGeometry(5.019745817476844, 64, 32);
const jupiterMaterial = new THREE.MeshBasicMaterial({
  map: jupiterMap,
});
const jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);

scene.add(jupiter);

// Saturn

const saturnMap = textureLoader.load("./textures/2k_saturn.jpg");
const saturnGeometry = new THREE.SphereGeometry(4.181087097005816, 64, 32);
const saturnMaterial = new THREE.MeshBasicMaterial({
  map: saturnMap,
});

const saturnRingGeometry = new THREE.RingGeometry(4.4, 5.02620808501472, 32);
const saturnRing = new THREE.Mesh(saturnRingGeometry, saturnMaterial);
saturnRing.rotateX(30);

const saturnPlanet = new THREE.Mesh(saturnGeometry, saturnMaterial);

const saturn = new THREE.Group();

saturn.add(saturnPlanet);
saturn.add(saturnRing);
scene.add(saturn);

// Uranus

const uranusMap = textureLoader.load("./textures/2k_uranus.jpg");
const uranusGeometry = new THREE.SphereGeometry(1.821066992173476, 64, 32);
const uranusMaterial = new THREE.MeshBasicMaterial({
  map: uranusMap,
});
const uranus = new THREE.Mesh(uranusGeometry, uranusMaterial);

scene.add(uranus);

// Neptune

const neptuneMap = textureLoader.load("./textures/2k_neptune.jpg");
const neptuneGeometry = new THREE.SphereGeometry(1.767932792417606, 64, 32);
const neptuneMaterial = new THREE.MeshBasicMaterial({
  map: neptuneMap,
});
const neptune = new THREE.Mesh(neptuneGeometry, neptuneMaterial);

scene.add(neptune);

// Renderer

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

renderer.setSize(window.innerWidth, window.innerHeight);

const clock = new THREE.Clock();

const controls = new OrbitControls(camera, renderer.domElement);
controls.enablePan = false;
// Lock Y axis
// controls.minPolarAngle = controls.maxPolarAngle = 1.57079;
controls.minDistance = 100;
controls.maxDistance = 210;

const frame = () => {
  const elapsedTime = clock.getElapsedTime() / 10; // all speed divided by 10

  // Sun
  sun.rotation.y = elapsedTime * 0.7189;

  // Mercury
  mercury.rotation.y = elapsedTime * 0.001089;
  mercury.position.x = Math.sin(elapsedTime * 17.2332) * 30;
  mercury.position.z = Math.cos(elapsedTime * 17.2332) * 30;

  // Venus
  venus.rotation.y = elapsedTime * 0.000652;
  venus.position.x = Math.sin(elapsedTime * 12.6072) * 45;
  venus.position.z = Math.cos(elapsedTime * 12.6072) * 45;

  // Earth
  earth.rotation.y = elapsedTime * 0.1574;
  earth.position.x = Math.sin(elapsedTime * 10.7208) * 60;
  earth.position.z = Math.cos(elapsedTime * 10.7208) * 60;

  // Moon
  //moon.rotation.y = elapsedTime;
  //moon.position.x = Math.sin(elapsedTime * 1) * 52;
  //moon.position.z = Math.cos(elapsedTime * 1) * 52;

  // Mars
  mars.rotation.y = elapsedTime * 0.0866;
  mars.position.x = Math.sin(elapsedTime * 8.6868) * 75;
  mars.position.z = Math.cos(elapsedTime * 8.6868) * 75;

  // Jupiter
  jupiter.rotation.y = elapsedTime * 4.5583;
  jupiter.position.x = Math.sin(elapsedTime * 4.7052) * 90;
  jupiter.position.z = Math.cos(elapsedTime * 4.7052) * 90;

  // Saturn

  saturn.rotation.y = elapsedTime * 3.684;
  saturn.position.x = Math.sin(elapsedTime * 3.4884) * 105;
  saturn.position.z = Math.cos(elapsedTime * 3.4884) * 105;

  // Uranus
  uranus.rotation.y = elapsedTime * 1.4794;
  uranus.position.x = Math.sin(elapsedTime * 2.4516) * 120;
  uranus.position.z = Math.cos(elapsedTime * 2.4516) * 120;

  // Neptune
  neptune.rotation.y = elapsedTime * 0.9719;
  neptune.position.x = Math.sin(elapsedTime * 1.9548) * 135;
  neptune.position.z = Math.cos(elapsedTime * 1.9548) * 135;

  controls.update();

  renderer.render(scene, camera);
  requestAnimationFrame(frame);
};

frame();

// All informations for the formulas and math rules.
// Rules :
// 27854kms = 1
// 1km = 3.590148632153371e-5
// rotation and revolution speed : 10000km/h = 1

// Sun :
// 1392700 = 50
// radius = 25
// speed rotate = 7189 km/h = 0.7189
// speed revolution = 0

// Mercury
// 4879,4 = 0.1751777123572916
// 57.91 millions = 2079.055072880017
// 10.89 km/h = 0.001089
// 172 332 = 17.2332

// Venus
// 12104 = 0.434551590435844
// 108.2 millions = 3884.540819989948
// 6.52km/h = 0.000652
// 126 072 = 12.6072

// Earth
// 12 742 = 0.4574567387089826
// & Moon
// 3474,8 = 0.1247504846700653
// 149.6 millions = 5370.862353701443
// 1574km/h = 0.1574
// 107 208 = 10.7208

// Mars
// 6779 = 0.243376175773677
// 227.9 millions = 8181.948732677532849859984203346
// 866km/h = 0.0866
// 86 868 = 8.6868

// Jupiter
// 139820 = 5.019745817476844
// 778.5 millions = 27949.307101313994399368133840741
// 45583 km/h = 4.5583
// 47 052 = 4.7052

// Saturn
// 116460 = 4.181087097005816
// & Ring
// 140000 = 5.02620808501472
// 1.434 milliards = 51482.731385079342284770589502405
// 36840 km/h = 3.684
// 34 884 = 3.4884

// Uranus
// 50724 = 1.821066992173476
// 2.871 milliards = 103073.16722912328570402814676528
// 14794 km/h = 1.4794
// 24 516 = 2.4516

// Neptune
// 49244 = 1.767932792417606
// 4.495 milliards = 161377.18101529403317297336109715
// 9719km/h = 0.9719
// 19 548 = 1.9548
