import* as THREE from "../js/three.module.js";
import {RoundedBoxGeometry} from "../js/RoundedBoxGeometry.js"

  export default function arc1({x,y,z}){
  
//  comienza codigo Espacio para colocar los objetos


//Flores Naranjas
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

var geometry05 = new RoundedBoxGeometry(2.5,10,2.5,8,2);
var material05 = new THREE.MeshLambertMaterial({color:0xff6600, side: THREE.DoubleSide});
var mesh05 = new THREE.Mesh(geometry05,material05);
//scene.add(mesh05);
mesh05.rotation.set(0,0,2.355);
mesh05.castShadow = true;




//Codigo para rotacion 

//flor central___________________________________________
var flor1= new THREE.Group();
flor1.add(mesh02,mesh03,mesh04,mesh05);
//scene.add(flor1);
flor1.position.set(0,48,0);

//flor central 2___________________________________________

var flor1A = flor1.clone();
//scene.add(flor1A);
flor1A.position.set(0,48,0);
flor1A.rotation.set(0,1.57,0);

//flor izq 1___________________________________________

var flor2 =flor1.clone();
//scene.add(flor2);
flor2.position.set(8,45,0);

//flor izq 1.1___________________________________________

var flor2A = flor1.clone();
//scene.add(flor2A);
flor2A.position.set(8,45,0);
flor2A.rotation.set(0,1.57,0);

//flor der 1___________________________________________

var flor3 =flor1.clone();
//scene.add(flor3);
flor3.position.set(-8,45,0);

//flor der 1.1___________________________________________

var flor3A = flor1.clone();
//scene.add(flor3A);
flor3A.position.set(-8,45,0);
flor3A.rotation.set(0,1.57,0);

//flor der 2___________________________________________

var flor4 =flor1.clone();
//scene.add(flor4);
flor4.position.set(-15,40,0);

//flor der 2.1___________________________________________

var flor4A = flor1.clone();
//scene.add(flor4A);
flor4A.position.set(-15,40,0);
flor4A.rotation.set(0,1.57,0);

//flor der 3___________________________________________

var flor5 =flor1.clone();
//scene.add(flor5);
flor5.position.set(-18,31,0);

//flor der 3.1___________________________________________

var flor5A = flor1.clone();
//scene.add(flor5A);
flor5A.position.set(-18,31,0);
flor5A.rotation.set(0,1.57,0);

//flor der 4___________________________________________

var flor6 =flor1.clone();
//scene.add(flor6);
flor6.position.set(-18,21,0);

//flor der 4.1___________________________________________

var flor6A = flor1.clone();
//scene.add(flor6A);
flor6A.position.set(-18,21,0);
flor6A.rotation.set(0,1.57,0);

//flor der 5___________________________________________

var flor11 =flor1.clone();
//scene.add(flor11);
flor11.position.set(-18,11,0);

//flor der 5.1___________________________________________

var flor11A = flor1.clone();
//scene.add(flor11A);
flor11A.position.set(-18,11,0);
flor11A.rotation.set(0,1.57,0);

//Termina lado derecho_____________________________________________________________

//flor izq 6___________________________________________

var flor7 =flor1.clone();
//scene.add(flor7);
flor7.position.set(15,40,0);

//flor izq 6.1___________________________________________

var flor7A = flor1.clone();
//scene.add(flor7A);
flor7A.position.set(15,40,0);
flor7A.rotation.set(0,1.57,0);

//flor izq 7___________________________________________

var flor8 =flor1.clone();
//scene.add(flor8);
flor8.position.set(18,31,0);

//flor izq 7.1___________________________________________

var flor8A = flor1.clone();
//scene.add(flor8A);
flor8A.position.set(18,31,0);
flor8A.rotation.set(0,1.57,0);

//flor izq 8___________________________________________

var flor9 =flor1.clone();
//scene.add(flor9);
flor9.position.set(18,21,0);

//flor izq 8.1___________________________________________

var flor9A = flor1.clone();
//scene.add(flor9A);
flor9A.position.set(18,21,0);
flor9A.rotation.set(0,1.57,0);

//flor izq 9___________________________________________

var flor10 =flor1.clone();
//scene.add(flor10);
flor10.position.set(18,11,0);

//flor izq 9.1___________________________________________

var flor10A = flor1.clone();
//scene.add(flor10A);
flor10A.position.set(18,11,0);
flor10A.rotation.set(0,1.57,0);


var arco = new THREE.Group();
   arco.add(flor1,flor1A,flor2,flor2A,flor3,flor3A,flor4,flor4A,flor5,flor5A,flor6,flor6A,flor7,flor7A,flor8,flor8A,flor9,flor9A,flor10,flor10A,flor11,flor11A);
   arco.position.set(x,y,z);

   return arco;
}

