import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import AccessGate from "./components/AccessGate"
import Intro from "./components/Intro"
import MusicPlayer from "./components/MusicPlayer"
import FloatingHearts from "./components/FloatingHearts"
import Navigation from "./components/Navigation"
import Home from "./pages/Home"
import LoveLetter from "./pages/LoveLetter"
import Reasons from "./pages/Reasons"
import Memory from "./pages/Memory"
import BatmanCatwoman from "./pages/BatmanCatwoman"
import LittleThings from "./pages/LittleThings"
import FinalQuestion from "./pages/FinalQuestion"
import Ending from "./pages/Ending"
import type { PageId } from "./data/content"

type Stage = "gate" | "intro" | "main"

export default function App() {
  const [stage, setStage] = useState<Stage>(() => sessionStorage.getItem("shasti-unlocked") ? "intro" : "gate")
  const [page, setPage] = useState<PageId | "home">("home")

  const go = (p: PageId | "home") => {
    setPage(p)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  useEffect(() => { document.title = "SHASTI.EXE ♡ For Shasti, from Dheena" }, [])

  return (
    <div className="min-h-dvh relative">
      <FloatingHearts />
      <AnimatePresence mode="wait">
        {stage === "gate" && <AccessGate key="gate" onUnlock={() => setStage("intro")} />}
        {stage === "intro" && <Intro key="intro" onEnter={() => setStage("main")} />}
        {stage === "main" && (
          <motion.main key="main" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pt-10 pb-32">
            <AnimatePresence mode="wait">
              <motion.div key={page} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: .45 }}>
                {page === "home" && <Home onGo={go} />}
                {page === "letter" && <LoveLetter />}
                {page === "reasons" && <Reasons />}
                {page === "memory" && <Memory />}
                {page === "gotham" && <BatmanCatwoman />}
                {page === "little" && <LittleThings />}
                {page === "question" && <FinalQuestion onFinish={() => go("ending")} />}
                {page === "ending" && <Ending onReplay={() => go("letter")} />}
              </motion.div>
            </AnimatePresence>
            {page !== "home" && <Navigation current={page} onGo={go} />}
            <button onClick={() => go("home")} className="block mx-auto mt-6 text-xs text-blush/50 hover:text-blush">← Back to the beginning</button>
            <footer className="text-center mt-10 text-[11px] text-blush/40">
              SHASTI.EXE · Made with ♡ by Dheena, for Shasti · One week down, forever to go
            </footer>
          </motion.main>
        )}
      </AnimatePresence>
      {stage === "main" && <MusicPlayer />}
    </div>
  )
}
