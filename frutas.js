
  import* as THREE from "../js/three.module.js";

  export default function fru1({x,y,z}){
//  comienza codigo Espacio para colocar los objetos
   
  

  

//_______Manzana____

var geometry4  = new THREE.SphereGeometry(2, 50, 6);
var material4 = new THREE.MeshLambertMaterial({
  color: 0xc00000,
 
});
var mesh04 = new THREE.Mesh(geometry4, material4);
mesh04.position.set(0, 5.6, 0); 
//scene.add(mesh04);
//_______TALLO MANZANA_______
var geometry5  = new THREE.CylinderGeometry(0.1, 0.1, 0.6, 8);
var material5 = new THREE.MeshLambertMaterial({
  color: 0x5b3a00,
 
});
var mesh05 = new THREE.Mesh(geometry5, material5);
mesh05.position.set(0.05, 7.8, 0); 
//scene.add(mesh05);
//___________HOJA 1________

var geometry6  = new THREE.BoxGeometry(0.3, 0, 1,1 );
var material6 = new THREE.MeshLambertMaterial({
  color: 0x6FF527,
 
});
var mesh06 = new THREE.Mesh(geometry6, material6);
mesh06.position.set(-0.1, 7.9, 0); 
mesh06.rotation.set(1.04,0.5,0);
//scene.add(mesh06);

//___________HOJA 2________

var geometry16  = new THREE.BoxGeometry(0.3, 0, 1,1 );
var material16 = new THREE.MeshLambertMaterial({
  color: 0x6FF527,
 
});
var mesh16 = new THREE.Mesh(geometry16, material16);
mesh16.position.set(0.1, 7.9, 0); 
mesh16.rotation.set(1.04,-0.5,-0);
//scene.add(mesh16);

//______platano_________
var geometry07  = new THREE.TorusGeometry( 3,0.8,9,50,2.5);
var material07 = new THREE.MeshLambertMaterial({
  color: 0xffe135,

});
var mesh07= new THREE.Mesh(geometry07, material07);
mesh07.position.set(3.5, 7.5, 1); 
mesh07.rotation.z = -2.2;
mesh07.rotation.y = 1.5;
//scene.add(mesh07);
//_______TALLO______
var geometry08  = new THREE.CylinderGeometry( 0.9,0,1,50);
var material08 = new THREE.MeshLambertMaterial({
  color: 0xf,

});
var mesh08= new THREE.Mesh(geometry08, material08);
mesh08.position.set(3.4, 5.4, 3); 
mesh08.rotation.x = -2.2;
//scene.add(mesh08);

//_____tallo arrba____

var geometry15  = new THREE.CylinderGeometry( 0.2,0,1,50);
var material15 = new THREE.MeshLambertMaterial({
  color: 0x6B5603
,

});
var mesh15= new THREE.Mesh(geometry15, material15);
mesh15.position.set(3.7, 9.3, -1.8); 
mesh15.rotation.x = 3;
mesh15.rotation. y= 2;
//scene.add(mesh15);

//_____centro____
var geometry09  = new THREE.SphereGeometry( 0.8,50,50);
var material09 = new THREE.MeshLambertMaterial({
  color: 0xF5C527,

});
var mesh09= new THREE.Mesh(geometry09, material09);
mesh09.position.set(3.7,8.4,-1.9); 
mesh09.rotation.x = 3;
mesh09.rotation. y= 2;
mesh09.scale.y = .9; 
//scene.add(mesh09);
//______Naranja______
var geometry10  = new THREE.SphereGeometry(2, 50, 60);
var material10 = new THREE.MeshLambertMaterial({
  color: 0xFFB229,
 
});
var mesh10 = new THREE.Mesh(geometry10, material10);
mesh10.position.set(-4.5, 5.6, 0); 
//scene.add(mesh10);

//_______TALLO naranja_______
var geometry11  = new THREE.CylinderGeometry(0.1, 0.1, 0.6, 8);
var material11 = new THREE.MeshLambertMaterial({
  color: 0x5b3a00,
 
});
var mesh11 = new THREE.Mesh(geometry11, material11);
mesh11.position.set(-4.5, 7.8, 0); 
//scene.add(mesh11);
//___________HOJA 1________

var geometry12 = new THREE.BoxGeometry(0.3, 0, 1,1 );
var material12 = new THREE.MeshLambertMaterial({
  color: 0x6FF527,
 
});
var mesh12 = new THREE.Mesh(geometry12, material12);
mesh12.position.set(-4.5, 7.9, 0); 
mesh12.rotation.set(1.04,0.5,0);
//scene.add(mesh12);

//_______Manzana____

var geometry131 = new THREE.SphereGeometry(2, 50, 6);
var material131 = new THREE.MeshLambertMaterial({
  color: 0x57A83B,
 
});
var mesh131 = new THREE.Mesh(geometry131, material131);
mesh131.position.set(-1.5, 5.6, 4.4); 
//scene.add(mesh131);


//_______TALLO MANZANA_______
var geometry13  = new THREE.CylinderGeometry(0.1, 0.1, 0.6, 8);
var material13 = new THREE.MeshLambertMaterial({
  color: 0x5b3a00,
 
});
var mesh13 = new THREE.Mesh(geometry13, material13);
mesh13.position.set(-1.5, 7.8, 4.4); 
//scene.add(mesh13);

//___________HOJA 1________

var geometry14  = new THREE.BoxGeometry(0.3, 0, 1,1 );
var material14 = new THREE.MeshLambertMaterial({
  color: 0x6FF527,
 
});
var mesh14 = new THREE.Mesh(geometry14, material14);
mesh14.position.set(-1.5, 7.8, 4.4); 
mesh14.rotation.set(1.04,0.5,0);
//scene.add(mesh14);

var frutas = new THREE.Group();
   frutas.add(mesh04,mesh05,mesh06,mesh07,mesh08,mesh09,mesh10,mesh11,mesh12,mesh13,mesh131,mesh14,mesh15,mesh16);
   frutas.position.set(x,y,z);

   return frutas;
}
