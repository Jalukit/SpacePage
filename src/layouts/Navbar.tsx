import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useActiveSection } from "../hooks/useActiveSection"
import { useTheme } from "../hooks/useTheme"
import { Code, Compass, Earth, Rocket, Send, User } from "lucide-react"

export function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const active = useActiveSection()

  const { scrollYProgress } = useScroll()

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 1000])

  const smoothRotate = useSpring(rotate, {
    stiffness: 100,
    damping: 20,
  })

  const menu = [
    { href: "#home", icon: <Rocket size={18} />, label: "Home" },
    { href: "#about", icon: <User size={18} />, label: "About" },
    { href: "#projects", icon: <Code size={18} />, label: "Projects" },
    { href: "#travel", icon: <Compass size={18} />, label: "Travel" },
    { href: "#contact", icon: <Send size={18} />, label: "Contact" },
  ]

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50
      bg-white/70 dark:bg-gray-900/60
      backdrop-blur-md border-b border-white/10
      shadow-sm"
    >
      <div className="relative px-8 py-4 flex items-center justify-between">

        {/* 🌍 LOGO */}
        <div
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-2 text-xl font-bold
          text-gray-800 dark:text-gray-100 group cursor-pointer"
        >
          <motion.div
            style={{ rotate: smoothRotate }}
            className="drop-shadow-[0_0_6px_rgba(59,130,246,0.7)]"
          >
            <Earth size={20} />
          </motion.div>

          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            XØ-H∆MID
          </span>
        </div>

        {/* 🚀 MENU */}
        <ul className="flex gap-6 items-center">

          {/* 🌗 THEME */}
          <li>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full
              bg-gray-200/50 dark:bg-gray-700/50
              hover:scale-110 transition"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>
          </li>

          {menu.map((item) => {
            const id = item.href.replace("#", "")
            const isActive = active === id

            return (
              <li key={item.href}>
                <button
                  onClick={() => scrollToSection(id)}
                  className={`relative flex items-center gap-2 transition group
                  ${
                    isActive
                      ? "text-blue-500 dark:text-blue-400"
                      : "text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  }`}
                >
                  <span
                    className={`transition ${
                      isActive ? "-translate-y-1" : "group-hover:-translate-y-1"
                    }`}
                  >
                    {item.icon}
                  </span>

                  {item.label}

                  <span
                    className={`absolute left-0 -bottom-1 h-[2px]
                    bg-gradient-to-r from-blue-500 to-purple-500
                    transition-all
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                  />
                </button>
              </li>
            )
          })}
        </ul>

        {/* 📊 SCROLL PROGRESS BAR */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px]
          bg-gradient-to-r from-blue-500 to-purple-500 origin-left"
          style={{ scaleX: scrollYProgress }}
        />
      </div>
    </nav>
  )
}
