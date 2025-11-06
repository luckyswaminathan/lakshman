import Link from "next/link"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white px-6 py-12 md:px-12 max-w-4xl mx-auto">
      {/* Header */}
      <header className="mb-16 md:mb-24 opacity-0 animate-fade-in-1">
        <h1 className="text-2xl font-light tracking-tight text-zinc-800">
          Lakshman <span className="font-medium">Swaminathan</span>
        </h1>
      </header>

      {/* Main Content */}
      <section className="flex-grow max-w-xl opacity-0 animate-fade-in-2">
        <div className="space-y-6 text-zinc-700 leading-relaxed">
          <p className="text-lg">I love building cool things.</p>

          <p>
            My work focuses on how to make interactions more intuitive, whether that is through design productivity tooling to intuitive
            API context providing.
          </p>

          <p>
            I write about my thoughts and explorations on{" "}
            <Link className="border-b border-dashed border-zinc-400 hover:text-zinc-900 transition-colors" href="https://luckyswaminathan.substack.com/">
              substack
            </Link>{""}
            (and occasionally on twitter).
          </p>

          <p>
            Feel free to reach out at{" "}
            <a
              className="border-b border-dashed border-zinc-400 hover:text-zinc-900 transition-colors"
              href="lakshman.swaminathan1@gmail.com"
            >
              lakshman.swaminathan1@gmail.com
            </a> or <a
              className="border-b border-dashed border-zinc-400 hover:text-zinc-900 transition-colors"
              href="https://x.com/luckswaminathan"
            >
              twitter(X)
            </a>{" "}
            — I&apos;m always open to interesting conversations and learning more about anything.
          </p>
          <p>
            Senior @ UPenn studying CS
          </p>
          <p className="mt-4">
            Current obsessions: MCP-API interactions, Guitar, Photography, Simulation
          </p>
        </div>
      </section>

      {/* Footer Navigation */}
      <footer className="mt-16 md:mt-24 animate-fadein">
        <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-zinc-500">
          <Link className="hover:text-zinc-900 transition-colors" href="/projects">
            Projects
          </Link>
          <Link className="hover:text-zinc-900 transition-colors" href="/experience">
            Experience
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
          <a
            className="hover:text-zinc-900 transition-colors"
            href="mailto:lswamina@sas.upenn.edu"
          >
            Email
          </a>
        </nav>
      </footer>
    </main>
  )
}
