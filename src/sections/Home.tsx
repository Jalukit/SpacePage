import { CTAButton } from "../components/CTAButton"
import { Rocket } from "lucide-react"
import { motion } from "framer-motion"

export function Home() {
  return (
    <section id="home" className="min-h-screen pt-24 flex items-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto px-6 text-center"
      >
        <p className="uppercase tracking-wider text-indigo-500 dark:text-indigo-300 mb-3">
          Space • Travel • Developer
        </p>

        <h1 className="text-5xl font-extrabold mb-6
          bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500
          bg-clip-text text-transparent">
          Hi, I'm an explorer of code and cosmos
        </h1>

        <p className="max-w-2xl mx-auto mb-10 text-slate-600 dark:text-gray-300">
          I build modern web experiences inspired by travel and space — clean UI, subtle motion, and strong accessibility.
        </p>

        <div className="flex justify-center gap-4">
          <CTAButton href="#contact" icon={<Rocket size={16} />}>
            Work With Me
          </CTAButton>

          <CTAButton href="#projects" variant="outline">
            See Projects
          </CTAButton>
        </div>
      </motion.div>
    </section>
  )
}
