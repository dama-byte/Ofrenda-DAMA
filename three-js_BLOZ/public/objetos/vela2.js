 import* as THREE from "../js/three.module.js";

  export default function v2({x,y,z}){

// Espacio para colocar los objetos

//vela

var geometry01 = new THREE.CylinderGeometry( 7.14, 2.34, 15.68, 33 ); 
var material01 = new THREE.MeshLambertMaterial( {color: 0xffffff, side: THREE.DoubleSide } ); 
var mesh01 = new THREE.Mesh( geometry01, material01 );
mesh01.position.set(0,10,0);
//scene.add(mesh01);


var geometry02 = new THREE.OctahedronGeometry(3,0);
var material02 = new THREE.MeshLambertMaterial( {color: 0xFF8000, side: THREE.DoubleSide} ); 
var mesh02 = new THREE.Mesh( geometry02, material02 ); 
mesh02.position.set(0,20 ,0);
//scene.add(mesh02);


var vela2 = new THREE.Group();
   vela2.add(mesh01, mesh02);
   vela2.position.set(x,y,z);

   return vela2;
}
