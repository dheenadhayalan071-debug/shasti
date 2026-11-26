import { motion } from "framer-motion"
import Timeline from "../components/Timeline"

export default function Memory() {
  return (
    <div>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
        <p className="tracking-[.35em] text-xs text-rose/80">CHAPTER 03</p>
        <h1 className="font-serif text-4xl sm:text-5xl mt-2 text-gradient">One night. One confession.<br />One beginning.</h1>
        <p className="font-hand text-2xl text-blush mt-3">Our little memory, under the same sky.</p>
      </motion.div>
      <Timeline />
    </div>
  )
}
