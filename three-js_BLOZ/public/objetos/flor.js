import* as THREE from "../js/three.module.js";
import {RoundedBoxGeometry} from "../js/RoundedBoxGeometry.js"

  export default function fl1({x,y,z}){
  
// Espacio para colocar los objetos

//Cubo Redondeado
//Flores Blancas 
var geometry02 = new RoundedBoxGeometry(2.5,10,2.5,8,2);
var material02 = new THREE.MeshLambertMaterial({color:0xff6600, side: THREE.DoubleSide});
var mesh02 = new THREE.Mesh(geometry02,material02);
//scene.add(mesh02);
mesh02.position.set(0,0,0);
mesh02.castShadow = true;

var geometry03 = new RoundedBoxGeometry(2.5,10,2.5,8,2);
var material03 = new THREE.MeshLambertMaterial({color:0xff6600, side: THREE.DoubleSide});
var mesh03 = new THREE.Mesh(geometry03,material03);
//scene.add(mesh03);
mesh03.rotation.set(0,0,0.785);
mesh03.castShadow = true;

var geometry04 = new RoundedBoxGeometry(2.5,10,2.5,8,2);
var material04 = new THREE.MeshLambertMaterial({color:0xff6600, side: THREE.DoubleSide});
var mesh04 = new THREE.Mesh(geometry04,material04);
//scene.add(mesh04);
mesh04.rotation.set(0,0,1.57);
mesh04.castShadow = true;

var geometry05 = new RoundedBoxGeometry (2.5,10,2.5,8,2);
var material05 = new THREE.MeshLambertMaterial({color:0xff6600, side: THREE.DoubleSide});
var mesh05 = new THREE.Mesh(geometry05,material05);
//scene.add(mesh05);
mesh05.rotation.set(0,0,2.355);
mesh05.castShadow = true;




//Codigo para rotacion 
var flor1= new THREE.Group();
flor1.add(mesh02,mesh03,mesh04,mesh05);
//scene.add(flor1);
flor1.position.set(0,0,0);

var flor1A = flor1.clone();
//scene.add(flor1A);
flor1A.position.set(0,0,0);
flor1A.rotation.set(0,1.57,0);

var flor2 =flor1.clone();
//scene.add(flor2);
flor2.position.set(10,0,0);

var flor2A = flor1.clone();
//scene.add(flor2A);
flor2A.position.set(10,0,0);
flor2A.rotation.set(0,1.57,0);

var flor3 =flor1.clone();
//scene.add(flor3);
flor3.position.set(-10,0,0);

var flor3A = flor1.clone();
//scene.add(flor3A);
flor3A.position.set(-10,0,0);
flor3A.rotation.set(0,1.57,0);

var flor4 =flor1.clone();
//scene.add(flor4);
flor4.position.set(-20,0,0);

var flor4A = flor1.clone();
//scene.add(flor4A);
flor4A.position.set(-20,0,0);
flor4A.rotation.set(0,1.57,0);

var flor5 =flor1.clone();
//scene.add(flor5);
flor5.position.set(-30,0,0);

var flor5A = flor1.clone();
//scene.add(flor5A);
flor5A.position.set(-30,0,0);
flor5A.rotation.set(0,1.57,0);

var flor6 =flor1.clone();
//scene.add(flor6);
flor6.position.set(20,0,0);

var flor6A = flor1.clone();
//scene.add(flor6A);
flor6A.position.set(20,0,0);
flor6A.rotation.set(0,1.57,0);

var flor7 =flor1.clone();
//scene.add(flor7);
flor7.position.set(30,0,0);

var flor7A = flor1.clone();
//scene.add(flor7A);
flor7A.position.set(30,0,0);
flor7A.rotation.set(0,1.57,0);


var flor = new THREE.Group();
   flor.add(flor1,flor1A,flor2,flor2A,flor3,flor3A,flor4,flor4A,flor5,flor5A,flor6,flor6A,flor7,flor7A);
   flor.position.set(x,y,z);

   return flor;
}

