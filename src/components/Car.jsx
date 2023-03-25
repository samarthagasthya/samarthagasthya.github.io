import React from "react";
import * as THREE from "three";
import { useEffect } from "react";
import { ThemeContext } from "styled-components";

const CarFrame = () => {

    const theme = React.useContext(ThemeContext);

    const canvasRef = React.useRef(null);

    const scene = new THREE.Scene();
    scene.background=null;
    const ambientLight = new THREE.AmbientLight(0xffffff,0.6);
    scene.add(ambientLight);
    const dirLight = new THREE.DirectionalLight(0xffffff,0.8);
    dirLight.position.set(200,500,300);
    scene.add(dirLight);

    const aspectRatio = 300 / 200;
    const camW=150;
    const camH = camW / aspectRatio;

    const camera = new THREE.OrthographicCamera(
        camW / -2,
        camW / 2,
        camH /2,
        camH / -2,
        0,
        1000
    );
    camera.position.set(200,200,200);
    camera.lookAt(0,10,0);

    const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
    renderer.setSize(400,300);
    renderer.render(scene,camera);

   // document.body.appendChild(renderer.domElement);

    const car = createCar();
    scene.add(car);
    renderer.render(scene,camera);
    useEffect(()=> {
        canvasRef.current.appendChild(renderer.domElement);
    },[canvasRef]);

    return  (
        <div ref={e=>{canvasRef.current=e}}>
            {console.log(canvasRef)}
        </div>
    )

}


const createWheels = () => {
    const geometry = new THREE.BoxGeometry(12,12,33);
    const material = new THREE.MeshLambertMaterial({ color: 0x333333});
    return new THREE.Mesh(geometry,material);
}

const createCar = () => {
    const car = new THREE.Group();
    const backW = createWheels();
    backW.position.y=6;
    backW.position.x=-18;
    car.add(backW);

    const frontW = createWheels();
    frontW.position.y = 6;
    frontW.position.x = 18;
    car.add(frontW);

    const main = new THREE.Mesh(
        new THREE.BoxGeometry(60,15,30),
        new THREE.MeshLambertMaterial({color: 0x78b14b})
    );
    main.position.y=12;
    car.add(main);

    const cft = carFrontTexture();
    const cbt = carFrontTexture();
    const crst = getCarSideTexture();
    const clst = getCarSideTexture();
    clst.center = new THREE.Vector2(0.5,0.5);
    clst.rotation = Math.PI;
    clst.flipY=false;

    const cabin = new THREE.Mesh(
        new THREE.BoxGeometry(33,12,24),
        new THREE.MeshLambertMaterial({map: cft}),
        new THREE.MeshLambertMaterial({map: cbt}),
        new THREE.MeshLambertMaterial({color: 0xffffff}),
        new THREE.MeshLambertMaterial({color: 0xffffff}),
        new THREE.MeshLambertMaterial({map: crst}),
        new THREE.MeshLambertMaterial({map: clst})
    );
    cabin.position.x=-6;
    cabin.position.y=25.5;
    car.add(cabin);
    return car;
}


const carFrontTexture = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 32;
    const ctx = canvas.getContext("2d");

    ctx.fillStyle="#ffffff";
    ctx.fillRect(0,0,64,32);
    ctx.fillStyle="#666666";
    ctx.fillRect(8,8,48,24);
    return new THREE.CanvasTexture(canvas);
}

const getCarSideTexture = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 128;
    canvas.height = 32;
    const context = canvas.getContext("2d");
  
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, 128, 32);
  
    context.fillStyle = "#666666";
    context.fillRect(10, 8, 38, 24);
    context.fillRect(58, 8, 60, 24);
  
    return new THREE.CanvasTexture(canvas);
  }

  export default React.memo(CarFrame);