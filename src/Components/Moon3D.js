import React, {Component} from "react";
import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import "../App.css";

class Moon extends Component {

    componentDidMount(){
        let scene, camera, renderer;

      function init() {
        scene = new THREE.Scene();
        // scene.background = new THREE.Color(0x1a1a1a);

        camera = new THREE.PerspectiveCamera(40,window.innerWidth/window.innerHeight,1,1000);
        camera.position.x = 1;
        camera.position.y = 1;
        camera.position.z = 60;
        camera.lookAt(scene.position);

        const stars = document.querySelector('.b');
        renderer = new THREE.WebGLRenderer({stars,antialias:true, alpha:true,});
        renderer.setSize(window.innerWidth,window.innerHeight);
        stars.appendChild(renderer.domElement);

        let loader = new GLTFLoader();
        loader.load('./scene.gltf', function(gltf){
          let moon = gltf.scene.children[0];
          scene.add(gltf.scene);
          animate();
        });

        let hlight = new THREE.AmbientLight (0x404040,5);
        scene.add(hlight);

        let directionalLight = new THREE.DirectionalLight(0xc7c7c7, 2);
        directionalLight.position.set(0, 1, 0);
        directionalLight.castShadow = true;
        scene.add(directionalLight);
        let light3 = new THREE.PointLight(0xc4c4c4, 1);
        light3.position.set(0, 100, -500);
        scene.add(light3);
        let light4 = new THREE.PointLight(0xc4c4c4, 1);
        light4.position.set(-500, 300, 500);
        scene.add(light4);

      }

      function render() {

        scene.position.set(-10, 0, 0);
        scene.rotation.x += 0.002;
        scene.rotation.z += 0.001;

        renderer.render( scene, camera );

        }

      function animate() {
        requestAnimationFrame(animate);
        render();
      }

      init();
    }

    render(){
       return(
        <canvas className='b'>

        </canvas>
        ) 
    }
    
}

export default Moon;
