import { motion } from "framer-motion"
import { MapPin } from "lucide-react"

export function Travel() {
  return (
    <section id="travel" className="min-h-screen pt-24 flex items-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto px-6"
      >
        <div className="max-w-4xl mx-auto
          bg-white/60 dark:bg-white/5
          backdrop-blur-xl
          border border-white/40 dark:border-white/10
          rounded-2xl
          p-8">

          <div className="flex items-center gap-3 mb-4">
            <MapPin />
            <h2 className="text-2xl font-bold">Recent Travels</h2>
          </div>

          <p className="text-slate-600 dark:text-gray-300 mb-6">
            Design inspiration often comes from real places and motion.
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            {["Bangkok", "Kyoto", "Reykjavík"].map((place) => (
              <div key={place}
                className="p-4 rounded-xl bg-white/50 dark:bg-white/5">
                {place}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
