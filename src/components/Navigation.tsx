import { PAGES, type PageId } from "../data/content"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Navigation({ current, onGo }: { current: PageId; onGo: (p: PageId) => void }) {
  const idx = PAGES.findIndex(p => p.id === current)
  const prev = PAGES[idx - 1], next = PAGES[idx + 1]
  return (
    <nav aria-label="Chapters" className="mt-14 space-y-5">
      <div className="flex items-center justify-center gap-2" role="tablist" aria-label="Jump to chapter">
        {PAGES.map((p, i) => (
          <button key={p.id} onClick={() => onGo(p.id)} aria-label={`Chapter ${p.num}: ${p.label}`} aria-current={p.id === current ? "true" : undefined}
            className={`h-2.5 rounded-full transition-all ${p.id === current ? "w-8 bg-rose" : "w-2.5 bg-white/20 hover:bg-rose/60"}`} />
        ))}
      </div>
      <div className="flex items-center justify-between gap-3">
        {prev ? <button onClick={() => onGo(prev.id)} className="inline-flex items-center gap-1 text-sm text-blush/70 hover:text-ivory"><ChevronLeft size={16} /> {prev.label}</button> : <span />}
        <span className="text-xs tracking-[.25em] text-rose/70">{PAGES[idx].num} / 07</span>
        {next ? <button onClick={() => onGo(next.id)} className="inline-flex items-center gap-1 text-sm text-blush/70 hover:text-ivory">{next.label} <ChevronRight size={16} /></button> : <span />}
      </div>
      <div className="flex flex-wrap justify-center gap-2 pt-1">
        {PAGES.map(p => (
          <button key={p.id} onClick={() => onGo(p.id)} className={`text-xs px-3 py-1.5 rounded-full hairline transition ${p.id === current ? "bg-burgundy text-ivory" : "text-blush/60 hover:text-ivory"}`}>{p.label}</button>
        ))}
      </div>
    </nav>
  )
}
