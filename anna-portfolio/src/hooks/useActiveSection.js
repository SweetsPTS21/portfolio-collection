import { useState, useEffect } from 'react'

/**
 * useActiveSection — theo dõi section nào đang visible trong viewport
 * để highlight nav item tương ứng.
 */
export function useActiveSection(sectionIds = []) {
  const [active, setActive] = useState(sectionIds[0] || '')

  useEffect(() => {
    const observers = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { threshold: 0.35, rootMargin: '-80px 0px -40% 0px' }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [sectionIds.join(',')])

  return active
}
