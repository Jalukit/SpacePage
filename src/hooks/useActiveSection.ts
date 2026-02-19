import { useEffect, useState } from "react"

export function useActiveSection() {
  const [active, setActive] = useState("home")

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id

            setActive(id)

            // ✅ เปลี่ยน URL hash โดยไม่ scroll ซ้ำ
            window.history.replaceState(null, "", `#${id}`)
          }
        })
      },
      {
        rootMargin: "-40% 0px -40% 0px", // จุดกลางจอ
        threshold: 0,
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return active
}
