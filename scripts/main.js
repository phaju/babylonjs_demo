/// <reference path="babylon.module.d.ts"/>

const canvas = document.getElementById("renderCanvas"); // Get the canvas element
const engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

// Add your code here matching the playground format
const createScene = function () {

    const scene = new BABYLON.Scene(engine);  

    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 15, new BABYLON.Vector3(0, 0, 0));
    camera.attachControl(canvas, true);
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));

    const ground = createGround();
    const tablet = createTablet();

    return scene;
};

const createGround = function () {
    const groundMAt = new BABYLON.StandardMaterial("groundMat");
    groundMAt.diffuseColor = new BABYLON.Color3(0.180, 0.204, 0.251);
    const ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 8, height: 8});
    ground.material = groundMAt;
}

const createTablet = function() {
    const tabMat = new BABYLON.StandardMaterial("tabMat");
    tabMat.diffuseTexture = new BABYLON.Texture("images/tablet.png");

    const faceUV = [];
    faceUV[0] = new BABYLON.Vector4(0.5, 0, 0.9837, 1);
    faceUV[1] = new BABYLON.Vector4(0, 0, 0.4837, 1);
    faceUV[2] = new BABYLON.Vector4(0.9837, 0, 1, 1);
    faceUV[3] = new BABYLON.Vector4(0.4837, 0, 0.5, 1);
    faceUV[4] = new BABYLON.Vector4(0.9837, 0, 1, 1);
    faceUV[5] = new BABYLON.Vector4(0.4837, 0, 0.5, 1);
    
    const tab = BABYLON.MeshBuilder.CreateBox("box", { width: 3.4, height: 5, depth: 0.168, faceUV: faceUV, wrap: true});
    tab.position.y = 3;
    tab.rotation.x = BABYLON.Tools.ToRadians(10);
    tab.material = tabMat;

    const stand = BABYLON.MeshBuilder.CreateBox("box", { width: 2.6, height : 0.8, depth: 1});
    stand.position = new BABYLON.Vector3(0, 1, 0.2);
    stand.rotation.x = BABYLON.Tools.ToRadians(10);

    const standMat = new BABYLON.StandardMaterial("standMat");
    standMat.diffuseColor = new BABYLON.Color3(0.925, 0.937, 0.957);
    stand.material = standMat;
}

const scene = createScene(); //Call the createScene function

// Register a render loop to repeatedly render the scene
engine.runRenderLoop(function () {
        scene.render();
});

// Watch for browser/canvas resize events
window.addEventListener("resize", function () {
        engine.resize();
});