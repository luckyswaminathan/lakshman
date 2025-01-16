import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, ExternalLink, Mail } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import "./styles/animations.css"

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="container px-4 py-24 mx-auto">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
            <div className="relative group animate-bounce-spin">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-foreground rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Profile"
                width={200}
                height={200}
                className="relative rounded-full object-cover border-2 border-primary"
              />
            </div>
            <div className="space-y-4 text-center md:text-left">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl animate-glitch">
                Hey, I'm Lakshman Swaminathan
              </h1>
              <p className="text-xl text-muted-foreground animate-jelly">
                I'm a software engineer and entrepreneur passionate about building products that make a difference. 
                Currently working on revolutionizing how people interact with technology.
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <Button asChild className="animate-wiggle">
                  <Link href="mailto:your@email.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact
                  </Link>
                </Button>
                <Button variant="outline" asChild className="animate-wiggle">
                  <Link href="https://github.com/yourusername" target="_blank">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
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
          <h2 className="text-3xl font-bold tracking-tight animate-glitch">Experience</h2>
          <div className="space-y-6">
            <ExperienceCard
              title="Cofounder"
              company="trymime.ai"
              period="2023 - Present"
              description="Building the future of AI-powered communication"
            />
            <ExperienceCard
              title="Cofounder"
              company="Cabrium.ai"
              period="2023 - Present"
              description="Developing innovative AI solutions for businesses"
            />
            <ExperienceCard
              title="Software Engineering Intern"
              company="Google"
              period="Summer 2023"
              description="Worked on large-scale distributed systems and infrastructure"
            />
            <ExperienceCard
              title="Software Engineering Intern"
              company="Anchorage Digital"
              period="Summer 2022"
              description="Developed secure cryptocurrency infrastructure and trading systems"
            />
            <ExperienceCard
              title="Software Engineering Intern"
              company="Koolio.ai"
              period="Summer 2021"
              description="Built AI-powered features and improved user experience"
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
              title="Google 2.0"
              description="A modern reimagining of the search engine with AI-powered features"
              link="https://github.com/yourusername/google2"
            />
            <ProjectCard
              title="MusicVibe"
              description="AI-powered music recommendation system based on user emotions"
              link="https://github.com/yourusername/musicvibe"
            />
            <ProjectCard
              title="EleXion"
              description="Blockchain-based voting platform for secure digital elections"
              link="https://github.com/yourusername/elexion"
            />
            <ProjectCard
              title="RallyRow"
              description="Social platform for organizing and discovering local events"
              link="https://github.com/yourusername/rallyrow"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container px-4 py-12 mx-auto">
        <div className="max-w-3xl mx-auto text-center text-muted-foreground animate-jelly">
          <p>© {new Date().getFullYear()} John Doe. All rights reserved.</p>
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
}: {
  title: string
  company: string
  period: string
  description: string
}) {
  return (
    <Card className="transform transition-all duration-300 hover:scale-105 hover:rotate-1 animate-jelly">
      <CardContent className="p-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">{title}</h3>
              <p className="text-sm text-muted-foreground">{company}</p>
            </div>
            <span className="text-sm text-muted-foreground">{period}</span>
          </div>
          <p className="text-sm text-muted-foreground">{description}</p>
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
  link: string
}) {
  return (
    <Card className="group transition-all hover:shadow-lg animate-bounce-spin">
      <CardContent className="p-6">
        <div className="space-y-2">
          <div className="flex items-start justify-between">
            <h3 className="font-semibold">{title}</h3>
            <Link 
              href={link} 
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <ExternalLink className="w-4 h-4 animate-wiggle" />
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}

