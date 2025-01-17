'use client'

import { StarsBackground } from "@/components/stars-background"
import { Rockets } from "@/components/rockets"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useState, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import cdmx1 from "@/lib/images/mexico-city/cdmx1.png"
import cdmx2 from "@/lib/images/mexico-city/cdmx2.png"
import cdmx3 from "@/lib/images/mexico-city/cdmx3.png"
import cdmx4 from "@/lib/images/mexico-city/cdmx4.png"
import sj1 from "@/lib/images/san-juan/sj1.png"
import sj2 from "@/lib/images/san-juan/sj2.png"
import sj3 from "@/lib/images/san-juan/sj3.png"
import vienna1 from "@/lib/images/vienna/vienna1.png"
import vienna2 from "@/lib/images/vienna/vienna2.png"
import vienna3 from "@/lib/images/vienna/vienna3.png"
import tahiti1 from "@/lib/images/tahiti/tahiti1.png"
import tahiti2 from "@/lib/images/tahiti/tahiti2.png"
import tahiti3 from "@/lib/images/tahiti/tahiti3.png"

interface Location {
  name: string
  images: string[]
  description: string
  date: string
}

const locations: Location[] = [
  {
    name: "Mexico City",
    images: [cdmx1.src, cdmx2.src, cdmx3.src, cdmx4.src], 
    description: "The vibrant heart of Mexico",
    date: "2024"
  },
 // {
//     name: "Seville",
//     images: ["/travel/seville/1.jpg"],
//     description: "Andalusian charm and flamenco",
//     date: "2024"
//   },
//   {
//     name: "Madrid",
//     images: ["/travel/madrid/1.jpg"],
//     description: "Spain's majestic capital",
//     date: "2024"
//   },
  {
    name: "Vienna",
    images: [vienna1.src, vienna2.src, vienna3.src],
    description: "City of music and art",
    date: "2024"
  },
//   {
//     name: "Bangkok",
//     images: ["/travel/bangkok/1.jpg"],
//     description: "Thailand's bustling metropolis",
//     date: "2024"
//   },
  {
    name: "Tahiti",
    images: [tahiti1.src, tahiti2.src, tahiti3.src],
    description: "Paradise in the Pacific",
    date: "2024"
  },
//   {
//     name: "Switzerland",
//     images: ["/travel/switzerland/1.jpg"],
//     description: "Alpine wonderland",
//     date: "2024"
//   },
//   {
//     name: "Paris",
//     images: ["/travel/paris/1.jpg"],
//     description: "City of Light",
//     date: "2024"
//   },
  {
    name: "San Juan",
    images: [sj1.src, sj2.src, sj3.src],
    description: "Caribbean culture and history",
    date: "2024"
  },
//   {
//     name: "Chennai",
//     images: ["/travel/chennai/1.jpg"],
//     description: "Gateway to South India",
//     date: "2024"
//   }
]

function LocationCard({ location }: { location: Location }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => 
      prev === location.images.length - 1 ? 0 : prev + 1
    )
  }, [location.images.length])

  const previousImage = useCallback(() => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? location.images.length - 1 : prev - 1
    )
  }, [location.images.length])

  useEffect(() => {
    const interval = setInterval(nextImage, 5000)
    return () => clearInterval(interval)
  }, [nextImage])

  return (
    <Card className="group overflow-hidden">
      <CardContent className="p-0">
        <div className="relative h-80 w-full">
          <Image
            src={location.images[currentImageIndex]}
            alt={location.name}
            fill
            className="object-cover transition-transform duration-500"
          />
          {/* Navigation buttons */}
          <button
            onClick={(e) => {
              e.preventDefault()
              previousImage()
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault()
              nextImage()
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
          {/* Image counter */}
          <div className="absolute bottom-2 right-2 bg-black/50 px-2 py-1 rounded text-white text-xs">
            {currentImageIndex + 1} / {location.images.length}
          </div>
        </div>
        <div className="p-4 space-y-2">
          <h3 className="font-semibold text-lg">{location.name}</h3>
          <p className="text-sm text-muted-foreground">{location.description}</p>
          <p className="text-xs text-muted-foreground">{location.date}</p>
        </div>
      </CardContent>
    </Card>
  )
}

export default function TravelPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <StarsBackground />
      <Rockets />
      <section className="container px-4 pt-32 pb-24 mx-auto">
        <div className="max-w-6xl mx-auto space-y-8">
          <h1 className="text-3xl font-bold tracking-tight animate-glitch">
            Travel Gallery
          </h1>
          <p className="text-sm text-muted-foreground md:text-base">
            Exploring the world, one city at a time
          </p>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {locations.map((location) => (
              <LocationCard key={location.name} location={location} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 