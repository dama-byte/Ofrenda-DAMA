    import* as THREE from "../js/three.module.js";

  export default function pla2({x,y,z}){

  
//______Parte interior del plato______
    
 var geometry11  = new THREE.CylinderGeometry(3, 6, 0.9, 80);
var material11 = new THREE.MeshLambertMaterial({
  color: 0xd8c6a1,
 
});
var mesh11 = new THREE.Mesh(geometry11, material11);
mesh11.position.set(0, 2.7, 0);
mesh11.scale.y = .8; 
//scene.add(mesh11);
var plato2 = new THREE.Group();
   plato2.add(mesh11);
   plato2.position.set(x,y,z);

   return plato2;
}