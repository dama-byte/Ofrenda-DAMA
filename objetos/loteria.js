  import* as THREE from "../js/three.module.js";

  export default function m1({x,y,z}){

//loteria
var geometry02 = new THREE.BoxGeometry( 27.492, 30, 1 ); 
var texture02= new THREE.TextureLoader().load("./image/Loteria.jpg");
var mesh02=new THREE.MeshLambertMaterial({map:texture02});
var mesh02 = new THREE.Mesh( geometry02, mesh02 ); 
mesh02.position.set(10,15,20);
//scene.add(mesh02); 

var loteria = new THREE.Group();
   loteria.add(mesh02);
   loteria.position.set(x,y,z);

   return loteria;
}

