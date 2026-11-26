import { useEffect, useState } from "react"
import { useReducedMotion } from "framer-motion"

type Heart = { id: number; left: number; size: number; duration: number; delay: number; opacity: number }

export default function FloatingHearts({ count = 14 }: { count?: number }) {
  const reduce = useReducedMotion()
  const [hearts, setHearts] = useState<Heart[]>([])
  useEffect(() => {
    if (reduce) return
    setHearts(Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 10 + Math.random() * 18,
      duration: 9 + Math.random() * 10,
      delay: -Math.random() * 14,
      opacity: .25 + Math.random() * .45,
    })))
  }, [count, reduce])
  if (reduce) return null
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-[5]" aria-hidden="true">
      {hearts.map(h => (
        <span key={h.id} style={{ left: `${h.left}%`, bottom: "-4vh", animation: `drift ${h.duration}s linear ${h.delay}s infinite`, opacity: h.opacity }}>
          <svg width={h.size} height={h.size} viewBox="0 0 24 24" fill="#EAB8C8"><path d="M12 21s-7.5-4.9-10-9.3C.4 8.6 2.3 5 5.7 5c2 0 3.4 1.1 4.3 2.4h4C15 6.1 16.4 5 18.4 5c3.4 0 5.3 3.6 3.7 6.7C19.5 16.1 12 21 12 21z" transform="scale(.92) translate(1 0)"/></svg>
        </span>
      ))}
    </div>
  )
}
