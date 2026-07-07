"use client"

import { useEffect, useRef } from "react"

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`
        glowRef.current.style.top = `${e.clientY}px`
      }
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      className="fixed pointer-events-none z-50 w-[400px] h-[400px] opacity-60 transition-opacity duration-300 -translate-x-1/2 -translate-y-1/2"
      style={{
        background: "radial-gradient(circle, rgba(255, 87, 34, 0.15) 0%, rgba(255, 87, 34, 0) 60%)",
        left: "-1000px",
        top: "-1000px",
        mixBlendMode: "screen",
      }}
    />
  )
}
