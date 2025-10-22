import* as THREE from "../js/three.module.js";

  export default function c1({x,y,z}){

//cruz ver
var geometry01 = new THREE.BoxGeometry( 4, 15,0.5 );
var texture01= new THREE.TextureLoader().load("./image/m1.jpg");
var mesh01= new THREE.MeshLambertMaterial({map:texture01});
var mesh01 = new THREE.Mesh(geometry01,mesh01);
mesh01.position.set(0,8,0);
//scene.add(mesh01);
//cruz hor
var geometry02 = new THREE.BoxGeometry( 10, 3,0.49 );
var texture02= new THREE.TextureLoader().load("./image/m1.jpg");
var mesh02= new THREE.MeshLambertMaterial({map:texture01});
var mesh02 = new THREE.Mesh(geometry02,mesh02);
mesh02.position.set(0,12,0);
//scene.add(mesh0);

var cruz = new THREE.Group();
   cruz.add(mesh01,mesh02);
   cruz.position.set(x,y,z);

   return cruz;
}








