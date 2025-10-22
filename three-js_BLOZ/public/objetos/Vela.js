  import* as THREE from "../js/three.module.js";

  export default function v1({x,y,z}){
  //____________Comienza codigo vela____________________________________________
//cilindro vaso

var geometry02 = new THREE.CylinderGeometry(4,2,8);
    var material02 = new THREE.MeshLambertMaterial({
        color: 0xC9F2FF
    });
    var mesh02= new THREE.Mesh(geometry02, material02);
    mesh02.position.set(0, 10, 0);
    //scene.add(mesh02);

//cilindro vela-cera

var geometry02 = new THREE.CylinderGeometry(3.5,1,6);
    var material02 = new THREE.MeshLambertMaterial({
        color: 0xFBF5FF
    });
    var mesh03= new THREE.Mesh(geometry02, material02);
    mesh03.position.set(0, 11.10, 0);
//scene.add(mesh03);


    //tetra flama

    var geometry11 = new THREE.TetrahedronGeometry(0.8,1);
    var material11 = new THREE.MeshLambertMaterial({
        color: 0xFFF41F
    });
    var mesh4= new THREE.Mesh(geometry11, material11);
    mesh4.position.set(0, 15, 0);
    //scene.add(mesh4);

    //cilindro pabilo

var geometry08 = new THREE.CylinderGeometry(0.2,0.2,6,10,10);
    var material08 = new THREE.MeshLambertMaterial({
        color: 0xF3E8FF
    });
    var mesh5= new THREE.Mesh(geometry08, material08);
    mesh5.position.set(0, 12, 0);
   // scene.add(mesh5);

   var vela = new THREE.Group();
   vela.add(mesh02,mesh03,mesh4,mesh5);
   vela.position.set(x,y,z);

   return vela;
}