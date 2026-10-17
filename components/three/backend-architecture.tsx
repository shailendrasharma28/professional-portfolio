"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface ArchitectureNode {
  id: string;
  name: string;
  type: "gateway" | "service" | "database" | "cache" | "queue" | "auth";
  pos: [number, number, number];
  color: number;
  size: [number, number, number];
  description: string;
}

export default function BackendArchitecture3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const fallbackRef = useRef<HTMLDivElement>(null);
  const [activeNode, setActiveNode] = useState<string>("API Gateway");
  const [activeDesc, setActiveDesc] = useState<string>(
    "Central entry point managing rate limiting, routing & JWT verification"
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    try {
      const testCanvas = document.createElement("canvas");
      const gl =
        testCanvas.getContext("webgl") ||
        testCanvas.getContext("experimental-webgl");
      if (!gl) {
        fallbackRef.current?.classList.remove("hidden");
        return;
      }
    } catch {
      fallbackRef.current?.classList.remove("hidden");
      return;
    }

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0d0b0d, 0.038);

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 4.2, 12);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0x2d1f22, 2.8);
    scene.add(ambientLight);

    const pointOrange = new THREE.PointLight(0xff6d29, 6.5, 30);
    pointOrange.position.set(-5, 6, 4);
    scene.add(pointOrange);

    const pointAmber = new THREE.PointLight(0xff8c42, 6.0, 32);
    pointAmber.position.set(5, -2, 6);
    scene.add(pointAmber);

    const pointDeepOrange = new THREE.PointLight(0xff3d00, 4.5, 26);
    pointDeepOrange.position.set(0, 8, -4);
    scene.add(pointDeepOrange);

    const systemGroup = new THREE.Group();
    scene.add(systemGroup);

    const gridHelper = new THREE.GridHelper(16, 24, 0xff6d29, 0x2d1e22);
    gridHelper.position.y = -3.2;
    (gridHelper.material as THREE.Material).transparent = true;
    (gridHelper.material as THREE.Material).opacity = 0.35;
    systemGroup.add(gridHelper);

    const nodes: ArchitectureNode[] = [
      {
        id: "gateway",
        name: "API Gateway",
        type: "gateway",
        pos: [0, 1.2, 0],
        color: 0xff6d29,
        size: [1.8, 0.8, 1.8],
        description: "Reverse-proxy handling SSL, rate limiting, and request validation",
      },
      {
        id: "auth",
        name: "Auth & RBAC Service",
        type: "auth",
        pos: [-3.4, 0.5, -1.2],
        color: 0xff8c42,
        size: [1.2, 0.7, 1.2],
        description: "Centralized JWT issuer & multi-tenant permissions engine",
      },
      {
        id: "task-service",
        name: "Task & Workflow Engine",
        type: "service",
        pos: [3.4, 1.0, -1.0],
        color: 0xff6d29,
        size: [1.2, 0.7, 1.2],
        description: "State-machine managing hierarchical enterprise task states",
      },
      {
        id: "banquet-service",
        name: "Banquet & Ledger Service",
        type: "service",
        pos: [2.8, -1.4, 1.6],
        color: 0xffa048,
        size: [1.3, 0.7, 1.3],
        description: "Dual-entry booking ledgers and invoice transaction manager",
      },
      {
        id: "redis",
        name: "Redis Cache Store",
        type: "cache",
        pos: [-2.6, -1.5, 1.4],
        color: 0xff4500,
        size: [1.1, 0.6, 1.1],
        description: "In-memory caching for active sessions and frequent catalog hits",
      },
      {
        id: "db-mysql",
        name: "MySQL Cluster (ACID)",
        type: "database",
        pos: [0, -2.2, -1.8],
        color: 0xff6d29,
        size: [1.5, 1.2, 1.5],
        description: "Relational persistence with foreign-key integrity & Sequelize ORM",
      },
      {
        id: "queue",
        name: "Socket.IO / Queue",
        type: "queue",
        pos: [0, 3.2, -1.4],
        color: 0xff8c42,
        size: [1.2, 0.5, 1.2],
        description: "Realtime WebSocket pipelines and background async job dispatch",
      },
    ];

    const meshMap = new Map<string, THREE.Object3D>();

    nodes.forEach((node) => {
      const nodeGroup = new THREE.Group();
      nodeGroup.position.set(...node.pos);

      if (node.type === "database") {
        const cylinderGeo = new THREE.CylinderGeometry(0.9, 0.9, 1.15, 28);
        const cylinderMat = new THREE.MeshStandardMaterial({
          color: 0x1c1417,
          roughness: 0.2,
          metalness: 0.9,
          emissive: 0x452315,
          emissiveIntensity: 0.4,
        });
        const cylinderMesh = new THREE.Mesh(cylinderGeo, cylinderMat);
        nodeGroup.add(cylinderMesh);

        for (let r = -0.38; r <= 0.38; r += 0.38) {
          const ringGeo = new THREE.TorusGeometry(0.92, 0.04, 14, 36);
          const ringMat = new THREE.MeshBasicMaterial({ color: 0xff6d29 });
          const ringMesh = new THREE.Mesh(ringGeo, ringMat);
          ringMesh.rotation.x = Math.PI / 2;
          ringMesh.position.y = r;
          nodeGroup.add(ringMesh);
        }
      } else {
        const boxGeo = new THREE.BoxGeometry(...node.size);
        const boxMat = new THREE.MeshPhysicalMaterial({
          color: 0x1a1215,
          roughness: 0.15,
          metalness: 0.3,
          transmission: 0.7,
          transparent: true,
          opacity: 0.88,
          reflectivity: 0.9,
          emissive: node.color,
          emissiveIntensity: 0.28,
        });
        const boxMesh = new THREE.Mesh(boxGeo, boxMat);
        nodeGroup.add(boxMesh);

        const wireGeo = new THREE.EdgesGeometry(boxGeo);
        const wireMat = new THREE.LineBasicMaterial({
          color: node.color,
          linewidth: 2,
        });
        const wireMesh = new THREE.LineSegments(wireGeo, wireMat);
        nodeGroup.add(wireMesh);

        const gemGeo = new THREE.OctahedronGeometry(0.24);
        const gemMat = new THREE.MeshBasicMaterial({ color: node.color });
        const gemMesh = new THREE.Mesh(gemGeo, gemMat);
        nodeGroup.add(gemMesh);
      }

      systemGroup.add(nodeGroup);
      meshMap.set(node.id, nodeGroup);
    });

    const connections: [string, string][] = [
      ["gateway", "auth"],
      ["gateway", "task-service"],
      ["gateway", "banquet-service"],
      ["gateway", "redis"],
      ["gateway", "queue"],
      ["task-service", "db-mysql"],
      ["banquet-service", "db-mysql"],
      ["auth", "db-mysql"],
      ["task-service", "queue"],
    ];

    interface Packet {
      curve: THREE.CatmullRomCurve3;
      mesh: THREE.Mesh;
      progress: number;
      speed: number;
    }

    const packets: Packet[] = [];
    const packetGeo = new THREE.SphereGeometry(0.095, 12, 12);
    const packetMat = new THREE.MeshBasicMaterial({ color: 0xff8c42 });

    connections.forEach(([sourceId, targetId]) => {
      const sourceNode = nodes.find((n) => n.id === sourceId);
      const targetNode = nodes.find((n) => n.id === targetId);
      if (!sourceNode || !targetNode) return;

      const p1 = new THREE.Vector3(...sourceNode.pos);
      const p2 = new THREE.Vector3(...targetNode.pos);

      const mid = new THREE.Vector3()
        .addVectors(p1, p2)
        .multiplyScalar(0.5)
        .add(new THREE.Vector3(0, 0.45, 0.35));

      const curve = new THREE.CatmullRomCurve3([p1, mid, p2]);
      const points = curve.getPoints(36);
      const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
      const lineMat = new THREE.LineBasicMaterial({
        color: 0xff6d29,
        transparent: true,
        opacity: 0.35,
      });
      const line = new THREE.Line(lineGeo, lineMat);
      systemGroup.add(line);

      const pMesh = new THREE.Mesh(packetGeo, packetMat);
      systemGroup.add(pMesh);
      packets.push({
        curve,
        mesh: pMesh,
        progress: Math.random(),
        speed: 0.0035 + Math.random() * 0.003,
      });
    });

    const particleCount = 130;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePos[i] = (Math.random() - 0.5) * 18;
      particlePos[i + 1] = (Math.random() - 0.5) * 12;
      particlePos[i + 2] = (Math.random() - 0.5) * 14;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePos, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xff8c42,
      size: 0.065,
      transparent: true,
      opacity: 0.65,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      targetRotationY = x * 0.45;
      targetRotationX = -y * 0.3;
    };

    container.addEventListener("mousemove", handleMouseMove);

    const raycaster = new THREE.Raycaster();
    const mouseVec = new THREE.Vector2();

    const handleClick = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseVec.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseVec.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(mouseVec, camera);

      const hitNodes = raycaster.intersectObjects(systemGroup.children, true);
      if (hitNodes.length > 0) {
        let obj: THREE.Object3D | null = hitNodes[0].object;
        while (obj && obj !== systemGroup) {
          for (const node of nodes) {
            const m = meshMap.get(node.id);
            if (m === obj) {
              setActiveNode(node.name);
              setActiveDesc(node.description);
              return;
            }
          }
          obj = obj.parent;
        }
      }
    };

    container.addEventListener("click", handleClick);

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    let isVisible = true;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { rootMargin: "150px" }
    );
    observer.observe(container);

    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const elapsed = clock.getElapsedTime();

      systemGroup.rotation.y += (targetRotationY - systemGroup.rotation.y) * 0.05 + 0.0016;
      systemGroup.rotation.x += (targetRotationX - systemGroup.rotation.x) * 0.05;

      let idx = 0;
      nodes.forEach((node) => {
        const obj = meshMap.get(node.id);
        if (obj) {
          obj.position.y = node.pos[1] + Math.sin(elapsed * 1.5 + idx * 0.8) * 0.08;
        }
        idx++;
      });

      packets.forEach((packet) => {
        packet.progress = (packet.progress + packet.speed) % 1;
        const pt = packet.curve.getPointAt(packet.progress);
        packet.mesh.position.copy(pt);
      });

      particles.rotation.y = elapsed * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("click", handleClick);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[480px] sm:h-[560px] lg:h-[640px] flex items-center justify-center select-none">
      <div
        ref={containerRef}
        className="w-full h-full cursor-grab active:cursor-grabbing rounded-3xl overflow-hidden"
        title="Interactive 3D Backend Architecture — Click nodes or move cursor to rotate"
      />

      <div ref={fallbackRef} className="absolute inset-0 hidden flex-col items-center justify-center glass-panel rounded-3xl p-6 text-center">
          <div className="w-16 h-16 rounded-full bg-[#FF6D29]/20 flex items-center justify-center text-[#FF8C42] mb-4">
            <span className="font-mono font-bold text-xl">API</span>
          </div>
          <h4 className="text-lg font-bold text-white mb-2">
            Distributed Backend Architecture
          </h4>
          <p className="text-sm text-[#BABABA] max-w-sm">
            Gateway · Microservices · Redis In-Memory · MySQL Relational Cluster
          </p>
      </div>

      <div className="absolute bottom-5 left-5 right-5 sm:left-7 sm:right-auto sm:max-w-sm pointer-events-none">
        <div className="glass-panel-elevated p-4 rounded-2xl border border-[rgba(255,109,41,0.3)] shadow-2xl shadow-black/80 pointer-events-auto transition-all">
          <div className="flex items-center justify-between gap-3 mb-1.5">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6D29] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF6D29]"></span>
              </span>
              <span className="font-mono text-xs font-semibold text-[#FF8C42] tracking-wider uppercase">
                Architecture Node
              </span>
            </div>
            <span className="font-mono text-[10px] text-[#BABABA] bg-[#17100D] px-2.5 py-0.5 rounded-full border border-[rgba(255,255,255,0.1)]">
              Interactive 3D
            </span>
          </div>

          <h4 className="text-sm font-bold text-white mb-1">{activeNode}</h4>
          <p className="text-xs text-[#BABABA] leading-relaxed">{activeDesc}</p>

          <div className="mt-3 pt-2.5 border-t border-[rgba(255,255,255,0.08)] flex items-center justify-between text-[11px] text-[#BABABA]">
            <span className="flex items-center gap-1.5 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6D29]" />
              Packet Streaming
            </span>
            <span className="font-mono text-[#FF8C42] font-semibold">99.98% Uptime</span>
          </div>
        </div>
      </div>

      <div className="absolute top-5 right-5 hidden sm:flex items-center gap-2 glass-panel py-1.5 px-3.5 rounded-full border border-[rgba(255,109,41,0.25)]">
        <span className="w-2 h-2 rounded-full bg-[#FF6D29] animate-pulse" />
        <span className="font-mono text-xs text-[#BABABA]">Cluster: Live 3D Mesh</span>
      </div>
    </div>
  );
}
