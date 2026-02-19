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

const GITHUB_USER = "Jalukit"
const API_URL = `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=6`

export function useGitHubRepos() {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    fetch(API_URL, {
      headers: { Accept: "application/vnd.github.mercy-preview+json" }, // includes topics
    })
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API ${res.status}`)
        return res.json()
      })
      .then((data: GitHubRepo[]) => {
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
