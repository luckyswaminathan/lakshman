'use client'

import { useEffect, useState } from 'react'

export function StarsBackground() {
  const [stars, setStars] = useState<Array<{ x: number; y: number; size: number; delay: number }>>([])

  useEffect(() => {
    // Generate 50 stars with random positions and sizes
    const newStars = Array.from({ length: 50 }, () => ({
      x: Math.random() * 100, // percentage
      y: Math.random() * 100, // percentage
      size: 1 + Math.random() * 2,
      delay: Math.random() * 3 // random delay for twinkling
    }))
    setStars(newStars)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none">
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`
          }}
        />
      ))}
    </div>
  )
}
