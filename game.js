// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 10, 20) 
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container').appendChild(renderer.domElement);

// Add basic lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(10, 10, 10);
scene.add(directionalLight);

// Create a basic car mesh
const carGeometry = new THREE.BoxGeometry(1, 1, 2);
const carMaterial = new THREE.MeshStandardMaterial({ color: 0x0000FF });
const car = new THREE.Mesh(carGeometry, carMaterial);
car.position.set(0, 0.5, 0);
scene.add(car);

// Define variables for car movement
const moveDistance = 0.1;
const rotationAngle = Math.PI / 60;

// Create an array to hold trees
const trees = [];

// Create a floor
const floorGeometry = new THREE.PlaneGeometry(600, 700);
const floorMaterial = new THREE.MeshStandardMaterial({ color: 0x00FF00 });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2; // Rotate the floor to lie flat
scene.add(floor);

// Move the floor down so it doesn't intersect with the car
floor.position.y = -0.5;

// Create a road texture
const roadTexture = new THREE.TextureLoader().load('road_texture.jpg');
roadTexture.wrapS = THREE.RepeatWrapping;
roadTexture.wrapT = THREE.RepeatWrapping;
roadTexture.repeat.set(10, 10); // Repeat the texture to cover the entire plane

// Create a road material
const roadMaterial = new THREE.MeshStandardMaterial({ map: roadTexture });

// Create a road geometry
const roadGeometry = new THREE.PlaneGeometry(10, 500); // Adjust the size as needed

// Create the road mesh
const road = new THREE.Mesh(roadGeometry, roadMaterial);
road.rotation.x = -Math.PI / 2; // Rotate the road to lie flat
scene.add(road);

// Position the road at the center of the plane
road.position.y = -0.49;


// Generate trees
function generateTrees() {
    const treeGeometry = new THREE.CylinderGeometry(0, 5, 15, 25);
    const treeMaterial = new THREE.MeshStandardMaterial({ color: 0x005000 });
    for (let i = 0; i < 20; i++) {
        const tree = new THREE.Mesh(treeGeometry, treeMaterial);
        const x = Math.random() * 200 - 100;
        const z = Math.random() * 200 - 100;
        tree.position.set(x, 0.5, z);
        scene.add(tree);
        trees.push(tree);
    }
}

// Generate initial trees
generateTrees();

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Set up variables to track arrow key state
const keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
};

// Event listeners for arrow key controls
document.addEventListener('keydown', (event) => {
    if (keys.hasOwnProperty(event.key)) {
        keys[event.key] = true;
    }
});

document.addEventListener('keyup', (event) => {
    if (keys.hasOwnProperty(event.key)) {
        keys[event.key] = false;
    }
});
// Render loop
function animate() {
    requestAnimationFrame(animate);

    // Move the car based on arrow key state
    if (keys.ArrowUp) {
        car.translateZ(moveDistance);
    }
    if (keys.ArrowDown) {
        car.translateZ(-moveDistance);
    }
    if (keys.ArrowLeft) {
        car.rotateY(rotationAngle);
    }
    if (keys.ArrowRight) {
        car.rotateY(-rotationAngle);
    }

    // Update camera position to follow the car
    const distance = 10; // Distance behind the car
    const angle = car.rotation.y; // Angle of the car's rotation
    const xOffset = Math.sin(angle) * distance;
    const zOffset = Math.cos(angle) * distance;
    const cameraTarget = new THREE.Vector3(car.position.x - xOffset, car.position.y + 3, car.position.z - zOffset);
    camera.position.lerp(cameraTarget, 0.1); // Smoothly interpolate camera position
    camera.lookAt(car.position);

    renderer.render(scene, camera);
}

animate();
