 import* as THREE from "../js/three.module.js";

  export default function pa2({x,y,z}){
 
  //____________Comienza codigo paso____________________________________________
   


//3d box nivel 1
    var geometry1 = new THREE.BoxGeometry(100,.1,50);
    //var material01 = new THREE.MeshBasicMaterial({
      //color: 0x8C79C9
    //}); 
    var texture1 = new THREE.TextureLoader().load("./image/aserrin.jpg");
    var material01= new THREE.MeshBasicMaterial({map:texture1});
    var mesh01 = new THREE.Mesh(geometry1, material01);
    
    mesh01.position.set(0, 0, 0);
    mesh01.rotation.set(0,1.57,0);
   // scene.add(mesh01);


var paso3 = new THREE.Group();
   paso3.add(mesh01);
   paso3.position.set(x,y,z);

   return paso3;
}