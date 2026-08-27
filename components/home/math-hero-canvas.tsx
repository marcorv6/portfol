"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export function MathHeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isVisibleRef = useRef(true)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const isMobile = window.innerWidth < 768
    let animationFrameId: number
    let cleanupFunc: () => void = () => {}

    if (isMobile) {
      // --- MOBILE: 2D Parametric Mathematical Manifold Canvas (0ms main thread block, 0kb library overhead) ---
      const canvas = document.createElement("canvas")
      canvas.width = container.clientWidth
      canvas.height = container.clientHeight
      canvas.className = "w-full h-full block"
      container.appendChild(canvas)

      const ctx = canvas.getContext("2d")
      if (!ctx) return

      let t = 0
      const stars = Array.from({ length: 120 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.7 + 0.3,
        speed: Math.random() * 0.05 + 0.01,
      }))

      const drawMobileCanvas = () => {
        animationFrameId = requestAnimationFrame(drawMobileCanvas)
        if (!isVisibleRef.current || !ctx) return

        ctx.clearRect(0, 0, canvas.width, canvas.height)
        t += 0.015

        // Starfield background
        ctx.fillStyle = "rgba(224, 242, 254, 0.6)"
        stars.forEach((star) => {
          ctx.beginPath()
          ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2)
          ctx.fill()
        })

        // 2D Parametric Torus Knot Curve (P=2, Q=3)
        const centerX = canvas.width / 2
        const centerY = canvas.height / 2
        const scale = Math.min(canvas.width, canvas.height) * 0.28

        ctx.lineWidth = 1.5
        ctx.strokeStyle = "rgba(56, 189, 248, 0.45)"
        ctx.beginPath()

        const numPoints = 180
        for (let i = 0; i <= numPoints; i++) {
          const u = (i / numPoints) * Math.PI * 2 * 3
          const p = 2
          const q = 3
          const r = 0.5 * (2 + Math.sin((q / p) * u))
          const x = scale * r * Math.cos(u + t * 0.5)
          const y = scale * r * Math.sin(u + t * 0.5)

          if (i === 0) {
            ctx.moveTo(centerX + x, centerY + y)
          } else {
            ctx.lineTo(centerX + x, centerY + y)
          }
        }
        ctx.stroke()

        // Inner glowing core ring
        ctx.lineWidth = 2
        ctx.strokeStyle = "rgba(245, 158, 11, 0.4)"
        ctx.beginPath()
        ctx.arc(centerX, centerY, scale * 0.85, 0, Math.PI * 2)
        ctx.stroke()
      }

      drawMobileCanvas()

      cleanupFunc = () => {
        cancelAnimationFrame(animationFrameId)
        if (container && canvas) {
          container.removeChild(canvas)
        }
      }
    } else {
      // --- DESKTOP: Full 3D WebGL Torus Knot Manifold via Three.js ---
      const scene = new THREE.Scene()
      scene.fog = new THREE.FogExp2(0x030712, 0.002)

      const camera = new THREE.PerspectiveCamera(
        55,
        container.clientWidth / container.clientHeight,
        0.1,
        1000
      )
      camera.position.z = 16

      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
      renderer.setSize(container.clientWidth, container.clientHeight)
      renderer.setClearColor(0x000000, 0)
      container.appendChild(renderer.domElement)

      const mainGroup = new THREE.Group()
      scene.add(mainGroup)

      const manifoldGeometry = new THREE.TorusKnotGeometry(4.2, 0.95, 140, 24, 2, 3)
      const glassMaterial = new THREE.MeshStandardMaterial({
        color: 0x0284c7,
        emissive: 0x0369a1,
        emissiveIntensity: 0.4,
        roughness: 0.2,
        metalness: 0.7,
        transparent: true,
        opacity: 0.35,
      })
      const glassMesh = new THREE.Mesh(manifoldGeometry, glassMaterial)
      mainGroup.add(glassMesh)

      const wireframeGeometry = new THREE.WireframeGeometry(manifoldGeometry)
      const wireframeMaterial = new THREE.LineBasicMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.4,
      })
      const wireframeMesh = new THREE.LineSegments(wireframeGeometry, wireframeMaterial)
      mainGroup.add(wireframeMesh)

      const orbitGeometry = new THREE.TorusGeometry(8.5, 0.04, 10, 100)
      const orbitMaterial = new THREE.MeshBasicMaterial({
        color: 0xf59e0b,
        wireframe: true,
        transparent: true,
        opacity: 0.45,
      })
      const orbitMesh = new THREE.Mesh(orbitGeometry, orbitMaterial)
      orbitMesh.rotation.x = Math.PI / 3.5
      mainGroup.add(orbitMesh)

      const starCount = 800
      const starGeometry = new THREE.BufferGeometry()
      const starPositions = new Float32Array(starCount * 3)

      for (let i = 0; i < starCount; i++) {
        const radius = 12 + Math.random() * 26
        const theta = Math.random() * Math.PI * 2
        const phi = Math.acos(Math.random() * 2 - 1)

        starPositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
        starPositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
        starPositions[i * 3 + 2] = radius * Math.cos(phi)
      }

      starGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3))

      const starMaterial = new THREE.PointsMaterial({
        color: 0xe0f2fe,
        size: 0.35,
        transparent: true,
        opacity: 0.7,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
      const starSystem = new THREE.Points(starGeometry, starMaterial)
      mainGroup.add(starSystem)

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.7)
      scene.add(ambientLight)

      const light1 = new THREE.PointLight(0x0284c7, 3, 40)
      light1.position.set(10, 10, 10)
      scene.add(light1)

      const light2 = new THREE.PointLight(0xf59e0b, 2, 40)
      light2.position.set(-10, -10, 10)
      scene.add(light2)

      let mouseX = 0
      let mouseY = 0
      let targetMouseX = 0
      let targetMouseY = 0

      const handleMouseMove = (event: MouseEvent) => {
        const windowHalfX = window.innerWidth / 2
        const windowHalfY = window.innerHeight / 2
        targetMouseX = (event.clientX - windowHalfX) * 0.0008
        targetMouseY = (event.clientY - windowHalfY) * 0.0008
      }

      window.addEventListener("mousemove", handleMouseMove, { passive: true })

      const clock = new THREE.Clock()
      const animateDesktop = () => {
        animationFrameId = requestAnimationFrame(animateDesktop)
        if (!isVisibleRef.current) return

        const elapsedTime = clock.getElapsedTime()

        mouseX += (targetMouseX - mouseX) * 0.05
        mouseY += (targetMouseY - mouseY) * 0.05

        glassMesh.rotation.y = elapsedTime * 0.15
        glassMesh.rotation.x = elapsedTime * 0.1

        wireframeMesh.rotation.y = elapsedTime * 0.15
        wireframeMesh.rotation.x = elapsedTime * 0.1

        orbitMesh.rotation.z = elapsedTime * 0.12
        starSystem.rotation.y = elapsedTime * 0.02

        mainGroup.rotation.y = mouseX * 1.5
        mainGroup.rotation.x = mouseY * 1.5

        renderer.render(scene, camera)
      }

      animateDesktop()

      cleanupFunc = () => {
        window.removeEventListener("mousemove", handleMouseMove)
        cancelAnimationFrame(animationFrameId)
        if (container && renderer.domElement) {
          container.removeChild(renderer.domElement)
        }
        renderer.dispose()
      }
    }

    // IntersectionObserver to pause loop when offscreen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisibleRef.current = entry.isIntersecting
        })
      },
      { threshold: 0.05 }
    )
    observer.observe(container)

    return () => {
      observer.disconnect()
      cleanupFunc()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  )
}
