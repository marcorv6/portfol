"use client"

import React, { useEffect, useRef, useState } from "react"
import { useTheme } from "@/components/theme-provider"
import { Cpu, Move, Network } from "lucide-react"

type SystemNode = {
  id: string
  label: string
  type: "shell" | "mfe" | "cdn" | "auth"
  x: number
  y: number
  radius: number
  connections: string[]
  metrics: string
}

export function ArchitectureCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const [nodes, setNodes] = useState<SystemNode[]>([
    { id: "shell", label: "App Shell (Vite)", type: "shell", x: 180, y: 150, radius: 34, connections: ["auth", "loan", "cdn"], metrics: "12kB gzipped" },
    { id: "auth", label: "Auth Remote", type: "auth", x: 80, y: 280, radius: 26, connections: [], metrics: "8.4kB • OAuth2" },
    { id: "loan", label: "Loan Engine", type: "mfe", x: 280, y: 290, radius: 28, connections: ["cdn"], metrics: "24kB • React 19" },
    { id: "cdn", label: "AWS CloudFront", type: "cdn", x: 380, y: 140, radius: 24, connections: [], metrics: "14ms Edge Latency" },
  ])

  const [selectedNode, setSelectedNode] = useState<SystemNode | null>(null)
  const [draggedNodeId, setDraggedNodeId] = useState<string | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let signalProgress = 0

    const resize = () => {
      if (!canvas.parentElement) return
      canvas.width = canvas.parentElement.clientWidth
      canvas.height = canvas.parentElement.clientHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const draw = () => {
      signalProgress = (signalProgress + 0.015) % 1
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const strokeColor = isDark ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.15)"
      const activeLineColor = isDark ? "#38bdf8" : "#0284c7"

      // 1. Draw Connections between Nodes
      nodes.forEach((node) => {
        node.connections.forEach((targetId) => {
          const target = nodes.find((n) => n.id === targetId)
          if (!target) return

          // Connection Line
          ctx.beginPath()
          ctx.strokeStyle = strokeColor
          ctx.lineWidth = 2
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(target.x, target.y)
          ctx.stroke()

          // Animated Signal Packet
          const packetX = node.x + (target.x - node.x) * signalProgress
          const packetY = node.y + (target.y - node.y) * signalProgress

          ctx.beginPath()
          ctx.arc(packetX, packetY, 4, 0, Math.PI * 2)
          ctx.fillStyle = activeLineColor
          ctx.fill()
        })
      })

      // 2. Draw Nodes
      nodes.forEach((node) => {
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)

        if (node.type === "shell") ctx.fillStyle = isDark ? "#0284c7" : "#0369a1"
        else if (node.type === "mfe") ctx.fillStyle = isDark ? "#7c3aed" : "#6d28d9"
        else if (node.type === "auth") ctx.fillStyle = isDark ? "#059669" : "#047857"
        else ctx.fillStyle = isDark ? "#d97706" : "#b45309"

        ctx.fill()
        ctx.strokeStyle = selectedNode?.id === node.id ? "#ffffff" : isDark ? "rgba(255, 255, 255, 0.4)" : "rgba(0, 0, 0, 0.3)"
        ctx.lineWidth = selectedNode?.id === node.id ? 3 : 1.5
        ctx.stroke()

        // Label
        ctx.font = "11px var(--font-geist-mono), monospace"
        ctx.fillStyle = isDark ? "#f8fafc" : "#0f172a"
        ctx.textAlign = "center"
        ctx.fillText(node.label, node.x, node.y + node.radius + 16)
      })

      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [nodes, selectedNode, isDark])

  // Mouse Drag & Select Handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const clicked = nodes.find((node) => {
      const dist = Math.hypot(node.x - mouseX, node.y - mouseY)
      return dist <= node.radius
    })

    if (clicked) {
      setSelectedNode(clicked)
      setDraggedNodeId(clicked.id)
    } else {
      setSelectedNode(null)
    }
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!draggedNodeId || !canvasRef.current) return
    const rect = canvasRef.current.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    setNodes((prev) =>
      prev.map((node) =>
        node.id === draggedNodeId ? { ...node, x: mouseX, y: mouseY } : node
      )
    )
  }

  const handleMouseUp = () => {
    setDraggedNodeId(null)
  }

  return (
    <div className="relative w-full h-[420px] rounded-2xl bg-card border border-border shadow-xl p-5 flex flex-col justify-between overflow-hidden transition-colors duration-300">
      {/* Interactive Drag Canvas */}
      <canvas
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        className="absolute inset-0 z-0 cursor-grab active:cursor-grabbing"
      />

      {/* Header Badge */}
      <div className="relative z-10 flex items-center justify-between flex-wrap gap-2 pointer-events-none">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-600 dark:text-cyan-400">
          <Network className="w-3.5 h-3.5" />
          Interactive System Topology • Drag Nodes
        </div>

        <span className="text-[11px] font-mono text-muted-foreground flex items-center gap-1">
          <Move className="w-3 h-3" /> Drag circles to reconfigure mesh
        </span>
      </div>

      {/* Node Metrics Panel */}
      <div className="relative z-10 p-3.5 rounded-xl bg-background/90 border border-border backdrop-blur-md flex items-center justify-between text-xs font-mono pointer-events-none">
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-primary" />
          <span className="font-semibold text-foreground">
            {selectedNode ? selectedNode.label : "Click any node for specs"}
          </span>
        </div>
        <span className="text-muted-foreground font-bold">
          {selectedNode ? selectedNode.metrics : "Module Federation Mesh"}
        </span>
      </div>
    </div>
  )
}
