import { motion } from "framer-motion"
import { ExternalLink, Star } from "lucide-react"
import { CTAButton } from "../components/CTAButton"
import { useGitHubRepos } from "../hooks/useGitHubRepos"

export function Project() {
  const { repos, loading, error } = useGitHubRepos()

  return (
    <section id="projects" className="min-h-screen pt-24 flex items-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto px-6"
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-extrabold">Selected Projects</h2>
            <CTAButton href="https://github.com/Jalukit?tab=repositories" variant="outline">
              View All
            </CTAButton>
          </div>

          {loading && (
            <p className="text-center text-slate-500 dark:text-gray-400 animate-pulse">Loading repos…</p>
          )}

          {error && (
            <p className="text-center text-red-500">Failed to load repos: {error}</p>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            {repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group p-6 rounded-2xl
                  bg-white/60 dark:bg-white/5
                  backdrop-blur-xl
                  border border-white/40 dark:border-white/10
                  hover:scale-[1.02]
                  transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-xl">{repo.name}</h3>
                  <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-indigo-500" />
                </div>

                <p className="text-slate-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
                  {repo.description || "No description"}
                </p>

                <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-gray-400">
                  {repo.language && (
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-indigo-400 inline-block" />
                      {repo.language}
                    </span>
                  )}
                  {repo.stargazers_count > 0 && (
                    <span className="flex items-center gap-1">
                      <Star size={12} /> {repo.stargazers_count}
                    </span>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
