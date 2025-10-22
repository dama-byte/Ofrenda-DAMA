import* as THREE from "../js/three.module.js";

  export default function b1({x,y,z}){
  //____________Comienza codigo mesa___________________________________________
 
  //3d box nivel 1
    var geometry1 = new THREE.BoxGeometry(90,7,90);
    //var material01 = new THREE.MeshBasicMaterial({
      //color: 0x8C79C9
    //}); 
    var texture1 = new THREE.TextureLoader().load("./image/mantel.jpg");
    var material01= new THREE.MeshBasicMaterial({map:texture1});
    var mesh01 = new THREE.Mesh(geometry1, material01);
    
    mesh01.position.set(0, 0, 0);
   //scene.add(mesh01);

//3d box nivel 2
    var geometry2 = new THREE.BoxGeometry(70,7,70);
    //var material02 = new THREE.MeshBasicMaterial({
      //color: 0x8C79C10
    //}); 
    var texture1 = new THREE.TextureLoader().load("./image/mantel.jpg");
    var material02= new THREE.MeshBasicMaterial({map:texture1});
    var mesh02 = new THREE.Mesh(geometry2, material02);
    
    mesh02.position.set(0, 7, 0);
  // scene.add(mesh02);
//3d box nivel 3
    var geometry3 = new THREE.BoxGeometry(50,7,50);
    //var material03 = new THREE.MeshBasicMaterial({
      //color: 0x8C79C9
    //}); 
    var texture1 = new THREE.TextureLoader().load("./image/mantel.jpg");
    var material03= new THREE.MeshBasicMaterial({map:texture1});
    var mesh03 = new THREE.Mesh(geometry3, material03);
    
    mesh03.position.set(0, 14, 0);
   // scene.add(mesh03);
//3d box nivel 4
    var geometry4 = new THREE.BoxGeometry(25,7,25);
    //var material04 = new THREE.MeshBasicMaterial({
      //color: 0x8C79C10
    //}); 

    var texture1 = new THREE.TextureLoader().load("./image/mantel.jpg");
    var material04= new THREE.MeshBasicMaterial({map:texture1});
    var mesh04 = new THREE.Mesh(geometry4, material04);
    
    mesh04.position.set(0, 21, 0);
   // scene.add(mesh04);

var base = new THREE.Group();
   base.add(mesh01,mesh02,mesh03,mesh04);
   base.position.set(x,y,z);

   return base;
}
