import { motion } from "framer-motion"
import { DIALOGUE } from "../data/content"
import { Skyline } from "../components/Emblem"

function BatSilhouette() {
  return (
    <svg viewBox="0 0 200 120" className="w-full max-w-[220px] mx-auto" aria-hidden="true">
      <path d="M100 30c-6-14-16-20-26-22l4 10c-12-6-26-6-38 0 4 2 6 6 6 10-8-2-16 0-22 6 10 2 18 8 22 16 4-4 8-6 14-6-2 8 0 16 6 22 6-6 10-14 12-22 4 6 10 10 22 10s18-4 22-10c2 8 6 16 12 22 6-6 8-14 6-22 6 0 10 2 14 6 4-8 12-14 22-16-6-6-14-8-22-6 0-4 2-8 6-10-12-6-26-6-38 0l4-10c-10 2-20 8-26 22z" fill="#0d0a0f" stroke="#EAB8C8" strokeWidth="1.2" />
      <circle cx="88" cy="38" r="3" fill="#EAB8C8" /><circle cx="112" cy="38" r="3" fill="#EAB8C8" />
    </svg>
  )
}
function CatSilhouette() {
  return (
    <svg viewBox="0 0 200 120" className="w-full max-w-[220px] mx-auto" aria-hidden="true">
      <path d="M60 20l14 22M140 20l-14 22" stroke="#EAB8C8" strokeWidth="4" strokeLinecap="round" />
      <ellipse cx="100" cy="72" rx="42" ry="34" fill="#0d0a0f" stroke="#EAB8C8" strokeWidth="1.2" />
      <path d="M78 66c4-5 10-5 14 0M108 66c4-5 10-5 14 0" stroke="#F7DCE5" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M96 80h8l-4 5z" fill="#EAB8C8" />
      <path d="M100 85c-3 4-8 4-11 1M100 85c3 4 8 4 11 1" stroke="#F7DCE5" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  )
}

export default function BatmanCatwoman() {
  return (
    <div>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
        <p className="tracking-[.35em] text-xs text-rose/80">CHAPTER 04</p>
        <h1 className="font-serif text-4xl sm:text-5xl mt-2 text-gradient">Two characters.<br />One favourite story.</h1>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-4">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass rounded-3xl p-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0912] to-[#1a0f1e] -z-10" />
          <BatSilhouette />
          <h2 className="font-serif text-3xl mt-4 text-ivory">Batman</h2>
          <p className="font-hand text-2xl text-rose">Dheena</p>
          <p className="text-sm text-blush/75 mt-3 leading-relaxed">The protector of the city. Stoic, loyal, and completely soft for one person — his Catwoman.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass rounded-3xl p-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#310E20] to-[#151116] -z-10" />
          <CatSilhouette />
          <h2 className="font-serif text-3xl mt-4 text-ivory">Catwoman</h2>
          <p className="font-hand text-2xl text-rose">Shasti</p>
          <p className="text-sm text-blush/75 mt-3 leading-relaxed">Mysterious, confident, impossible to ignore. Nine lives — and she plans to spend them all with him.</p>
        </motion.div>
      </div>

      <Skyline className="w-full h-24 mt-8 opacity-80" />

      <div className="mt-8 space-y-4 max-w-xl mx-auto">
        {DIALOGUE.map((d, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ delay: i * .06 }}
            className={`max-w-[85%] rounded-2xl px-5 py-3.5 ${d.who === "Batman" ? "ml-auto bg-burgundy/50 hairline" : "mr-auto bg-white/5 hairline"}`}>
            <p className="text-[10px] tracking-[.25em] text-rose/80">{d.who.toUpperCase()}</p>
            <p className="font-serif text-lg text-ivory mt-1">“{d.text}”</p>
          </motion.div>
        ))}
      </div>

      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-hand text-3xl text-blush text-center mt-12 leading-relaxed">
        In every universe, in every city —<br />we choose each other. ♡
      </motion.p>
    </div>
  )
}
