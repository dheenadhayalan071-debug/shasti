import { useState } from "react"
import { motion } from "framer-motion"
import { REASONS } from "../data/content"
import ReasonCard from "../components/ReasonCard"

export default function Reasons() {
  const [open, setOpen] = useState<Set<number>>(new Set())
  const toggle = (i: number) => setOpen(prev => { const n = new Set(prev); n.has(i) ? n.delete(i) : n.add(i); return n })
  const pct = Math.round((open.size / REASONS.length) * 100)

  return (
    <div>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
        <p className="tracking-[.35em] text-xs text-rose/80">CHAPTER 02</p>
        <h1 className="font-serif text-4xl sm:text-5xl mt-2 text-gradient">101 reasons why I love you.</h1>
        <p className="font-hand text-2xl text-blush mt-3">Tap each card, Shasti Babe. All 101 are true.</p>
      </motion.div>

      <div className="glass rounded-2xl p-4 mb-8 sticky top-3 z-20">
        <div className="flex justify-between text-xs text-blush/80 mb-2">
          <span>{open.size} / {REASONS.length} opened</span>
          <span>{pct}% of my heart</span>
        </div>
        <div className="h-2 rounded-full bg-white/10 overflow-hidden" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
          <motion.div className="h-full bg-gradient-to-r from-rose to-burgundy" animate={{ width: `${pct}%` }} transition={{ duration: .5 }} />
        </div>
        {open.size === REASONS.length && <p className="font-hand text-xl text-rose text-center mt-2">All 101. And I still have more. ♡</p>}
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {REASONS.map((r, i) => (
          <ReasonCard key={i} reason={r} index={i} open={open.has(i)} onToggle={() => toggle(i)} />
        ))}
      </div>
    </div>
  )
}
