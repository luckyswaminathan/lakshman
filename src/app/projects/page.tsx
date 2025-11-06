import Link from "next/link"

export default function Projects() {
  return (
    <main className="flex flex-col min-h-screen bg-white px-6 py-12 md:px-12 max-w-4xl mx-auto">
      {/* Header */}
      <header className="mb-16 md:mb-24 opacity-0 animate-fade-in-1">
        <h1 className="text-2xl font-light tracking-tight text-zinc-800">
          Projects <br /><br /> <a href="https://github.com/luckyswaminathan"
            className="text-base border-b border-dashed border-zinc-400 hover:text-zinc-900 transition-colors"
            target="_blank" 
            rel="noopener noreferrer"
          >
            github
          </a>
        </h1>
      </header>
      {/* Main Content */}

      
      <section className="flex-grow opacity-0 animate-fade-in-2">
        <div className="space-y-12 text-zinc-700 leading-relaxed">
          {/* deepmock API */}
          <div className="space-y-4">
            <div className="flex justify-between items-baseline">
              <h2 className="text-lg font-medium text-zinc-900">deepmock API</h2>
              <span className="text-sm text-zinc-500">Present</span>
            </div>
            <p className="text-zinc-600 italic">API Mocking Library</p>
            <ul className="list-disc list-outside ml-4 space-y-2">
              <li>Library for uploading an API spec and outputting a live deepmocked API with CRUD functionality for the API</li>
            </ul>
          </div>

          {/* PennOS */}
          <div className="space-y-4">
            <div className="flex justify-between items-baseline">
              <h2 className="text-lg font-medium text-zinc-900">PennOS</h2>
              <span className="text-sm text-zinc-500">April 2025</span>
            </div>
            <p className="text-zinc-600 italic">Operating System | Philadelphia, PA</p>
            <ul className="list-disc list-outside ml-4 space-y-2">
              <li>Build liteweight operating system in C, build scheduler from scratch</li>
    
            </ul>
          </div>
          {/* Turnstiles */}
          <div className="space-y-4">
            <div className="flex justify-between items-baseline">
              <h2 className="text-lg font-medium text-zinc-900">Turnstiles</h2>
              <span className="text-sm text-zinc-500">April 2024 - Present</span>
            </div>
            <p className="text-zinc-600 italic">Ticketing Software | San Francisco, CA</p>
            <ul className="list-disc list-outside ml-4 space-y-2">
              <li>End-to-end ticketing software for the WNBA built with Postgresql, .NET/C#, and React</li>
              <li>Integration testing with MVC framework and Swagger RestAPI</li>
              <li>GraphQL and Redis architecture for cached data rendering</li>
            </ul>
          </div>

          {/* Election Data Visualizer */}
          <div className="space-y-4">
            <div className="flex justify-between items-baseline">
              <h2 className="text-lg font-medium text-zinc-900">Election Data Visualizer</h2>
              <span className="text-sm text-zinc-500">January 2024 – May 2024</span>
            </div>
            <p className="text-zinc-600 italic">Databases class project | Philadelphia, PA</p>
            <ul className="list-disc list-outside ml-4 space-y-2">
              <li>Website visualizing 2020 election data built with React, Node.js, MySQL, and MongoDB</li>
              <li>Data processing pipeline using Python and Selenium for sentiment analysis and geolocation</li>
            </ul>
          </div>

          {/* Google HTTP 1.1 */}
          <div className="space-y-4">
            <div className="flex justify-between items-baseline">
              <h2 className="text-lg font-medium text-zinc-900">Google HTTP 1.1</h2>
              <span className="text-sm text-zinc-500">December 2024</span>
            </div>
            <p className="text-zinc-600 italic">Search Engine | Philadelphia, PA</p>
            <ul className="list-disc list-outside ml-4 space-y-2">
              <li>Full-stack HTTP 1.1 version of Google with Java, Vanilla JS, and AWS</li>
              <li>Web Crawler implementation in AWS EC2 with S3 and EBS storage</li>
              <li>PageRank, Indexer, and TF-IDF search mechanisms</li>
            </ul>
          </div>
        </div>
      </section>


      {/* Footer Navigation */}
      <footer className="mt-8 md:mt-12 opacity-0 animate-fade-in-3">
        <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-zinc-500">
          <Link className="hover:text-zinc-900 transition-colors" href="/">
            Home
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
        </nav>
      </footer>
    </main>
  )
}
