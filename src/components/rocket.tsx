'use client'

import { useEffect, useState } from 'react'

function RocketSvg() {
  return (
    <svg
      width="32"
      height="16"
      viewBox="0 0 32 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="rotate-0"
    >
      <path
        d="M32 8L20 0V4H0V12H20V16L32 8Z"
        fill="white"
      />
    </svg>
  )
}

export function Rocket() {
  const [rockets, setRockets] = useState<Array<{ id: number; style: React.CSSProperties }>>([])

  useEffect(() => {
    const launchRocket = () => {
      const startY = Math.random() * (window.innerHeight - 100) + 50 // Keep rockets within viewport
      const arcHeight = -100 - Math.random() * 100 // Consistent arc height
      const duration = 2 // Consistent duration for smooth motion

      const newRocket = {
        id: Date.now(),
        style: {
          '--start-y': `${startY}px`,
          '--arc-height': `${arcHeight}px`,
          '--duration': `${duration}s`,
          animation: `rocket-flight var(--duration) cubic-bezier(0.4, 0, 0.2, 1) forwards`,
        } as React.CSSProperties,
      }

      setRockets(prev => [...prev, newRocket])

      // Remove rocket after animation completes
      setTimeout(() => {
        setRockets(prev => prev.filter(rocket => rocket.id !== newRocket.id))
      }, duration * 1000)
    }

    // Random intervals between 1 and 3 seconds
    const scheduleNextLaunch = () => {
      const delay = 1000 + Math.random() * 2000
      setTimeout(() => {
        launchRocket()
        scheduleNextLaunch()
      }, delay)
    }

    scheduleNextLaunch()

    return () => {
      setRockets([])
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {rockets.map(rocket => (
        <div
          key={rocket.id}
          className="absolute left-0 rocket"
          style={rocket.style}
          aria-hidden="true"
        >
          <RocketSvg />
        </div>
      ))}
    </div>
  )
}
