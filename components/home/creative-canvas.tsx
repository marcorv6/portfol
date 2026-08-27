"use client"

import React, { useEffect, useRef, useState } from "react"
import { useTheme } from "@/components/theme-provider"
import { RefreshCw, Sliders, Activity } from "lucide-react"

type CurveType = "fourier" | "lissajous" | "rose"

export function CreativeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const [curveType, setCurveType] = useState<CurveType>("fourier")
  const [frequency, setFrequency] = useState(2)
  const [harmonics, setHarmonics] = useState(4)
  const [amplitude, setAmplitude] = useState(45)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let time = 0

    const resize = () => {
      if (!canvas.parentElement) return
      canvas.width = canvas.parentElement.clientWidth
      canvas.height = canvas.parentElement.clientHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const draw = () => {
      time += 0.02
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const width = canvas.width
      const height = canvas.height
      const centerX = width / 2
      const centerY = height / 2

      // Theme colors
      const strokeColor = isDark ? "#38bdf8" : "#0284c7"
      const gridColor = isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)"

      // Draw Cartesian coordinate grid
      ctx.beginPath()
      ctx.strokeStyle = gridColor
      ctx.lineWidth = 1

      // Vertical & Horizontal Axes
      ctx.moveTo(0, centerY)
      ctx.lineTo(width, centerY)
      ctx.moveTo(centerX, 0)
      ctx.lineTo(centerX, height)
      ctx.stroke()

      // Render selected Mathematical Curve
      ctx.beginPath()
      ctx.lineWidth = 2.5
      ctx.strokeStyle = strokeColor

      if (curveType === "fourier") {
        // Fourier Series Synthesis Plot
        const steps = 300
        for (let i = 0; i < steps; i++) {
          const t = (i / steps) * Math.PI * 4
          const x = (i / steps) * width

          let y = 0
          for (let n = 1; n <= harmonics; n++) {
            const k = 2 * n - 1
            y += (Math.sin(k * (t * frequency + time)) / k) * amplitude
          }

          const plotY = centerY - y
          if (i === 0) ctx.moveTo(x, plotY)
          else ctx.lineTo(x, plotY)
        }
      } else if (curveType === "lissajous") {
        // Lissajous Curve Plot
        const steps = 400
        const a = frequency
        const b = harmonics
        const delta = time

        for (let i = 0; i <= steps; i++) {
          const t = (i / steps) * Math.PI * 2
          const x = centerX + Math.sin(a * t + delta) * (amplitude * 2.5)
          const y = centerY + Math.sin(b * t) * (amplitude * 2.5)

          if (i === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
      } else if (curveType === "rose") {
        // Archimedean Rose Curve Plot
        const steps = 500
        const k = frequency

        for (let i = 0; i <= steps; i++) {
          const theta = (i / steps) * Math.PI * 6 + time * 0.5
          const r = Math.cos(k * theta) * (amplitude * 2.2)
          const x = centerX + r * Math.cos(theta)
          const y = centerY + r * Math.sin(theta)

          if (i === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
      }

      ctx.stroke()
      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [curveType, frequency, harmonics, amplitude, isDark])

  return (
    <div className="relative w-full h-[420px] rounded-2xl bg-card border border-border shadow-xl p-5 flex flex-col justify-between overflow-hidden transition-colors duration-300">
      {/* HTML Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* Header controls */}
      <div className="relative z-10 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-600 dark:text-blue-400">
          <Activity className="w-3.5 h-3.5" />
          HTML5 Canvas • Mathematical Curve Plotter
        </div>

        <div className="flex items-center gap-1.5 bg-muted p-1 rounded-xl border border-border text-xs font-mono">
          <button
            onClick={() => setCurveType("fourier")}
            className={`px-2.5 py-1 rounded-lg transition-colors ${
              curveType === "fourier" ? "bg-primary text-primary-foreground font-semibold" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Fourier Wave
          </button>
          <button
            onClick={() => setCurveType("lissajous")}
            className={`px-2.5 py-1 rounded-lg transition-colors ${
              curveType === "lissajous" ? "bg-primary text-primary-foreground font-semibold" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Lissajous
          </button>
          <button
            onClick={() => setCurveType("rose")}
            className={`px-2.5 py-1 rounded-lg transition-colors ${
              curveType === "rose" ? "bg-primary text-primary-foreground font-semibold" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Rose Curve
          </button>
        </div>
      </div>

      {/* Dynamic Mathematical Formula Banner */}
      <div className="relative z-10 text-center py-2 px-4 rounded-xl bg-background/80 border border-border backdrop-blur-md max-w-sm mx-auto shadow-sm">
        <span className="text-xs font-mono text-primary font-bold">
          {curveType === "fourier" && "y(t) = ∑ [sin((2n-1)ωt) / (2n-1)]"}
          {curveType === "lissajous" && "x(t) = A·sin(a·t + δ), y(t) = B·sin(b·t)"}
          {curveType === "rose" && "r(θ) = A · cos(k · θ)"}
        </span>
      </div>

      {/* Interactive Controls Bar */}
      <div className="relative z-10 p-3.5 rounded-xl bg-background/90 border border-border backdrop-blur-md space-y-2">
        <div className="flex items-center justify-between text-xs font-mono text-foreground">
          <span className="flex items-center gap-1.5">
            <Sliders className="w-3.5 h-3.5 text-primary" /> Dynamic Parameters
          </span>
          <button
            onClick={() => {
              setFrequency(2)
              setHarmonics(4)
              setAmplitude(45)
            }}
            className="p-1 rounded hover:bg-muted text-muted-foreground transition-colors"
            title="Reset"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-3 gap-3 text-xs">
          <div>
            <label className="block text-[11px] text-muted-foreground mb-1 font-mono">
              Freq (ω): <span className="text-foreground font-bold">{frequency}</span>
            </label>
            <input
              type="range"
              min="1"
              max="8"
              step="1"
              value={frequency}
              onChange={(e) => setFrequency(parseInt(e.target.value))}
              className="w-full accent-blue-600 cursor-pointer"
            />
          </div>

          <div>
            <label className="block text-[11px] text-muted-foreground mb-1 font-mono">
              Harmonics (k): <span className="text-foreground font-bold">{harmonics}</span>
            </label>
            <input
              type="range"
              min="1"
              max="10"
              step="1"
              value={harmonics}
              onChange={(e) => setHarmonics(parseInt(e.target.value))}
              className="w-full accent-purple-600 cursor-pointer"
            />
          </div>

          <div>
            <label className="block text-[11px] text-muted-foreground mb-1 font-mono">
              Amp (A): <span className="text-foreground font-bold">{amplitude}</span>
            </label>
            <input
              type="range"
              min="15"
              max="70"
              step="5"
              value={amplitude}
              onChange={(e) => setAmplitude(parseInt(e.target.value))}
              className="w-full accent-cyan-600 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
