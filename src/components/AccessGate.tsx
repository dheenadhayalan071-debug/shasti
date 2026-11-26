import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Lock, Heart } from "lucide-react"
import { CONFIG } from "../data/content"
import Emblem from "./Emblem"

const ERROR_LINES = [
  "Hmm, that's not it, babe. Try again ♡",
  "Nope! Hint: it's three little words…",
  "The Bat-signal says wrong password. Try again!",
  "So close! (Not really. But try again.)",
]

export default function AccessGate({ onUnlock }: { onUnlock: () => void }) {
  const [value, setValue] = useState("")
  const [error, setError] = useState("")
  const [attempts, setAttempts] = useState(0)
  const [unlocked, setUnlocked] = useState(false)

  function submit(e: React.FormEvent) {
    e.preventDefault()
    const guess = value.trim().toLowerCase().replace(/\s+/g, " ")
    if (guess === CONFIG.secretPhrase) {
      setUnlocked(true)
      sessionStorage.setItem("shasti-unlocked", "1")
      setTimeout(onUnlock, 1100)
    } else {
      setError(ERROR_LINES[attempts % ERROR_LINES.length])
      setAttempts(a => a + 1)
      setValue("")
    }
  }

  return (
    <motion.div exit={{ opacity: 0, scale: 1.06 }} className="min-h-dvh grid place-items-center px-4 py-10 relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,#310E20_0%,#151116_65%)]" />
      <motion.div
        initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}
        className={`glass rounded-3xl p-8 sm:p-10 w-full max-w-md text-center relative overflow-hidden ${unlocked ? "ring-2 ring-rose" : ""}`}
      >
        <div className="flex justify-center mb-4 animate-floaty"><Emblem size={76} /></div>
        <p className="tracking-[.35em] text-xs text-rose/80">SHASTI.EXE</p>
        <h1 className="font-serif text-3xl sm:text-4xl mt-2 text-gradient">ACCESS RESTRICTED</h1>
        <p className="font-hand text-2xl text-blush mt-2">Only one person belongs here.</p>
        <form onSubmit={submit} className="mt-7 space-y-4">
          <label htmlFor="secret" className="sr-only">Secret phrase</label>
          <div className="relative">
            <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-rose/70" />
            <input
              id="secret" type="text" value={value} onChange={e => { setValue(e.target.value); setError("") }}
              placeholder="Enter the secret phrase..." autoComplete="off"
              className="w-full bg-ink/60 hairline rounded-full pl-11 pr-4 py-3.5 text-ivory placeholder:text-blush/40 focus:border-rose outline-none"
            />
          </div>
          <AnimatePresence mode="wait">
            {error && (
              <motion.p key={error} initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-rose text-sm" role="alert">{error}</motion.p>
            )}
          </AnimatePresence>
          <motion.button whileTap={{ scale: .97 }} type="submit" className="w-full py-3.5 rounded-full bg-burgundy hover:bg-wine transition text-ivory font-medium tracking-wide flex items-center justify-center gap-2">
            {unlocked ? <><Heart size={18} className="fill-rose text-rose" /> Welcome in, Shasti Babe</> : "Unlock ♡"}
          </motion.button>
        </form>
        <p className="text-[11px] text-blush/40 mt-5">A playful little gate — just for you. (Hint: three words.)</p>
      </motion.div>
    </motion.div>
  )
}
