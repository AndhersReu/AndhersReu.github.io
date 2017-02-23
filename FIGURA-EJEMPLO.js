

var escena = new THREE.Scene();
var camara = new THREE.PerspectiveCamera();
camara.position.z = 2;
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerHeight*.9, window.innerHeight*.9 );
document.body.appendChild( renderer.domElement );
renderer.render( escena, camara );


var forma = new THREE.BoxGeometry( 1, 1, 1 );
var cubo  = new THREE.Mesh( forma );
cubo.rotation.x += 0.8;
cubo.rotation.y += 0.8;
escena.add( cubo );
renderer.render( escena, camara );

