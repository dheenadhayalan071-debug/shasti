import { motion } from "framer-motion"
import LetterCard from "../components/LetterCard"

export default function LoveLetter() {
  return (
    <div>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
        <p className="tracking-[.35em] text-xs text-rose/80">CHAPTER 01</p>
        <h1 className="font-serif text-4xl sm:text-5xl mt-2 text-gradient">To my favourite girl.</h1>
        <p className="font-hand text-2xl text-blush mt-3">Read it slowly, babe. Every word is true.</p>
      </motion.div>
      <LetterCard />
    </div>
  )
}
