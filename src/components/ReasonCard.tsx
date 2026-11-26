import { motion } from "framer-motion"
import { Heart } from "lucide-react"
import type { Reason } from "../data/content"

export default function ReasonCard({ reason, index, open, onToggle }: { reason: Reason; index: number; open: boolean; onToggle: () => void }) {
  return (
    <motion.button
      layout initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: .45, delay: (index % 6) * 0.05 }}
      onClick={onToggle} aria-expanded={open}
      className="glass rounded-2xl p-5 text-left w-full hover:border-rose/50 transition group"
    >
      <div className="flex items-start gap-3">
        <span className={`shrink-0 w-8 h-8 rounded-full grid place-items-center text-xs font-medium ${open ? "bg-rose text-wine" : "bg-burgundy/60 text-blush"}`}>{index + 1}</span>
        <div className="min-w-0">
          <p className="font-serif text-lg leading-snug text-ivory group-hover:text-blush transition">{reason.title}</p>
          {open ? (
            <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="text-sm text-blush/80 mt-2 leading-relaxed">{reason.detail}</motion.p>
          ) : (
            <p className="text-xs text-rose/60 mt-1">Tap to open ♡</p>
          )}
        </div>
        <Heart size={16} className={`ml-auto shrink-0 mt-1 transition ${open ? "fill-rose text-rose" : "text-rose/40"}`} />
      </div>
    </motion.button>
  )
}
