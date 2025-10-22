import* as THREE from "../js/three.module.js";

  export default function p1({x,y,z}){
  ///_______________ creacion de pan___________________
//plato

 // _________Base redondeada (pan principal)_______
    var geometry2= new THREE.SphereGeometry(5, 60, 60,);
    var material02 = new THREE.MeshLambertMaterial({
      color: 0xD4A76A, // tono de pan
    });
    var basePan = new THREE.Mesh(geometry2, material02);
    //scene.add(basePan);
    basePan.position.set(0, 5, 0);
    basePan.scale.y = .6; 
    //scene.add(mesh01);

    // Bolita central (superior)
    var geometry3 = new THREE.SphereGeometry(1.2, 32, 32);
    var material03= new THREE.MeshLambertMaterial({
      color: 0xBF8040,
    });
    var centro = new THREE.Mesh(geometry3, material03);
    //scene.add(centro);
    centro.position.set(0, 8.4, 0);
    centro.scale.y = .4; 
   //scene.add(mesh01);

    //______HUESITOS 1______

    var geometry4 = new THREE.CylinderGeometry(0.5,0.5, 5, 16);
var  material04 = new THREE.MeshLambertMaterial({ 
    color: 0xBF8040
});
var hueso1 = new THREE.Mesh(geometry4, material04);
//scene.add(hueso);
    hueso1.position.set(-0, 7.9, 2.2);
    hueso1.scale.set(0.5, 0.9, 0.5);
   hueso1.rotation.x = 1.90;

    //scene.add(mesh01);

    //______HUESITOS 2______

    var geometry05 = new THREE.CylinderGeometry(0.5,0.5, 4, 16);
var  material05 = new THREE.MeshLambertMaterial({ 
    color: 0xBF8040
});
var hueso2 = new THREE.Mesh(geometry05, material05);
//scene.add(hueso);
    hueso2.position.set(-0, 7.7, -2.7);
    hueso2.scale.set(0.5, 0.9, 0.5);
   hueso2.rotation.x = -1.90;
   //scene.add(mesh01);

      //______HUESITOS 3______

    var geometry06 = new THREE.CylinderGeometry(0.5,0.5, 5, 16);
var  material06 = new THREE.MeshLambertMaterial({ 
    color: 0xBF8040
});
var hueso3 = new THREE.Mesh(geometry06, material06);
//scene.add(hueso);
    hueso3.position.set(-2, 7.9, 0);
    hueso3.scale.set(0.5, 0.9, 0.5);
   hueso3.rotation.z = 1.90;
   //scene.add(mesh01);

   //______HUESITOS 4______

    var geometry07 = new THREE.CylinderGeometry(0.5,0.5, 5, 16);
var  material07 = new THREE.MeshLambertMaterial({ 
    color: 0xBF8040
});
var hueso4 = new THREE.Mesh(geometry07, material07);
//scene.add(hueso);
    hueso4.position.set(2, 7.9, 0);
    hueso4.scale.set(0.5, 0.9, 0.5);
   hueso4.rotation.z = -1.90;
   //scene.add(mesh01);

   //_______bolitas 1_________

var geometry8 = new THREE.SphereGeometry(.5, 32, 32);
    var material08= new THREE.MeshLambertMaterial({
      color: 0xBF8040,
    });
    var centro1 = new THREE.Mesh(geometry8, material08);
    //scene.add(centro1);
    centro1.position.set(0, 8.2, 2);
    centro1.scale.y = .4; 
    centro1.rotation.x = .4; 
    //scene.add(mesh01);

 //_______bolitas 1.1_________

var geometry9 = new THREE.SphereGeometry(.5, 32, 32);
    var material09= new THREE.MeshLambertMaterial({
      color: 0xBF8040,
    });
    var centro2 = new THREE.Mesh(geometry9, material09);
    //scene.add(centro1);
    centro2.position.set(0, 7.7, 3.4);
    centro2.scale.y = .4; 
    centro2.rotation.x = .4; 
    //scene.add(mesh01);
 //_______bolitas 2_________

var geometry10 = new THREE.SphereGeometry(.5, 32, 32);
    var material10= new THREE.MeshLambertMaterial({
      color: 0xBF8040,
    });
    var centro3 = new THREE.Mesh(geometry10, material10);
    //scene.add(centro1);
    centro3.position.set(0, 8.2, -2);
    centro3.scale.y = .4; 
    centro3.rotation.x = -.4; 
    //scene.add(mesh01);

 //_______bolitas 2.1_________

var geometry9 = new THREE.SphereGeometry(.5, 32, 32);
    var material09= new THREE.MeshLambertMaterial({
      color: 0xBF8040,
    });
    var centro4 = new THREE.Mesh(geometry9, material09);
    //scene.add(centro1);
    centro4.position.set(0, 7.7, -3.4);
    centro4.scale.y = .4; 
    centro4.rotation.x = -0.4; 
    //scene.add(mesh01);


 //_______bolitas 3_________

var geometry10 = new THREE.SphereGeometry(.5, 32, 32);
    var material10= new THREE.MeshLambertMaterial({
      color: 0xBF8040,
    });
    var centro5 = new THREE.Mesh(geometry10, material10);
    //scene.add(centro1);
    centro5.position.set(-2, 8.2, 0);
    centro5.scale.y = .4; 
    centro5.rotation.z = .5; 
    //scene.add(mesh01);

 //_______bolitas 3.1_________

var geometry9 = new THREE.SphereGeometry(.5, 32, 32);
    var material09= new THREE.MeshLambertMaterial({
      color: 0xBF8040,
    });
    var centro6 = new THREE.Mesh(geometry9, material09);
    //scene.add(centro1);
    centro6.position.set(-3.4, 7.7, 0);
    centro6.scale.y = .4; 
    centro6.rotation.z = 0.5; 
    //scene.add(mesh01);

 //_______bolitas 4_________

var geometry10 = new THREE.SphereGeometry(.5, 32, 32);
    var material10= new THREE.MeshLambertMaterial({
      color: 0xBF8040,
    });
    var centro7 = new THREE.Mesh(geometry10, material10);
    //scene.add(centro1);
    centro7.position.set(2, 8.2, 0);
    centro7.scale.y = .4; 
    centro7.rotation.z = -.5; 
    //scene.add(mesh01);

 //_______bolitas 4.1_________

var geometry9 = new THREE.SphereGeometry(.5, 32, 32);
    var material09= new THREE.MeshLambertMaterial({
      color: 0xBF8040,
    });
    var centro8 = new THREE.Mesh(geometry9, material09);
    //scene.add(centro1);
    centro8.position.set(3.4, 7.6, 0);
    centro8.scale.y = .4; 
    centro8.rotation.z = -0.5; 
    //scene.add(mesh01);


var pan = new THREE.Group();
   pan.add(basePan,centro,hueso1,hueso2,hueso3,hueso4,centro1,centro2,centro3,centro4,centro5,centro6,centro7,centro8);
   pan.position.set(x,y,z);

   return pan;
}

