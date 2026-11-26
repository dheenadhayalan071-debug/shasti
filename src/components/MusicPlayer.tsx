import { useEffect, useRef, useState } from "react"
import { Play, Pause, Volume2, VolumeX, Music } from "lucide-react"
import { CONFIG } from "../data/content"

// Persistent player — lives above the page switch so playback survives transitions.
// Uses the owner's audio file if present; falls back to a gentle WebAudio loop
// so the experience still works without a copyrighted file.
export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const ctxRef = useRef<AudioContext | null>(null)
  const timerRef = useRef<number | null>(null)
  const [playing, setPlaying] = useState(false)
  const [volume, setVolume] = useState(0.7)
  const [muted, setMuted] = useState(false)
  const [usingSynth, setUsingSynth] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => () => { stopSynth() }, [])

  function stopSynth() {
    if (timerRef.current) { window.clearInterval(timerRef.current); timerRef.current = null }
    ctxRef.current?.close().catch(() => {}); ctxRef.current = null
  }

  function startSynth() {
    const AC = window.AudioContext || (window as any).webkitAudioContext
    if (!AC) { setError(true); return }
    const ctx: AudioContext = new AC()
    ctxRef.current = ctx
    const notes = [261.63, 329.63, 392.0, 523.25, 392.0, 329.63] // C E G C' — soft loop
    let i = 0
    const playNote = () => {
      if (!ctxRef.current) return
      const osc = ctx.createOscillator(); const gain = ctx.createGain()
      osc.type = "sine"; osc.frequency.value = notes[i % notes.length]
      const v = muted ? 0 : volume * 0.12
      gain.gain.setValueAtTime(0, ctx.currentTime)
      gain.gain.linearRampToValueAtTime(v, ctx.currentTime + 0.4)
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 2.2)
      osc.connect(gain).connect(ctx.destination)
      osc.start(); osc.stop(ctx.currentTime + 2.3)
      i++
    }
    playNote()
    timerRef.current = window.setInterval(playNote, 1600)
  }

  async function toggle() {
    if (!audioRef.current) {
      audioRef.current = new Audio(CONFIG.songSrc)
      audioRef.current.loop = true
      audioRef.current.volume = volume
      audioRef.current.addEventListener("error", () => {
        if (!usingSynth) { setUsingSynth(true); startSynth() }
      })
    }
    if (playing) {
      setPlaying(false)
      if (usingSynth) stopSynth(); else audioRef.current.pause()
    } else {
      setPlaying(true); setError(false)
      if (usingSynth) { startSynth(); return }
      try { await audioRef.current.play() }
      catch { setUsingSynth(true); startSynth() }
    }
  }

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = muted ? 0 : volume
  }, [volume, muted])

  return (
    <div className="fixed bottom-4 right-4 z-50 glass rounded-full pl-2 pr-3 py-2 flex items-center gap-2 max-w-[calc(100vw-2rem)]" role="region" aria-label="Music player">
      <button onClick={toggle} aria-label={playing ? "Pause music" : "Play music"} className="w-10 h-10 shrink-0 rounded-full bg-burgundy hover:bg-wine transition grid place-items-center text-ivory">
        {playing ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
      </button>
      <div className="flex items-end gap-[3px] h-5 w-6" aria-hidden="true">
        {[0, 1, 2, 3].map(i => (
          <span key={i} className={`w-[4px] rounded-full bg-rose ${playing ? "eq-bar" : ""}`} style={{ height: "100%", animationDelay: `${i * 0.18}s`, opacity: playing ? 1 : .35 }} />
        ))}
      </div>
      <span className="hidden sm:block text-xs text-blush/80 whitespace-nowrap">{CONFIG.songTitle}{usingSynth ? " ♡" : ""}</span>
      <button onClick={() => setMuted(m => !m)} aria-label={muted ? "Unmute" : "Mute"} className="text-blush/80 hover:text-ivory p-1">
        {muted || volume === 0 ? <VolumeX size={16} /> : <Volume2 size={16} />}
      </button>
      <input type="range" min={0} max={1} step={0.05} value={muted ? 0 : volume} onChange={e => { setVolume(+e.target.value); setMuted(false) }} aria-label="Volume" className="w-16 sm:w-20 accent-[#EAB8C8]" />
      {error && <span className="text-[10px] text-blush/60 hidden md:block">Add audio to /public/audio/</span>}
      {!error && !usingSynth && <Music size={0} className="hidden" />}
    </div>
  )
}
