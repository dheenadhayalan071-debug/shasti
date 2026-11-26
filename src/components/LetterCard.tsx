import { useEffect, useRef, useState } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"
import { LETTER_PARAGRAPHS } from "../data/content"

export default function LetterCard() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const reduce = useReducedMotion()
  const [shown, setShown] = useState(reduce ? LETTER_PARAGRAPHS.length : 0)

  useEffect(() => {
    if (!inView || reduce) return
    if (shown >= LETTER_PARAGRAPHS.length) return
    const t = setTimeout(() => setShown(s => s + 1), 650)
    return () => clearTimeout(t)
  }, [inView, shown, reduce])

  return (
    <div ref={ref} className="relative">
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
        <span className="inline-block bg-burgundy text-ivory text-xs tracking-[.25em] px-4 py-1.5 rounded-full shadow-lg">SEALED WITH A HEART ♡</span>
      </div>
      <motion.article
        initial={{ opacity: 0, y: 40, rotateX: 8 }} animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
        transition={{ duration: .9, ease: "easeOut" }}
        className="glass rounded-3xl px-6 sm:px-10 py-10 sm:py-12 relative overflow-hidden"
      >
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-rose to-transparent" />
        <div className="space-y-5">
          {LETTER_PARAGRAPHS.slice(0, shown).map((p, i) => (
            <motion.p key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }}
              className={`${i === 0 ? "font-hand text-3xl text-rose" : i === LETTER_PARAGRAPHS.length - 1 ? "font-serif italic text-xl sm:text-2xl text-gradient leading-relaxed" : "text-ivory/85 leading-relaxed text-[15px] sm:text-base"}`}>
              {p}
            </motion.p>
          ))}
          {shown >= LETTER_PARAGRAPHS.length && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-hand text-3xl text-blush pt-2">
              Yours, even in another universe.<br />Your Batman. <span aria-hidden="true">🦇</span>
            </motion.p>
          )}
        </div>
      </motion.article>
    </div>
  )
}
