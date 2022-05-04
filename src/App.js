import { Suspense } from "react";
// R3F + Drei
import { Canvas } from "@react-three/fiber";
import { OrbitControls, shaderMaterial } from "@react-three/drei";
// Shaders
import vertexShader from "./Three/Shaders/vertexShader.glsl";
import fragmentShader from "./Three/Shaders/fragmentShader.glsl";
// Styling
import "./Scss/style.scss";

function Scene() {
  console.log(fragmentShader);

  return (
    <mesh>
      <boxBufferGeometry />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
}

function App() {
  return (
    <div className="App">
      <Canvas>
        <OrbitControls />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
