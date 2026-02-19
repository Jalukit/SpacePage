import { useEffect, useState } from "react"

export type GitHubRepo = {
  id: number
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string | null
  stargazers_count: number
  topics: string[]
  updated_at: string
}

const GITHUB_USER = "jalukit"

// ใส่ชื่อ repo ที่ pin ไว้บน GitHub profile ตรงนี้
const PINNED_REPOS = [
  "SpacePage",
  "Port",
  "nest-deploy-test",
  "next-deploy-test",
  "Assign-work-demo",
  "Angular-Simple",
]

export function useGitHubRepos() {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    // ดึงแต่ละ pinned repo แบบ parallel
    const fetches = PINNED_REPOS.map((name) =>
      fetch(`https://api.github.com/repos/${GITHUB_USER}/${name}`, {
        headers: { Accept: "application/vnd.github.mercy-preview+json" },
      }).then((res) => {
        if (!res.ok) throw new Error(`GitHub API ${res.status}: ${name}`)
        return res.json() as Promise<GitHubRepo>
      })
    )

    Promise.all(fetches)
      .then((data) => {
        if (!cancelled) setRepos(data)
      })
      .catch((err) => {
        if (!cancelled) setError(err.message)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [])

  return { repos, loading, error }
}
