// components/Sphere.js
import * as THREE from 'three';

const Sphere = ({ rotationX, rotationY }: { rotationX: number, rotationY: number }) => {
  // Create a sphere geometry
  const geometry = new THREE.SphereGeometry(1, 32, 32);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const sphere = new THREE.Mesh(geometry, material);
  sphere.rotation.x = rotationX;
  sphere.rotation.y = rotationY;

  return (
    <div id="sphere-container">
      {/* The canvas element will be added here during build */}
    </div>
  );
};

export async function getStaticProps() {
  // Calculate the initial rotation values here
  const rotationX = 0.0;
  const rotationY = 0.0;

  return {
    props: {
      rotationX,
      rotationY,
    },
  };
}

export default Sphere;
