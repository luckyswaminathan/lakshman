'use client'

import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, ExternalLink, Mail, Map } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import headshot from "@/lib/images/headshot.png"
import google from "@/lib/images/google.png"
import stealth from "@/lib/images/stealth.png"
import cabrium from "@/lib/images/cabrium.png"
import anchorage from "@/lib/images/anchorage.png"
import koolio from "@/lib/images/koolio.png"
import { Rockets } from "@/components/rockets"
import { StarsBackground } from "@/components/stars-background"
import "./styles/animations.css"

export default function Page() {
  const pathname = usePathname()

  return (
    
    <main className="min-h-screen bg-background text-foreground">
      <StarsBackground />
      <Rockets />
      {/* Hero Section */}
      <section className="container px-4 pt-32 pb-24 mx-auto">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
            <div className="relative group animate-bounce-spin">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-foreground rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <Image
                src={headshot}
                alt="Profile"
                width={400}
                height={400}
                className="relative rounded-full object-cover border-2 border-primary"
              />
            </div>
            <div className="space-y-4 text-center md:text-left">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl animate-glitch">
                Hey, I'm Lakshman (Lucky) Swaminathan
              </h1>
              <p className="text-sm text-muted-foreground animate-jelly md:text-base">
                I'm a student at the University of Pennsylvania studying CS. I love building things that people want, currently trying to solve backend testing with AI.
                Love to build anything, please hit me up for any reason!
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <Button asChild className="animate-wiggle">
                  <Link href="mailto:lakshman.swaminathan1@gmail.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact
                  </Link>
                </Button>
                <Button variant="outline" asChild className="animate-wiggle">
                  <Link href="https://github.com/luckyswaminathan" target="_blank">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Link>
                </Button>
                <Button variant="outline" asChild className="animate-wiggle">
                  <Link href="/web3">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="container px-4 py-24 mx-auto">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-2xl font-bold tracking-tight animate-glitch">Experience</h2>
          <div className="space-y-6">
            <ExperienceCard
              title="Software Engineering Intern"
              company="Google"
              period="Incoming 2025 Summer"
              description="Terraform Team Testing Infrastructure at GCP"
              logoUrl={google.src}
            />
            <ExperienceCard
              title="Cofounder"
              company="Stealth"
              period="2024 - Present"
              description="A natural language Postman"
              logoUrl={stealth.src}
            />
                  <ExperienceCard
              title="Software Engineering Intern"
              company="Anchorage Digital"
              period="May 2024 - August 2024"
              description="Built gRPC layer and graphQL layer for Anchorage's direct custody team(asset interaction). Wrote test suite for custody service and performed 1,000,000+ row MySQL database to PostgreSQL migration"
              logoUrl={anchorage.src}
            />
            <ExperienceCard
              title="Cofounder, CTO"
              company="Cabrium.ai"
              period="September 2023 - April 2024"
              description="Feedback Management and Recommendation for Product Designers, winner of $10,000 Penn Startup Challenge Award"
              logoUrl={cabrium.src}
            />
            
            <ExperienceCard
              title="Software Engineering Intern"
              company="Koolio.ai"
              period="October 2023 - February 2024"
              description="Built AI-powered podcasting platform cloud infrastructure"
              logoUrl={koolio.src}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container px-4 py-24 mx-auto">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold tracking-tight animate-glitch">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <ProjectCard
              title="Google HTTP/1.1"
              description="Built HTTP/1.1 version of Google's search engine from scratch with Java"

            />
            <ProjectCard
              title="MusicVibe"
              description="AI-powered music recommendation system based on user emotions"
              link="https://github.com/luckyswaminathan/musicvibeV1"
            />
            <ProjectCard
              title="EleXion"
              description="Election tweet data visualizer and analyzer for 2020 Presidential Election"
              link="https://github.com/luckyswaminathan/EleXion"
            />
            <ProjectCard
              title="RallyRow"
              description="End to end college gameday experience, LOI from multiple D1 schools and the WNBA - built MVP for friend"
            />
            <ProjectCard
              title="Stickgen"
              description="Platform to generate cartoon panels from stick figures with AI"
              link="https://github.com/luckyswaminathan/Stickgen"
            />
            <ProjectCard
              title="Memory Mosaic"
              description="Built Event Mosaic Generator with Crowdsourced voting and dynamic mosaic generation with NextJS and Python"
              link="https://github.com/luckyswaminathan/memorymosaic"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container px-4 py-12 mx-auto">
        <div className="max-w-3xl mx-auto text-center text-muted-foreground animate-jelly">
          <p className="text-xs">© {new Date().getFullYear()} Lakshman Swaminathan.</p>
        </div>
      </footer>
    </main>
  )
}

function ExperienceCard({
  title,
  company,
  period,
  description,
  logoUrl,
}: {
  title: string
  company: string
  period: string
  description: string
  logoUrl: string
}) {
  return (
    <Card className="transform transition-all duration-300 hover:scale-105 hover:rotate-1 animate-jelly">
      <CardContent className="p-6">
        <div className="flex gap-6">
          <div className="relative flex-shrink-0 w-16 h-16 overflow-hidden rounded-lg group-hover:scale-110 transition-transform">
            <Image
              src={logoUrl || "/placeholder.svg"}
              alt={`${company} logo`}
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-2 flex-1">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-sm md:text-base">{title}</h3>
                <p className="text-xs text-muted-foreground">{company}</p>
              </div>
              <span className="text-xs text-muted-foreground">{period}</span>
            </div>
            <p className="text-xs text-muted-foreground">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function ProjectCard({
  title,
  description,
  link,
}: {
  title: string
  description: string
  link?: string
}) {
  return (
    <Card className="group transition-all hover:shadow-lg animate-bounce-spin">
      <CardContent className="p-6">
        <div className="space-y-2">
          <div className="flex items-start justify-between">
            <h3 className="font-semibold text-sm md:text-base">{title}</h3>
            {link && (
              <Link 
                href={link} 
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <ExternalLink className="w-4 h-4 animate-wiggle" />
              </Link>
            )}
          </div>
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}

