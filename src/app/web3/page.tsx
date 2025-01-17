'use client'

import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useState } from "react"
import { StarsBackground } from "@/components/stars-background"
import { Rockets } from "@/components/rockets"

interface CryptoData {
  id: string
  symbol: string
  name: string
  current_price: number
  price_change_percentage_24h: number
}

// Define your portfolio coins
const PORTFOLIO_COINS = [
  'chainlink',
  'ethereum',
  'optimism',
  'uniswap',
  'sui',
  'solana',
  'aerodrome-finance'
]

export default function CryptoPage() {
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${PORTFOLIO_COINS.join(',')}&order=market_cap_desc&sparkline=false`
        )
        const data = await response.json()
        setCryptoData(data)
      } catch (error) {
        console.error('Error fetching crypto data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCryptoData()
    const interval = setInterval(fetchCryptoData, 60000) // Update every minute
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen bg-background text-foreground">
      <StarsBackground />
      <Rockets />
      <section className="container px-4 pt-32 pb-24 mx-auto">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Crypto Experience Section */}
          <div className="space-y-8">
            <h1 className="text-3xl font-bold tracking-tight animate-glitch">
              Crypto Experience
            </h1>
            <div className="grid gap-4">
              <ExperienceCard
                title="Research Director"
                org="FranklinDAO + Penn Blockchain"
                description="Leading research initiatives in blockchain technology and decentralized systems"
              />
              <ExperienceCard
                title="FHE Researcher"
                org="NYU Reagen Lab"
                description="Researching Fully Homomorphic Encryption applications in blockchain"
              />
              <ExperienceCard
                title="Software Engineering Intern"
                org="Anchorage Digital"
                description="Built gRPC and GraphQL layers for direct custody team, focusing on secure asset interactions"
              />
            </div>
          </div>

          {/* Portfolio Section */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold tracking-tight animate-glitch">
              My Portfolio
            </h2>
            <p className="text-sm text-muted-foreground md:text-base">
              Tracking my portfolio
            </p>
            
            {loading ? (
              <div className="text-center">Loading...</div>
            ) : (
              <div className="grid gap-4">
                {cryptoData.map((crypto) => (
                  <CryptoCard key={crypto.id} crypto={crypto} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

function CryptoCard({ crypto }: { crypto: CryptoData }) {
  const priceChangeColor = crypto.price_change_percentage_24h >= 0 
    ? 'text-green-500' 
    : 'text-red-500'

  // Custom name mappings
  const displayNames: Record<string, string> = {
    'aerodrome-finance': 'Aerodrome',
    'moonwell': 'Moonwell',
  }

  return (
    <Card className="transform transition-all duration-300 hover:scale-105 animate-jelly">
      <CardContent className="p-4">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-semibold text-sm md:text-base">
              {displayNames[crypto.id] || crypto.name} ({crypto.symbol.toUpperCase()})
            </h3>
            <p className="text-xs text-muted-foreground">
              Current Price: ${crypto.current_price.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })}
            </p>
          </div>
          <span className={`text-xs font-medium ${priceChangeColor}`}>
            {crypto.price_change_percentage_24h.toFixed(2)}%
          </span>
        </div>
      </CardContent>
    </Card>
  )
}

function ExperienceCard({ title, org, description }: { 
  title: string
  org: string
  description?: string 
}) {
  return (
    <Card className="transform transition-all duration-300 hover:scale-105 animate-jelly">
      <CardContent className="p-4">
        <div className="flex flex-col gap-2">
          <div>
            <h3 className="font-semibold text-sm md:text-base">{title}</h3>
            <p className="text-xs text-muted-foreground">{org}</p>
          </div>
          {description && (
            <p className="text-xs text-muted-foreground">{description}</p>
          )}
        </div>
      </CardContent>
    </Card>
  )
} 