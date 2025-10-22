 import* as THREE from "../js/three.module.js";

  export default function bo1({x,y,z}){
//botella


var geometry02 = new THREE.CylinderGeometry( 5.28, 5.28, 30, 55 );
var texture02= new THREE.TextureLoader().load("./image/vidrio.jpg");
var mesh02 = new THREE.MeshLambertMaterial({map:texture02}); 
var mesh02 = new THREE.Mesh( geometry02, mesh02 ); 
mesh02.position.set(10,15,20);
//scene.add( mesh02 ); 


var geometry03 = new THREE.CylinderGeometry( 2.45, 5.28, 20, 55 );
var texture03= new THREE.TextureLoader().load("./image/vidrio.jpg");
var mesh03 = new THREE.MeshLambertMaterial({map:texture03}); 
var mesh03 = new THREE.Mesh( geometry03, mesh03 ); 
mesh03.position.set(10,38,20);
//scene.add( mesh03 );

var geometry04 = new THREE.CylinderGeometry( 3, 4, 1, 25 );
var texture04= new THREE.TextureLoader().load("./image/tapa.jpg");
var mesh04 = new THREE.MeshLambertMaterial({map:texture04}); 
var mesh04 = new THREE.Mesh( geometry04, mesh04 ); 
mesh04.position.set(10,48,20);
//scene.add( mesh04 );


var botella = new THREE.Group();
   botella.add(mesh02,mesh03,mesh04);
   botella.position.set(x,y,z);

   return botella;
}