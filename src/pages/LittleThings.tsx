import { motion } from "framer-motion"
import { Smile, Camera, Bell, Heart, Sparkles, Moon, ImagePlus } from "lucide-react"
import { LITTLE_THINGS } from "../data/content"

const ICONS: Record<string, any> = { smile: Smile, camera: Camera, bell: Bell, heart: Heart, sparkles: Sparkles, moon: Moon }

export default function LittleThings() {
  return (
    <div>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
        <p className="tracking-[.35em] text-xs text-rose/80">CHAPTER 05</p>
        <h1 className="font-serif text-4xl sm:text-5xl mt-2 text-gradient">It's always the little things.</h1>
        <p className="font-hand text-2xl text-blush mt-3">Our scrapbook. Tap a card to feel it.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {LITTLE_THINGS.map((t, i) => {
          const Icon = ICONS[t.icon] ?? Heart
          return (
            <motion.article key={t.title} initial={{ opacity: 0, y: 28, rotate: i % 2 ? 1.5 : -1.5 }} whileInView={{ opacity: 1, y: 0, rotate: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: .55, delay: i * .08 }}
              whileHover={{ y: -6, rotate: i % 2 ? 1 : -1 }} className="glass rounded-3xl overflow-hidden group cursor-pointer">
              <div className="aspect-[4/3] relative bg-gradient-to-br from-wine via-burgundy/60 to-ink grid place-items-center overflow-hidden">
                {t.photo ? (
                  <img src={t.photo} alt={t.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                ) : (
                  <>
                    <Icon size={52} className="text-rose/70 group-hover:scale-110 transition" />
                    <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 text-[10px] text-blush/60 bg-ink/50 rounded-full px-2 py-1"><ImagePlus size={11} /> Add photo</span>
                  </>
                )}
                <span className="absolute top-3 left-3 text-[10px] tracking-[.25em] bg-ink/60 rounded-full px-2.5 py-1 text-rose">MEMORY {String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="p-5">
                <h2 className="font-serif text-xl text-ivory">{t.title}</h2>
                <p className="text-sm text-blush/75 mt-1.5 leading-relaxed">{t.caption}</p>
              </div>
            </motion.article>
          )
        })}
      </div>
      <p className="text-center text-xs text-blush/50 mt-8">To add real photos later: set the <code className="text-rose">photo</code> field in <code className="text-rose">src/data/content.ts</code>.</p>
    </div>
  )
}
