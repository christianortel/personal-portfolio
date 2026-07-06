import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Animated 3D data lattice — a rotating point cloud shaped from a noisy
 * 3D Lissajous field, connected by thin signal lines. Reacts to pointer.
 */
export function HeroCanvas() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 18);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Points
    const COUNT = window.innerWidth < 640 ? 1200 : 2400;
    const positions = new Float32Array(COUNT * 3);
    const basePositions = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      const t = i / COUNT;
      const a = t * Math.PI * 2 * 7;
      const r = 6 + Math.sin(t * Math.PI * 12) * 1.4;
      const x = Math.cos(a) * r + (Math.random() - 0.5) * 1.5;
      const y = (t - 0.5) * 12 + Math.sin(a * 0.6) * 1.2;
      const z = Math.sin(a) * r + (Math.random() - 0.5) * 1.5;
      positions[i * 3] = basePositions[i * 3] = x;
      positions[i * 3 + 1] = basePositions[i * 3 + 1] = y;
      positions[i * 3 + 2] = basePositions[i * 3 + 2] = z;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.045,
      color: 0xf5f1ea,
      transparent: true,
      opacity: 0.85,
      sizeAttenuation: true,
    });
    const points = new THREE.Points(geo, mat);
    scene.add(points);

    // Signal arcs — sparse connecting lines for a few neighbours
    const lineGeo = new THREE.BufferGeometry();
    const LINE_COUNT = 140;
    const linePos = new Float32Array(LINE_COUNT * 2 * 3);
    for (let i = 0; i < LINE_COUNT; i++) {
      const a = Math.floor(Math.random() * COUNT);
      const b = (a + 1 + Math.floor(Math.random() * 6)) % COUNT;
      linePos[i * 6] = positions[a * 3];
      linePos[i * 6 + 1] = positions[a * 3 + 1];
      linePos[i * 6 + 2] = positions[a * 3 + 2];
      linePos[i * 6 + 3] = positions[b * 3];
      linePos[i * 6 + 4] = positions[b * 3 + 1];
      linePos[i * 6 + 5] = positions[b * 3 + 2];
    }
    lineGeo.setAttribute("position", new THREE.BufferAttribute(linePos, 3));
    const lineMat = new THREE.LineBasicMaterial({
      color: 0xf0b94a,
      transparent: true,
      opacity: 0.25,
    });
    const lines = new THREE.LineSegments(lineGeo, lineMat);
    scene.add(lines);

    const target = { x: 0, y: 0 };
    const onPointer = (e: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      target.x = ((e.clientX - rect.left) / rect.width - 0.5) * 0.6;
      target.y = ((e.clientY - rect.top) / rect.height - 0.5) * 0.6;
    };
    window.addEventListener("pointermove", onPointer);

    const resize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    const ro = new ResizeObserver(resize);
    ro.observe(mount);
    resize();

    let raf = 0;
    let t = 0;
    const animate = () => {
      t += reduced ? 0.002 : 0.006;
      const pos = points.geometry.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < COUNT; i++) {
        const bx = basePositions[i * 3];
        const by = basePositions[i * 3 + 1];
        const bz = basePositions[i * 3 + 2];
        const wave = Math.sin(t + i * 0.015) * 0.18;
        pos.array[i * 3] = bx + wave;
        pos.array[i * 3 + 1] = by + Math.cos(t * 0.8 + i * 0.02) * 0.12;
        pos.array[i * 3 + 2] = bz + wave * 0.6;
      }
      pos.needsUpdate = true;

      points.rotation.y += (target.x - points.rotation.y * 0.5) * 0.02 + 0.0015;
      points.rotation.x += (target.y - points.rotation.x * 0.5) * 0.02;
      lines.rotation.copy(points.rotation);

      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointer);
      ro.disconnect();
      renderer.dispose();
      geo.dispose();
      mat.dispose();
      lineGeo.dispose();
      lineMat.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden
      className="absolute inset-0 h-full w-full [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_85%)]"
    />
  );
}
