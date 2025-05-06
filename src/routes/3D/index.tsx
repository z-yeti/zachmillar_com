import { Playground } from "@/containers/Playground";
import { useThemeVariable } from "@/hooks/useThemeVariable";
import { Canvas, ThreeEvent, useFrame, useThree } from "@react-three/fiber";
import { FC, useMemo, useRef, useState } from "react";
import * as THREE from "three";

const SPACING = 7;

const RippleGrid = () => {
  const ref = useRef<THREE.InstancedMesh>(null!);
  const squareColor = useThemeVariable("--color--squares");
  const { viewport } = useThree();
  const mouseRef = useRef<THREE.Vector2>(new THREE.Vector2());

  const handlePointerMove = (e: ThreeEvent<PointerEvent>) => {
    mouseRef.current.set(e.point.x, e.point.y);
  };

  const [positions] = useState(() => {
    const cols = Math.ceil(viewport.width / SPACING);
    const rows = Math.ceil(viewport.height / SPACING);
    const positions: THREE.Vector3[] = [];
    for (let x = 0; x < cols; x++) {
      for (let y = 0; y < rows; y++) {
        positions.push(
          new THREE.Vector3(
            x * SPACING - viewport.width / 2,
            y * SPACING - viewport.height / 2,
            0
          )
        );
      }
    }
    return positions;
  });

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame(() => {
    const mouse3D = new THREE.Vector3(
      mouseRef.current.x,
      mouseRef.current.y,
      0
    );

    positions.forEach((pos, i) => {
      const dist = pos.distanceTo(mouse3D);
      const z =
        (Math.sin(dist * 0.1 - performance.now() * 0.005) * 5) /
        (dist * 0.1 + 1);
      dummy.position.set(pos.x, pos.y, z);
      dummy.updateMatrix();
      ref.current.setMatrixAt(i, dummy.matrix);
    });
    ref.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <group onPointerMove={handlePointerMove}>
      <instancedMesh ref={ref} args={[undefined, undefined, positions.length]}>
        <boxGeometry args={[SPACING * 0.9, SPACING * 0.9, 1]} />
        <meshStandardMaterial color={squareColor} toneMapped={false} />
      </instancedMesh>
    </group>
  );
};

export const ThreeD: FC = () => {
  return (
    <Playground
      description="This is a playground for 3D graphics using Three.js. You can create and manipulate 3D objects, lights, and cameras in a web browser."
      title="3D Playground"
    >
      <Canvas
        camera={{ position: [0, 0, 200], fov: 75 }}
        style={{
          height: "100vh",
          width: "100vw",
          position: "absolute",
          inset: 0,
          zIndex: -1,
        }}
      >
        <ambientLight intensity={1} />
        <RippleGrid />
      </Canvas>
    </Playground>
  );
};
