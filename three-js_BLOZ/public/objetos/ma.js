  import* as THREE from "../js/three.module.js";

  export default function m1({x,y,z}){
  //____________Comienza codigo marco____________________________________________
    //3d box marco_cafe

var geometry02 = new THREE.BoxGeometry(10,12,1);
    var material02 = new THREE.MeshBasicMaterial({
        color: 0x905304
    });
    var mesh02 = new THREE.Mesh(geometry02, material02);
    mesh02.position.set(0, 30, 0);
    //scene.add(mesh02);

    //3d box foto

var geometry03 = new THREE.BoxGeometry(6.5,8.5,0.5);
    var material03 = new THREE.MeshBasicMaterial({
        color: 0xFFF6EB
    });
    var mesh03 = new THREE.Mesh(geometry03, material03);
    mesh03.position.set(0, 30, 0.3);
    //scene.add(mesh03);

 var marco = new THREE.Group();
   marco.add(mesh02,mesh03);
   marco.position.set(x,y,z);

   return marco;
}

