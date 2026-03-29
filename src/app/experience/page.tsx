import Link from "next/link"

export default function Experience() {
  return (
    <main className="flex flex-col min-h-screen bg-white px-6 py-12 md:px-12 max-w-4xl mx-auto">
      {/* Header */}
      <header className="mb-16 md:mb-24 opacity-0 animate-fade-in-1">
        <h1 className="text-2xl font-light tracking-tight text-zinc-800">
          Experience
        </h1>
      </header>

      {/* Main Content */}
      <section className="flex-grow opacity-0 animate-fade-in-2">
        <div className="space-y-12 text-zinc-700 leading-relaxed">
          

          {/* Google */}
          <div className="space-y-4">
            <div className="flex justify-between items-baseline">
              <h2 className="text-lg font-medium text-zinc-900">Google</h2>
              <span className="text-sm text-zinc-500">May 2025 - August 2025</span>
            </div>
            <p className="text-zinc-600 italic">Software Engineering Intern (GCP Terraform) | Seattle, WA</p>
          </div>

          {/* Mime */}
          <div className="space-y-4">
            <div className="flex justify-between items-baseline">
              <h2 className="text-lg font-medium text-zinc-900">Mime</h2>
              <span className="text-sm text-zinc-500">October 2024 - Present</span>
            </div>
            <p className="text-zinc-600 italic">Cofounder | Philadelphia, PA</p>
            <p>Stealth Startup revolutionizing the future of API testing</p>
          </div>

          {/* Anchorage Digital */}
          <div className="space-y-4">
            <div className="flex justify-between items-baseline">
              <h2 className="text-lg font-medium text-zinc-900">Anchorage Digital</h2>
              <span className="text-sm text-zinc-500">May 2024 – August 2024</span>
            </div>
            <p className="text-zinc-600 italic">Software Engineering Intern | New York, New York</p>
            <p>Developed gRPC service for Digital Asset Custody</p>
          </div>

          {/* Cabrium.ai */}
          <div className="space-y-4">
            <div className="flex justify-between items-baseline">
              <h2 className="text-lg font-medium text-zinc-900">Cabrium.ai</h2>
              <span className="text-sm text-zinc-500">October 2023 – April 2024</span>
            </div>
            <p className="text-zinc-600 italic">Chief Technology Officer | Philadelphia, PA</p>
            <p>Design AI startup that automates design feedback and consideration process, $10,000 Summer Venture Award Winner</p>
          </div>

          {/* Koolio.ai */}
          <div className="space-y-4">
            <div className="flex justify-between items-baseline">
              <h2 className="text-lg font-medium text-zinc-900">Koolio.ai</h2>
              <span className="text-sm text-zinc-500">August 2023 – February 2024</span>
            </div>
            <p className="text-zinc-600 italic">Software Engineering Intern | Palo Alto, CA</p>
            <p>Podcast AI startup that automates podcast transcription and analysis</p>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <footer className="mt-16 md:mt-24 opacity-0 animate-fade-in-3">
        <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-zinc-500">
          <Link className="hover:text-zinc-900 transition-colors" href="/">
            Home
          </Link>
          <Link className="hover:text-zinc-900 transition-colors" href="/projects">
            Projects
          </Link>
          <Link className="hover:text-zinc-900 transition-colors" href="https://luckyswaminathan.substack.com/">
            Writing
          </Link>
          <a
            className="hover:text-zinc-900 transition-colors"
            href="https://x.com/luckswaminathan"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            className="hover:text-zinc-900 transition-colors"
            href="https://www.linkedin.com/in/lswamina/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="hover:text-zinc-900 transition-colors"
            href="https://github.com/luckyswaminathan"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </nav>
      </footer>
    </main>
  )
}
