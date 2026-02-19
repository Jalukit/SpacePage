import { motion } from "framer-motion"
import { Code, Bike, Gamepad2, Film, Music, MapPin } from "lucide-react"

const interests = [
  { icon: Code, label: "Developer", desc: "React, TypeScript, Unity" },
  { icon: Gamepad2, label: "Gamer & Game Dev", desc: "Building games in Unity" },
  { icon: Film, label: "Movie Buff", desc: "Sci-fi, thriller, anime" },
  { icon: Music, label: "Music Lover", desc: "Always has headphones on" },
  { icon: Bike, label: "Cyclist", desc: "Thailand → Scandinavia someday" },
  { icon: MapPin, label: "Traveler", desc: "No fast travel, no shortcuts" },
]

export function About() {
  return (
    <section id="about" className="min-h-screen pt-24 flex items-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto px-6"
      >
        <div className="max-w-4xl mx-auto">
          {/* Header card */}
          <div className="
            bg-white/60 dark:bg-white/5
            backdrop-blur-xl
            border border-white/40 dark:border-white/10
            rounded-2xl p-10 shadow-xl mb-6">

            <h2 className="text-3xl font-extrabold mb-4">About Me</h2>

            <p className="text-slate-600 dark:text-gray-300 leading-relaxed mb-3">
              Developer by day, everything else by night. I love building things — from web apps to Unity games — and I'm always looking for the next side quest.
            </p>
            <p className="text-slate-600 dark:text-gray-300 leading-relaxed">
              Currently plotting my most ambitious adventure yet: cycling and hitchhiking from <span className="font-semibold text-indigo-600 dark:text-indigo-400">Thailand to Scandinavia</span>. No fast travel. No shortcuts.
            </p>
          </div>

          {/* Interest grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {interests.map(({ icon: Icon, label, desc }) => (
              <motion.div
                key={label}
                whileHover={{ scale: 1.03 }}
                className="
                  flex flex-col items-center text-center gap-2 p-5 rounded-xl
                  bg-white/50 dark:bg-white/5
                  backdrop-blur
                  border border-white/30 dark:border-white/10
                  transition"
              >
                <Icon size={24} className="text-indigo-500 dark:text-indigo-400" />
                <span className="font-semibold text-sm">{label}</span>
                <span className="text-xs text-slate-500 dark:text-gray-400">{desc}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
