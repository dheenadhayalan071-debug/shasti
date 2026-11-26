import { motion } from "framer-motion"
import { RotateCcw } from "lucide-react"
import Emblem from "../components/Emblem"

export default function Ending({ onReplay }: { onReplay: () => void }) {
  const lines = [
    { text: "To my Catwoman.", cls: "font-serif text-4xl sm:text-6xl text-gradient" },
    { text: "From your Batman.", cls: "font-hand text-3xl text-blush" },
    { text: "One week down. So many memories left to make.", cls: "font-serif italic text-xl sm:text-2xl text-ivory/90" },
    { text: "I love you, Shasti. More than this little website could ever explain.", cls: "font-serif text-2xl sm:text-4xl text-gradient leading-snug" },
  ]
  return (
    <div className="text-center max-w-2xl mx-auto">
      <motion.div initial={{ opacity: 0, scale: .8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8 }} className="flex justify-center animate-floaty">
        <Emblem size={110} />
      </motion.div>
      <div className="space-y-6 mt-8">
        {lines.map((l, i) => (
          <motion.p key={i} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .3 + i * .45, duration: .7 }} className={l.cls}>{l.text}</motion.p>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.4 }} className="mt-10">
        <svg width="70" height="70" viewBox="0 0 24 24" fill="#EAB8C8" className="mx-auto animate-floaty" aria-hidden="true"><path d="M12 21s-7.5-4.9-10-9.3C.4 8.6 2.3 5 5.7 5c2 0 3.4 1.1 4.3 2.4h4C15 6.1 16.4 5 18.4 5c3.4 0 5.3 3.6 3.7 6.7C19.5 16.1 12 21 12 21z"/></svg>
        <p className="font-hand text-2xl text-blush mt-4">Forever yours — in this universe and every other one.</p>
        <button onClick={onReplay} className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-burgundy hover:bg-wine transition text-ivory">
          <RotateCcw size={17} /> Read it all again <span aria-hidden="true">♡</span>
        </button>
      </motion.div>
    </div>
  )
}
