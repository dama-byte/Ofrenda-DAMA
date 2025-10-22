 import* as THREE from "../js/three.module.js";

  export default function el1({x,y,z}){

var geometry02 = new THREE.CylinderGeometry( 7.5, 1.98, 31.948, 34 ); 
var texture02= new THREE.TextureLoader().load("./image/elote.jpeg");
var mesh02 = new THREE.MeshLambertMaterial({map:texture02}); 
var mesh02 = new THREE.Mesh( geometry02, mesh02 );
mesh02.position.set(30,15,20);
//scene.add( mesh02 );

var geometry03 = new THREE.CapsuleGeometry( 1, 23.577, 1, 53 ); 
var texture03= new THREE.TextureLoader().load("./image/madera.jpg");
var mesh03 = new THREE.MeshLambertMaterial( {map:texture03} ); 
var mesh03 = new THREE.Mesh( geometry03, mesh03 ); 
mesh03.position.set(30,25,20);
//scene.add( mesh03 );


var elote = new THREE.Group();
   elote.add(mesh02,mesh03);
   elote.position.set(x,y,z);

   return elote;
}

