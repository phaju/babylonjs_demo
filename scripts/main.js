import * as BABYLON from "babylonjs/babylon"

const canvas = document.getElementById("renderCanvas"); // Get the canvas element
const engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

// Add your code here matching the playground format
const createScene = function () {

    const scene = new BABYLON.Scene(engine);  

    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 15, new BABYLON.Vector3(0, 0, 0));
    camera.attachControl(canvas, true);
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));

    const ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 5, height: 5});

    const groundMAt = new BABYLON.StandardMaterial("groundMat");
    groundMAt.diffuseColor = new BABYLON.Color3(0.180, 0.204, 0.251);
    ground.material = groundMAt;

    const tab = BABYLON.MeshBuilder.CreateBox("box", { width: 1.7, height: 2.5, depth: 0.084});
    tab.position.y = 1.5;
    tab.rotation.x = BABYLON.Tools.ToRadians(10);

    const stand = BABYLON.MeshBuilder.CreateBox("box", { width: 1.3, height : 0.4, depth: 0.5});
    stand.position = new BABYLON.Vector3(0, 0.6, 0.1);
    stand.rotation.x = BABYLON.Tools.ToRadians(10);

    const standMat = new BABYLON.StandardMaterial("standMat");
    standMat.diffuseColor = new BABYLON.Color3(0.925, 0.937, 0.957);
    stand.material = standMat;

    const pen = BABYLON.MeshBuilder.CreateCylinder("cylinder", { diameter: 0.1, height : 1.7, tesselation: 3});
    pen.position = new BABYLON.Vector3(1, 1.25, -0.5);
    pen.rotation.x = BABYLON.Tools.ToRadians(10);

    return scene;
};

const scene = createScene(); //Call the createScene function

// Register a render loop to repeatedly render the scene
engine.runRenderLoop(function () {
        scene.render();
});

// Watch for browser/canvas resize events
window.addEventListener("resize", function () {
        engine.resize();
});