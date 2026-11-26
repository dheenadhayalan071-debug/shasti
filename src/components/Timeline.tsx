import { useEffect, useRef, useState } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"
import { MEMORY_CHAPTERS, MEMORY_STORY } from "../data/content"
import { Moon } from "./Emblem"

function useTypewriter(text: string, start: boolean, speed = 28) {
  const reduce = useReducedMotion()
  const [out, setOut] = useState(reduce ? text : "")
  useEffect(() => {
    if (!start || reduce) return
    setOut("")
    let i = 0
    const id = setInterval(() => { i++; setOut(text.slice(0, i)); if (i >= text.length) clearInterval(id) }, speed)
    return () => clearInterval(id)
  }, [start, text, speed, reduce])
  return out
}

export default function Timeline() {
  const storyRef = useRef<HTMLDivElement>(null)
  const storyInView = useInView(storyRef, { once: true, margin: "-60px" })
  const typed = useTypewriter(MEMORY_STORY, storyInView)
  const stars = useRef(Array.from({ length: 40 }, (_, i) => ({ left: (i * 97) % 100, top: (i * 53) % 55, d: (i % 5) * 0.5 }))).current

  return (
    <div className="relative">
      {/* night sky */}
      <div className="absolute inset-0 -z-10 rounded-3xl overflow-hidden bg-gradient-to-b from-[#0b0912] via-[#1a0f1e] to-[#310E20]" aria-hidden="true">
        {stars.map((s, i) => <span key={i} className="absolute w-1 h-1 rounded-full bg-blush animate-twinkle" style={{ left: `${s.left}%`, top: `${s.top}%`, animationDelay: `${s.d}s` }} />)}
        <Moon className="absolute right-6 top-6 w-20 h-20 opacity-90 animate-floaty" />
      </div>

      <div className="relative px-5 sm:px-10 py-10">
        <div ref={storyRef} className="glass rounded-2xl p-6 sm:p-8 mb-10">
          <p className="text-[11px] tracking-[.3em] text-rose/80 mb-3">THE STORY, AS I REMEMBER IT</p>
          <p className="font-serif text-lg sm:text-xl leading-relaxed text-ivory/90 min-h-[7rem]">{typed}<span className="animate-pulse text-rose">▌</span></p>
        </div>

        <ol className="relative border-l border-rose/25 ml-2 sm:ml-4 space-y-8">
          {MEMORY_CHAPTERS.map((c, i) => (
            <motion.li key={c.tag} initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: .6, delay: i * .1 }} className="pl-6 relative">
              <span className="absolute -left-[7px] top-1 w-3.5 h-3.5 rounded-full bg-rose shadow-[0_0_12px_#EAB8C8]" />
              <p className="text-[11px] tracking-[.3em] text-rose/80">{c.tag}</p>
              <h3 className="font-serif text-2xl mt-1 text-gradient">{c.title}</h3>
              <p className="text-blush/75 mt-2 leading-relaxed text-[15px]">{c.body}</p>
            </motion.li>
          ))}
        </ol>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-hand text-3xl text-blush text-center mt-12">
          One night. One confession. One beginning. ♡
        </motion.p>
      </div>
    </div>
  )
}
