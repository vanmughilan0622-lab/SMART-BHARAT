"use client"

import { useEffect, useRef } from "react"

interface HeatPoint {
  lat: number
  lng: number
  type: "pothole" | "water" | "light" | "fixed"
  label: string
}

const BANGALORE_POINTS: HeatPoint[] = [
  { lat: 12.9252, lng: 77.5938, type: "pothole", label: "Pothole – Jayanagar 4th Block" },
  { lat: 12.9340, lng: 77.6101, type: "pothole", label: "Pothole – BTM Layout" },
  { lat: 12.9120, lng: 77.6453, type: "water", label: "Water leakage – HSR Layout" },
  { lat: 12.9716, lng: 77.5946, type: "light", label: "Streetlight out – MG Road" },
  { lat: 12.9592, lng: 77.6974, type: "pothole", label: "Pothole – Whitefield" },
  { lat: 12.9784, lng: 77.6408, type: "water", label: "Water supply cut – Indiranagar" },
  { lat: 12.9010, lng: 77.5760, type: "fixed", label: "Fixed – Kanakapura Rd" },
  { lat: 12.9450, lng: 77.5700, type: "pothole", label: "Pothole – Banashankari" },
  { lat: 12.9850, lng: 77.5533, type: "light", label: "Streetlight – Yeshwanthpur" },
  { lat: 12.9200, lng: 77.6800, type: "fixed", label: "Fixed – Koramangala" },
]

const COLOR: Record<string, string> = {
  pothole: "#ef4444",
  water:   "#3b82f6",
  light:   "#f59e0b",
  fixed:   "#22c55e",
}

interface Props {
  activeFilter: "pothole" | "water" | "light" | "all"
}

export function BangaloreMap({ activeFilter }: Props) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)

  useEffect(() => {
    if (!mapRef.current) return

    // Guard: Leaflet sets _leaflet_id on the container when initialized
    if ((mapRef.current as any)._leaflet_id) return

    import("leaflet").then((L) => {
      if (!mapRef.current || (mapRef.current as any)._leaflet_id) return

      delete (L.Icon.Default.prototype as any)._getIconUrl
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      })

      const map = L.map(mapRef.current, {
        center: [12.9716, 77.5946],
        zoom: 12,
        zoomControl: true,
        scrollWheelZoom: false,
      })

      L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
        attribution: '&copy; <a href="https://carto.com/">CARTO</a>',
        maxZoom: 19,
      }).addTo(map)

      mapInstanceRef.current = { map, markers: [] as any[] }

      const filtered = activeFilter === "all"
        ? BANGALORE_POINTS
        : BANGALORE_POINTS.filter((p) => p.type === activeFilter)

      filtered.forEach((pt) => {
        const color = COLOR[pt.type]
        const icon = L.divIcon({
          html: `<div style="width:14px;height:14px;border-radius:50%;background:${color};border:2px solid #1C1C1E;box-shadow:0 0 10px ${color},0 0 20px ${color}60;"></div>`,
          className: "",
          iconSize: [14, 14],
          iconAnchor: [7, 7],
        })
        const marker = L.marker([pt.lat, pt.lng], { icon })
          .addTo(map)
          .bindPopup(`<div style="background:#1C1C1E;color:#fff;padding:8px 12px;border-radius:10px;font-family:sans-serif;font-size:12px;border:1px solid rgba(255,255,255,0.1)"><strong style="color:${color}">${pt.type.toUpperCase()}</strong><br/>${pt.label}</div>`)
        mapInstanceRef.current.markers.push(marker)
      })
    })

    return () => {
      if (mapInstanceRef.current?.map) {
        mapInstanceRef.current.map.remove()
        mapInstanceRef.current = null
      }
    }
  }, [])

  // Update markers when filter changes
  useEffect(() => {
    if (!mapInstanceRef.current) return
    import("leaflet").then((L) => {
      const { map, markers } = mapInstanceRef.current
      markers.forEach((m: any) => map.removeLayer(m))
      mapInstanceRef.current.markers = []

      const filtered = activeFilter === "all"
        ? BANGALORE_POINTS
        : BANGALORE_POINTS.filter((p) => p.type === activeFilter)

      filtered.forEach((pt) => {
        const color = COLOR[pt.type]
        const icon = L.divIcon({
          html: `<div style="width:14px;height:14px;border-radius:50%;background:${color};border:2px solid #1C1C1E;box-shadow:0 0 10px ${color},0 0 20px ${color}60;"></div>`,
          className: "",
          iconSize: [14, 14],
          iconAnchor: [7, 7],
        })
        const marker = L.marker([pt.lat, pt.lng], { icon })
          .addTo(map)
          .bindPopup(`<div style="background:#1C1C1E;color:#fff;padding:8px 12px;border-radius:10px;font-family:sans-serif;font-size:12px;border:1px solid rgba(255,255,255,0.1)"><strong style="color:${color}">${pt.type.toUpperCase()}</strong><br/>${pt.label}</div>`)
        mapInstanceRef.current.markers.push(marker)
      })
    })
  }, [activeFilter])

  return (
    <>
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
      <style>{`
        .leaflet-container { background: #111113 !important; border-radius: 1.5rem; }
        .leaflet-control-zoom { border: 1px solid rgba(255,255,255,0.08) !important; }
        .leaflet-control-zoom a { background: #1C1C1E !important; color: #fff !important; border-color: rgba(255,255,255,0.08) !important; }
        .leaflet-control-zoom a:hover { background: #2D2D2F !important; }
        .leaflet-popup-content-wrapper { background: transparent !important; box-shadow: none !important; padding: 0 !important; }
        .leaflet-popup-tip { background: #1C1C1E !important; }
        .leaflet-popup-close-button { color: #fff !important; top: 6px !important; right: 10px !important; }
        .leaflet-control-attribution { background: rgba(0,0,0,0.5) !important; color: #666 !important; font-size: 9px !important; }
        .leaflet-control-attribution a { color: #888 !important; }
      `}</style>
      <div ref={mapRef} className="w-full h-full rounded-3xl" />
    </>
  )
}
