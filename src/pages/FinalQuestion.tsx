import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Celebration from "../components/Celebration"
import { APPRECIATION_MESSAGE } from "../data/content"

export default function FinalQuestion({ onFinish }: { onFinish: () => void }) {
  const [choice, setChoice] = useState<"none" | "know" | "again">("none")

  return (
    <div className="text-center max-w-2xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
        <p className="tracking-[.35em] text-xs text-rose/80">CHAPTER 06 · THE MAIN QUESTION</p>
        <h1 className="font-serif text-4xl sm:text-6xl mt-4 text-gradient leading-tight">Shasti Babe…</h1>
        <h2 className="font-serif text-3xl sm:text-5xl mt-3 text-ivory leading-tight">Do you know how much<br />I love you?</h2>
        <p className="font-hand text-2xl text-blush mt-5">I hope you never have to question how special you are to me.</p>
      </motion.div>

      <AnimatePresence mode="wait">
        {choice === "none" && (
          <motion.div key="q" exit={{ opacity: 0, y: -12 }} className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: .97 }} onClick={() => setChoice("know")} className="px-8 py-4 rounded-full bg-burgundy hover:bg-wine transition text-ivory text-lg">
              I knowww <span aria-hidden="true">❤️</span>
            </motion.button>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: .97 }} onClick={() => setChoice("again")} className="px-8 py-4 rounded-full glass hover:border-rose/60 transition text-ivory text-lg">
              Tell me again <span aria-hidden="true">🥺</span>
            </motion.button>
          </motion.div>
        )}
        {choice === "know" && (
          <motion.div key="know" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Celebration />
            <button onClick={onFinish} className="mt-4 px-8 py-4 rounded-full bg-burgundy hover:bg-wine transition text-ivory">One last thing…</button>
          </motion.div>
        )}
        {choice === "again" && (
          <motion.div key="again" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="glass rounded-3xl p-7 sm:p-9 mt-10 text-left">
            <p className="text-[11px] tracking-[.3em] text-rose/80 text-center">AS MANY TIMES AS YOU ASK</p>
            <p className="font-serif text-lg sm:text-xl leading-relaxed text-ivory/90 mt-4">{APPRECIATION_MESSAGE}</p>
            <div className="text-center mt-7">
              <button onClick={onFinish} className="px-8 py-4 rounded-full bg-burgundy hover:bg-wine transition text-ivory">Okay… one last thing ♡</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
