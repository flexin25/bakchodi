"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene>()
  const rendererRef = useRef<THREE.WebGLRenderer>()
  const animationIdRef = useRef<number>()

  useEffect(() => {
    if (typeof window === "undefined" || !mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 5

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    rendererRef.current = renderer
    mountRef.current.appendChild(renderer.domElement)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0x00ffcc, 1)
    directionalLight.position.set(5, 5, 5)
    scene.add(directionalLight)

    const pointLight = new THREE.PointLight(0xff007f, 0.8, 100)
    pointLight.position.set(-5, -5, 5)
    scene.add(pointLight)

    // Create floating chess pieces
    const chessGeometries = [
      // Pawn (simplified)
      new THREE.ConeGeometry(0.1, 0.3, 8),
      // Rook (simplified)
      new THREE.BoxGeometry(0.2, 0.3, 0.2),
      // Knight (simplified sphere)
      new THREE.SphereGeometry(0.15, 8, 6),
      // Bishop (cone with sphere)
      new THREE.ConeGeometry(0.12, 0.35, 8),
      // Queen (cylinder with crown)
      new THREE.CylinderGeometry(0.08, 0.15, 0.4, 8),
      // King (cylinder with cross)
      new THREE.CylinderGeometry(0.1, 0.16, 0.45, 8),
    ]

    const chessMaterials = [
      new THREE.MeshPhongMaterial({
        color: 0x00ffcc,
        transparent: true,
        opacity: 0.7,
        emissive: 0x003333,
      }),
      new THREE.MeshPhongMaterial({
        color: 0xff007f,
        transparent: true,
        opacity: 0.7,
        emissive: 0x330022,
      }),
    ]

    const chessPieces: THREE.Mesh[] = []

    // Create chess pieces
    for (let i = 0; i < 12; i++) {
      const geometry = chessGeometries[Math.floor(Math.random() * chessGeometries.length)]
      const material = chessMaterials[Math.floor(Math.random() * chessMaterials.length)]
      const piece = new THREE.Mesh(geometry, material)

      piece.position.set((Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 10)

      piece.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI)

      // Add custom properties for animation
      ;(piece as any).velocity = {
        x: (Math.random() - 0.5) * 0.01,
        y: (Math.random() - 0.5) * 0.01,
        z: (Math.random() - 0.5) * 0.01,
      }
      ;(piece as any).rotationSpeed = {
        x: (Math.random() - 0.5) * 0.02,
        y: (Math.random() - 0.5) * 0.02,
        z: (Math.random() - 0.5) * 0.02,
      }

      scene.add(piece)
      chessPieces.push(piece)
    }

    // Create floating geometric shapes (globes and polyhedrons)
    const geometricShapes: THREE.Mesh[] = []

    // Low-poly globes
    for (let i = 0; i < 8; i++) {
      const geometry = new THREE.IcosahedronGeometry(0.3, 1) // Low-poly sphere
      const material = new THREE.MeshPhongMaterial({
        color: i % 2 === 0 ? 0x00ffcc : 0xff007f,
        transparent: true,
        opacity: 0.4,
        wireframe: Math.random() > 0.5,
        emissive: i % 2 === 0 ? 0x002222 : 0x220011,
      })
      const globe = new THREE.Mesh(geometry, material)

      globe.position.set((Math.random() - 0.5) * 25, (Math.random() - 0.5) * 25, (Math.random() - 0.5) * 15)
      ;(globe as any).velocity = {
        x: (Math.random() - 0.5) * 0.008,
        y: (Math.random() - 0.5) * 0.008,
        z: (Math.random() - 0.5) * 0.008,
      }
      ;(globe as any).rotationSpeed = {
        x: (Math.random() - 0.5) * 0.015,
        y: (Math.random() - 0.5) * 0.015,
        z: (Math.random() - 0.5) * 0.015,
      }

      scene.add(globe)
      geometricShapes.push(globe)
    }

    // Abstract geometric shapes
    const abstractGeometries = [
      new THREE.TetrahedronGeometry(0.2),
      new THREE.OctahedronGeometry(0.25),
      new THREE.DodecahedronGeometry(0.2),
      new THREE.TorusGeometry(0.2, 0.05, 8, 16),
    ]

    for (let i = 0; i < 6; i++) {
      const geometry = abstractGeometries[Math.floor(Math.random() * abstractGeometries.length)]
      const material = new THREE.MeshPhongMaterial({
        color: Math.random() > 0.5 ? 0x00ffcc : 0xff007f,
        transparent: true,
        opacity: 0.3,
        emissive: Math.random() > 0.5 ? 0x001111 : 0x110011,
      })
      const shape = new THREE.Mesh(geometry, material)

      shape.position.set((Math.random() - 0.5) * 30, (Math.random() - 0.5) * 30, (Math.random() - 0.5) * 20)
      ;(shape as any).velocity = {
        x: (Math.random() - 0.5) * 0.006,
        y: (Math.random() - 0.5) * 0.006,
        z: (Math.random() - 0.5) * 0.006,
      }
      ;(shape as any).rotationSpeed = {
        x: (Math.random() - 0.5) * 0.01,
        y: (Math.random() - 0.5) * 0.01,
        z: (Math.random() - 0.5) * 0.01,
      }

      scene.add(shape)
      geometricShapes.push(shape)
    }

    // Mouse interaction
    const mouse = { x: 0, y: 0 }
    const handleMouseMove = (event: MouseEvent) => {
      if (typeof window === "undefined") return
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener("mousemove", handleMouseMove)

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate)

      // Animate chess pieces
      chessPieces.forEach((piece) => {
        const velocity = (piece as any).velocity
        const rotationSpeed = (piece as any).rotationSpeed

        piece.position.x += velocity.x
        piece.position.y += velocity.y
        piece.position.z += velocity.z

        piece.rotation.x += rotationSpeed.x
        piece.rotation.y += rotationSpeed.y
        piece.rotation.z += rotationSpeed.z

        // Boundary wrapping
        if (piece.position.x > 15) piece.position.x = -15
        if (piece.position.x < -15) piece.position.x = 15
        if (piece.position.y > 15) piece.position.y = -15
        if (piece.position.y < -15) piece.position.y = 15
        if (piece.position.z > 8) piece.position.z = -8
        if (piece.position.z < -8) piece.position.z = 8
      })

      // Animate geometric shapes
      geometricShapes.forEach((shape) => {
        const velocity = (shape as any).velocity
        const rotationSpeed = (shape as any).rotationSpeed

        shape.position.x += velocity.x
        shape.position.y += velocity.y
        shape.position.z += velocity.z

        shape.rotation.x += rotationSpeed.x
        shape.rotation.y += rotationSpeed.y
        shape.rotation.z += rotationSpeed.z

        // Boundary wrapping
        if (shape.position.x > 20) shape.position.x = -20
        if (shape.position.x < -20) shape.position.x = 20
        if (shape.position.y > 20) shape.position.y = -20
        if (shape.position.y < -20) shape.position.y = 20
        if (shape.position.z > 12) shape.position.z = -12
        if (shape.position.z < -12) shape.position.z = 12
      })

      // Camera movement based on mouse
      camera.position.x += (mouse.x * 0.5 - camera.position.x) * 0.05
      camera.position.y += (mouse.y * 0.5 - camera.position.y) * 0.05
      camera.lookAt(scene.position)

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      if (typeof window === "undefined") return
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  return <div ref={mountRef} className="absolute inset-0 w-full h-full" />
}
