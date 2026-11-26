import { useEffect } from "react"
import confetti from "canvas-confetti"
import { motion, useReducedMotion } from "framer-motion"

export default function Celebration({ onDone }: { onDone?: () => void }) {
  const reduce = useReducedMotion()
  useEffect(() => {
    if (reduce) return
    const colors = ["#F7DCE5", "#EAB8C8", "#641D36", "#FFF8F4"]
    confetti({ particleCount: 120, spread: 80, origin: { y: .6 }, colors })
    const t1 = setTimeout(() => confetti({ particleCount: 80, angle: 60, spread: 60, origin: { x: 0, y: .7 }, colors }), 350)
    const t2 = setTimeout(() => confetti({ particleCount: 80, angle: 120, spread: 60, origin: { x: 1, y: .7 }, colors }), 600)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [reduce])

  return (
    <motion.div initial={{ opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
      <motion.div animate={reduce ? {} : { scale: [1, 1.15, 1] }} transition={{ repeat: Infinity, duration: 1.6 }} className="inline-block">
        <svg width="90" height="90" viewBox="0 0 24 24" fill="#EAB8C8" aria-hidden="true"><path d="M12 21s-7.5-4.9-10-9.3C.4 8.6 2.3 5 5.7 5c2 0 3.4 1.1 4.3 2.4h4C15 6.1 16.4 5 18.4 5c3.4 0 5.3 3.6 3.7 6.7C19.5 16.1 12 21 12 21z"/></svg>
      </motion.div>
      <h3 className="font-serif text-3xl sm:text-4xl text-gradient mt-4">I knew it. ♡</h3>
      <p className="font-hand text-2xl text-blush mt-3">You just made your Batman the happiest guy in Gotham.</p>
      {onDone && <button onClick={onDone} className="mt-6 px-6 py-3 rounded-full bg-burgundy hover:bg-wine transition text-ivory">One last thing…</button>}
    </motion.div>
  )
}
