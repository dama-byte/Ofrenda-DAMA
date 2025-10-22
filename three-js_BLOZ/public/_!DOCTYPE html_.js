<!DOCTYPE html>
<html lang="en">
<head>
    <title>Práctica 3 ARHIVO 2</title>
</head>
<body>
<canvas id="myCanvas"></canvas>

<script type="importmap">
{
    "imports": {
        "three": "./js/three.module.js",
        "three/OrbitControls": "./js/OrbitControls.js"
    }
}
</script>
<script type="module">
import * as THREE from 'three';
import {OrbitControls} from 'three/OrbitControls';
import {RoundedBoxGeometry} from "./js/RoundedBoxGeometry.js";

// Renderer
var renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('myCanvas'), antialias: true,
});
renderer.setPixelRatio(window.devicePixelRatio); // ✅ corregido
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x8B7CF2);

// Activar sombras
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// Escena
var scene = new THREE.Scene();

// Cámara
var camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 2000);
camera.position.set(0, 4, 35);
scene.add(camera);

// Controles
var controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// Piso
var geometryFloor = new THREE.BoxGeometry(50, 0.5, 60);
var materialFloor = new THREE.MeshLambertMaterial({ color: 0x6CF527 });
var floor = new THREE.Mesh(geometryFloor, materialFloor);
floor.receiveShadow = true;
scene.add(floor);

// Spotlights
function createSpotLight(color, posX, posY, posZ, targetX, targetY, targetZ) {
    var light = new THREE.SpotLight(color, 1, 100, 0.36, 0.5, 0);
    light.position.set(posX, posY, posZ);
    light.castShadow = true;

    light.shadow.bias = -0.0001;
    light.shadow.mapSize.width = 1024;
    light.shadow.mapSize.height = 1024;

    light.target.position.set(targetX, targetY, targetZ);
    scene.add(light.target);
    scene.add(light);

    return light;
}
createSpotLight(0xFFFFFF, 0, 21, 0, 0, 8, 0);
createSpotLight(0xA8FF57, -15.03, 21, 0, -15, 8, 0.7);
createSpotLight(0x8555F2, 15.03, 21, 0, 15, 8, 0.01);

// Flor base
var geometryPetalo = new RoundedBoxGeometry(2.5, 10, 2.5, 8, 2);
var materialPetalo = new THREE.MeshLambertMaterial({ color: 0xD2FAF });

function createPetalo(rotation) {
    var petalo = new THREE.Mesh(geometryPetalo, materialPetalo);
    petalo.castShadow = true;
    petalo.receiveShadow = true;
    if (rotation) petalo.rotation.set(...rotation);
    return petalo;
}

var mesh05 = createPetalo([0,0,0]);
var mesh06 = createPetalo([0,0,0.785]);
var mesh07 = createPetalo([0,0,1.57]);
var mesh08 = createPetalo([0,0,2.355]);

// Segunda geometría de pétalos
var geometry09 = new RoundedBoxGeometry(2.5, 2.5, 10, 8, 2); // ✅ corregido
function createPetalo2(rotation) {
    var petalo = new THREE.Mesh(geometry09, materialPetalo);
    petalo.castShadow = true;
    petalo.receiveShadow = true;
    if (rotation) petalo.rotation.set(...rotation);
    return petalo;
}
var mesh09 = createPetalo2([0,0,0]);
var mesh10 = createPetalo2([0,0.785,0]);
var mesh11 = createPetalo2([0,1.57,0]);
var mesh12 = createPetalo2([0,2.355,0]);

// Flor agrupada
var flor1 = new THREE.Group();
flor1.add(mesh05,mesh06,mesh07,mesh08,mesh09,mesh10,mesh11,mesh12);
flor1.position.set(0,8,0);
scene.add(flor1);

// Flores clonadas
var flor2 = flor1.clone(); flor2.position.set(-15,8,1); scene.add(flor2);
var flor3 = flor1.clone(); flor3.position.set(15,8,1); scene.add(flor3);

// Render
function render() {
    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}
render();
</script>
</body>
</html>
