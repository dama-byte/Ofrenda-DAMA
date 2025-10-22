 import* as THREE from "../js/three.module.js";

  export default function pa1({x,y,z}){
 
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
   // scene.add(mesh01);


var paso = new THREE.Group();
   paso.add(mesh01);
   paso.position.set(x,y,z);

   return paso;
}