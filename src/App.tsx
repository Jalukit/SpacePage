import { useRef } from "react"
import { Navbar } from "./layouts/Navbar"
import { About } from "./sections/About"
import { Contact } from "./sections/Contact"
import { Home } from "./sections/Home"
import { Project } from "./sections/Project"
import { Travel } from "./sections/Travel"
import { ScrollToTop } from "./components/ScrollToTop"

function App() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={scrollRef}
      className="
      min-h-screen relative

      bg-gradient-to-b
      from-[#f8fbff]
      via-[#eef6ff]
      to-[#fdfdff]
      text-slate-800

      dark:bg-gradient-to-b
      dark:from-black
      dark:via-gray-900
      dark:to-black
      dark:text-white
    "
    >
      {/* 🌌 LIGHT NEBULA */}
      <div className="pointer-events-none fixed inset-0 z-0 dark:hidden">
        <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-cyan-300/30 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-fuchsia-300/30 blur-[140px] rounded-full" />

        <div className="absolute inset-0 opacity-[0.15]
          bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_1px,transparent_1px)]
          bg-[size:40px_40px]" />
      </div>

      {/* ⭐ DARK STARS */}
      <div className="fixed inset-0 z-0 overflow-hidden text-white hidden dark:block">
        <div className="stars" />
        <div className="stars2" />
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="star3"
            style={{
              top: `${Math.random() * 60}%`,
              left: `${Math.random() * 60}%`,
              animationDelay: `${Math.random() * 8}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <Navbar />
        <Home />
        <About />
        <Project />
        <Travel />
        <Contact />
        <ScrollToTop />
      </div>
    </div>
  )
}

export default App
