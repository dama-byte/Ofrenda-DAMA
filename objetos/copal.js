import* as THREE from "../js/three.module.js";

  export default function co1({x,y,z}){
  
//copa
var geometry01 = new THREE.CylinderGeometry(5,2.5,4,37);
var material01 = new THREE.MeshLambertMaterial({color:0x320000,side: THREE.DoubleSide});
var mesh01 = new THREE.Mesh(geometry01,material01);
mesh01.position.set(0,10,0);
//scene.add(mesh01);


//palo DE LA COPA
var geometry02 = new THREE.CylinderGeometry(1,1,9,10);
var material02 = new THREE.MeshLambertMaterial({color:0x320000,side: THREE.DoubleSide});
var mesh02 = new THREE.Mesh(geometry02,material02);
mesh02.position.set(0,4.5,0);
//scene.add(mesh02);


//base
var geometry03 = new THREE.CylinderGeometry(1,3,3,10);
var material03 = new THREE.MeshLambertMaterial({color:0x320000,side: THREE.DoubleSide});
var mesh03 = new THREE.Mesh(geometry03,material03);
mesh03.position.set(0,1.5,0);
//scene.add(mesh03);

//simulacion de fondo
var geometry04 = new THREE.CircleGeometry( 4.5, 32 );
var material04 = new THREE.MeshLambertMaterial({color:0x000000,side: THREE.DoubleSide});
var mesh04 = new THREE.Mesh(geometry04,material04);
mesh04.position.set(0,12.05,0);
mesh04.rotation.set(1.57,0,0);
//scene.add(mesh04);

var copal = new THREE.Group();
   copal.add(mesh01,mesh02, mesh03,mesh04);
   copal.position.set(x,y,z);

   return copal;
}

