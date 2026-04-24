"use client";

import {
  FC,
  Suspense,
  useRef,
  useLayoutEffect,
  useEffect,
  useMemo,
} from "react";
import { Canvas, useFrame, useThree, invalidate } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  useFBX,
  useProgress,
  Html,
  Environment,
  ContactShadows,
} from "@react-three/drei";
//import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import * as THREE from "three";

export interface ViewerProps {
  url: string;
  width?: number | string;
  height?: number | string;
  modelXOffset?: number;
  modelYOffset?: number;
  defaultRotationX?: number;
  defaultRotationY?: number;
  defaultZoom?: number;
  minZoomDistance?: number;
  maxZoomDistance?: number;
  enableMouseParallax?: boolean;
  enableManualRotation?: boolean;
  enableHoverRotation?: boolean;
  enableManualZoom?: boolean;
  ambientIntensity?: number;
  keyLightIntensity?: number;
  fillLightIntensity?: number;
  rimLightIntensity?: number;
  environmentPreset?:
    | "city"
    | "sunset"
    | "night"
    | "dawn"
    | "studio"
    | "apartment"
    | "forest"
    | "park"
    | "none";
  autoFrame?: boolean;
  placeholderSrc?: string;
  showScreenshotButton?: boolean;
  fadeIn?: boolean;
  autoRotate?: boolean;
  autoRotateSpeed?: number;
  onModelLoaded?: () => void;
}

const isTouch =
  typeof window !== "undefined" &&
  ("ontouchstart" in window || navigator.maxTouchPoints > 0);

const deg2rad = (d: number) => (d * Math.PI) / 180;

const Loader: FC<{ placeholderSrc?: string }> = ({ placeholderSrc }) => {
  const { progress, active } = useProgress();

  if (!active && placeholderSrc) {
    return (
      <Html center>
        <img
          src={placeholderSrc}
          width={120}
          height={120}
          style={{ borderRadius: 8, opacity: 0.7 }}
        />
      </Html>
    );
  }

  return <Html center>{Math.round(progress)}%</Html>;
};

/* ================= MODEL LOADER FIX ================= */
function Model({
  url,
  onLoaded,
}: {
  url: string;
  onLoaded?: () => void;
}) {
  const ref = useRef<THREE.Group>(null);

  const ext = url.split(".").pop()?.toLowerCase();

  // ✅ FIX: hook HARUS dipanggil langsung, bukan di useMemo
    const gltf = useGLTF(url);
const fbx = useFBX(url);
//const obj = useLoader(OBJLoader, url);

const scene = useMemo(() => {
  if (ext === "gltf" || ext === "glb") return gltf.scene;
  if (ext === "fbx") return fbx;
  //if (ext === "obj") return obj;
  return null;
}, [ext, gltf, fbx, /*obj*/]);

  useLayoutEffect(() => {
    if (!scene || !ref.current) return;

    const box = new THREE.Box3().setFromObject(scene);
    const size = box.getSize(new THREE.Vector3()).length();
    const center = box.getCenter(new THREE.Vector3());

    scene.position.sub(center);
    scene.scale.setScalar(1 / size);

    onLoaded?.();
  }, [scene]);

  if (!scene) return null;

  return (
    <group ref={ref}>
      <primitive object={scene} />
    </group>
  );
}

/* ================= MAIN ================= */

const ModelViewer: FC<ViewerProps> = ({
  url,
  width = 400,
  height = 400,
  defaultZoom = 3,
  minZoomDistance = 1,
  maxZoomDistance = 10,
  environmentPreset = "forest",
  autoRotate = false,
  autoRotateSpeed = 0.5,
  onModelLoaded,
}) => {
  const camZ = defaultZoom;

  return (
    <div style={{ width, height, position: "relative" }}>
      <Canvas
        camera={{ position: [0, 0, camZ], fov: 50 }}
        frameloop="demand"
      >
        {environmentPreset !== "none" && (
          <Environment preset={environmentPreset as any} />
        )}

        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        <Suspense fallback={<Loader />}>
          <Model url={url} onLoaded={onModelLoaded} />
        </Suspense>

        <OrbitControls
          enablePan={false}
          enableZoom
          minDistance={minZoomDistance}
          maxDistance={maxZoomDistance}
          autoRotate={autoRotate}
          autoRotateSpeed={autoRotateSpeed}
        />

        <ContactShadows opacity={0.3} scale={10} blur={2} />
      </Canvas>
    </div>
  );
};

export default ModelViewer;