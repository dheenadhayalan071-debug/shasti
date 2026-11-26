import { motion } from "framer-motion"
import { ArrowRight, Heart, Moon, Sparkles } from "lucide-react"
import Emblem, { Skyline } from "../components/Emblem"
import type { PageId } from "../data/content"

export default function Home({ onGo }: { onGo: (p: PageId) => void }) {
  const cards = [
    { icon: Heart, title: "The Love Letter", desc: "Straight from your Batman's heart.", page: "letter" as PageId },
    { icon: Sparkles, title: "101 Reasons", desc: "And counting. Tap to open each one.", page: "reasons" as PageId },
    { icon: Moon, title: "Our Little Memory", desc: "The night everything began.", page: "memory" as PageId },
  ]
  return (
    <div className="text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>
        <div className="flex justify-center animate-floaty"><Emblem size={96} /></div>
        <p className="tracking-[.35em] text-xs text-rose/80 mt-5">SHASTI.EXE · A DIGITAL LOVE EXPERIENCE</p>
        <h1 className="font-serif text-4xl sm:text-6xl mt-3 text-gradient leading-tight">Do you know how<br />much I love you?</h1>
        <p className="font-hand text-2xl sm:text-3xl text-blush mt-4">A little corner of the internet, made only for you.</p>
        <div className="ribbon my-7 max-w-xs mx-auto" />
        <div className="flex flex-wrap justify-center gap-2 text-xs">
          <span className="hairline rounded-full px-3 py-1.5 text-blush/80">Dheena = Batman</span>
          <span className="hairline rounded-full px-3 py-1.5 text-blush/80">Shasti = Catwoman</span>
          <span className="hairline rounded-full px-3 py-1.5 text-blush/80">Committed · One week</span>
        </div>
      </motion.div>

      <div className="grid sm:grid-cols-3 gap-4 mt-10 text-left">
        {cards.map((c, i) => (
          <motion.button key={c.page} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2 + i * .12, duration: .6 }}
            onClick={() => onGo(c.page)} className="glass rounded-3xl p-6 hover:border-rose/50 hover:-translate-y-1 transition text-left group">
            <c.icon className="text-rose" size={26} />
            <h2 className="font-serif text-xl mt-3 text-ivory group-hover:text-blush transition">{c.title}</h2>
            <p className="text-sm text-blush/70 mt-1">{c.desc}</p>
            <span className="inline-flex items-center gap-1 text-xs text-rose mt-4">Open <ArrowRight size={13} /></span>
          </motion.button>
        ))}
      </div>

      <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .7 }} onClick={() => onGo("question")} className="mt-8 px-8 py-4 rounded-full bg-burgundy hover:bg-wine transition text-ivory">
        Skip to the big question ♡
      </motion.button>
      <Skyline className="w-full h-20 mt-12 opacity-70" />
    </div>
  )
}
