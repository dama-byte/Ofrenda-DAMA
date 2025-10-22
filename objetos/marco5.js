 import* as THREE from "../js/three.module.js";

  export default function mar5({x,y,z}){

//  comienza codigo Espacio para colocar los objetos

    var loader = new THREE.TextureLoader();
    /*
    var texture1 = new THREE.TextureLoader().load("./image/n1.jpg");
    var material01= new THREE.MeshLambertMaterial({map:texture1});
    
  */
    //mesh01.receiveShadow= true;
 
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
    // //Familiar Dulce

var geometry03 = new THREE.BoxGeometry(6.5,8.5,0.5);
    //var material03 = new THREE.MeshBasicMaterial({
       //color: 0xFFF6EB
    //});

    var texture1 = new THREE.TextureLoader().load("./image/p5.jpeg");
    var material03= new THREE.MeshBasicMaterial({map:texture1});
    var mesh03 = new THREE.Mesh(geometry03, material03);
    mesh03.position.set(0, 30, 0.3);
    //scene.add(mesh03);



var marco5 = new THREE.Group();
   marco5.add(mesh02,mesh03);
   marco5.position.set(x,y,z);

   return marco5;
}