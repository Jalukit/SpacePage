import { Mail, Linkedin, Globe } from "lucide-react"
import CTAButton from "../components/CTAButton"
import { motion } from "framer-motion"

export function Contact() {
  return (
    <section id="contact" className="min-h-screen pt-24 pb-20 flex items-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto px-6"
      >
        <div className="max-w-3xl mx-auto
          bg-white/60 dark:bg-white/5
          backdrop-blur-xl
          border border-white/40 dark:border-white/10
          rounded-2xl
          p-10
          shadow-xl">

          <h2 className="text-4xl font-extrabold mb-6">Contact Me</h2>

          <p className="text-slate-600 dark:text-gray-300 mb-8">
            Have a project or collaboration in mind? Let’s build something great together.
          </p>

          <div className="flex flex-wrap gap-4 justify-between items-center">
            <div className="flex gap-3">
              <CTAButton href="mailto:agentfair47@gmail.com" icon={<Mail size={18} />}>
                Email Me
              </CTAButton>

              <CTAButton href="#" variant="outline" icon={<Linkedin size={18} />}>
                LinkedIn
              </CTAButton>
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-gray-300">
              <Globe size={16} />
              Bangkok — Remote Friendly
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
