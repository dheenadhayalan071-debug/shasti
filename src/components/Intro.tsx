import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Emblem from "./Emblem"

export default function Intro({ onEnter }: { onEnter: () => void }) {
  const [loading, setLoading] = useState(true)
  useEffect(() => { const t = setTimeout(() => setLoading(false), 1800); return () => clearTimeout(t) }, [])

  return (
    <motion.div exit={{ opacity: 0, y: -30 }} className="min-h-dvh grid place-items-center px-4 py-12 relative text-center">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,#310E20_0%,#151116_70%)]" />
      {loading ? (
        <div className="space-y-6">
          <div className="flex justify-center animate-floaty"><Emblem size={90} /></div>
          <p className="tracking-[.3em] text-xs text-rose/80">LOADING OUR LITTLE WORLD</p>
          <div className="w-56 h-[3px] mx-auto rounded-full bg-white/10 overflow-hidden">
            <motion.div className="h-full bg-gradient-to-r from-rose to-burgundy" initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 1.6, ease: "easeInOut" }} />
          </div>
          <p className="font-hand text-2xl text-blush">Your Batman is almost ready…</p>
        </div>
      ) : (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }} className="max-w-lg">
          <div className="flex justify-center mb-5 animate-floaty"><Emblem size={88} /></div>
          <p className="tracking-[.3em] text-xs text-rose/80">SHASTI.EXE · PRIVATE</p>
          <h1 className="font-serif text-4xl sm:text-6xl mt-3 text-gradient leading-tight">Hey, Shasti Babe.</h1>
          <p className="font-hand text-2xl sm:text-3xl text-blush mt-4">Your Batman has something to tell you.</p>
          <div className="ribbon my-7" />
          <p className="text-blush/70 text-sm">Committed relationship · One week down · Forever to go</p>
          <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: .97 }} onClick={onEnter} className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-burgundy hover:bg-wine transition text-ivory text-lg">
            Enter our little world <span aria-hidden="true">♡</span> <ArrowRight size={18} />
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  )
}
