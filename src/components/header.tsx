'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Home, TrendingUp, Map } from "lucide-react"

export function Header() {
  const pathname = usePathname()
  
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <nav className="flex gap-4">
          <Button 
            variant={pathname === "/" ? "default" : "ghost"}
            size="sm"
            asChild
          >
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Home
            </Link>
          </Button>
          <Button 
            variant={pathname === "/web3" ? "default" : "ghost"}
            size="sm"
            asChild
          >
            <Link href="/web3">
              <TrendingUp className="w-4 h-4 mr-2" />
              Web3
            </Link>
          </Button>
          <Button 
            variant={pathname === "/travel" ? "default" : "ghost"}
            size="sm"
            asChild
          >
            <Link href="/travel">
              <Map className="w-4 h-4 mr-2" />
              Travel
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  )
} 