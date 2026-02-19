import React from "react"

type Props = {
  href?: string
  onClick?: () => void
  children: React.ReactNode
  variant?: "solid" | "outline"
  icon?: React.ReactNode
}

export function CTAButton({ href, onClick, children, variant = "solid", icon }: Props) {
  const base = "inline-flex items-center gap-3 px-5 py-2 rounded-md font-medium transition-colors"
  const solid = "bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-lg hover:opacity-95"
  const outline = "border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800"

  const classes = `${base} ${variant === "solid" ? solid : outline}`

  if (href) {
    return (
      <a href={href} onClick={onClick} className={classes} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
        {icon}
        <span>{children}</span>
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {icon}
      <span>{children}</span>
    </button>
  )
}

export default CTAButton
