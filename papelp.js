 import* as THREE from "../js/three.module.js";

  export default function pp1({x,y,z}){
  //____________Comienza codigo papel____________________________________________
    
    //3d box foto //papel picado

var geometry03 = new THREE.BoxGeometry(9.5,6.5,0.2);
    //var material03 = new THREE.MeshBasicMaterial({
       //color: 0xFFF6EB
    //});

    var texture1 = new THREE.TextureLoader().load("./image/pp5.jpg");
    var material03= new THREE.MeshBasicMaterial({map:texture1});
    var mesh03 = new THREE.Mesh(geometry03, material03);
    mesh03.position.set(0, 30, 0.3);
    //scene.add(mesh03);


var papelp = new THREE.Group();
   papelp.add(mesh03);
   papelp.position.set(x,y,z);

   return papelp;
}