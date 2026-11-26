// Original Batman × Catwoman-inspired emblem — no copyrighted artwork.
export default function Emblem({ size = 72 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" role="img" aria-label="Bat and cat emblem">
      <defs>
        <linearGradient id="emg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#EAB8C8" /><stop offset="100%" stopColor="#641D36" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="56" fill="none" stroke="url(#emg)" strokeWidth="1.5" opacity=".7" />
      <circle cx="60" cy="60" r="48" fill="none" stroke="#EAB8C8" strokeWidth=".6" opacity=".35" />
      {/* bat silhouette */}
      <path d="M60 52c-3-6-8-9-13-10l2 5c-6-3-13-3-19 0 2 1 3 3 3 5-4-1-8 0-11 3 5 1 9 4 11 8 2-2 4-3 7-3-1 4 0 8 3 11 3-3 5-7 6-11 2 3 5 5 11 5s9-2 11-5c1 4 3 8 6 11 3-3 4-7 3-11 3 0 5 1 7 3 2-4 6-7 11-8-3-3-7-4-11-3 0-2 1-4 3-5-6-3-13-3-19 0l2-5c-5 1-10 4-13 10z" fill="#FFF8F4" opacity=".95" />
      {/* cat ears + heart */}
      <path d="M38 78l4-10 7 6M82 78l-4-10-7 6" stroke="#EAB8C8" strokeWidth="2.4" fill="none" strokeLinecap="round" />
      <path d="M60 92c-6-4.5-10-7.8-10-12a5.4 5.4 0 0 1 10-2.2A5.4 5.4 0 0 1 70 80c0 4.2-4 7.5-10 12z" fill="#EAB8C8" />
    </svg>
  )
}

export function Skyline({ className = "" }: { className?: string }) {
  const buildings = [0, 28, 52, 84, 110, 138, 168, 196, 224, 252, 280, 308, 336, 364, 392, 420, 448, 476, 504, 532, 560, 588, 616, 644, 672, 700, 728, 756, 784, 812, 840, 868, 896, 924, 952, 980]
  return (
    <svg viewBox="0 0 1000 160" preserveAspectRatio="none" className={className} aria-hidden="true">
      {buildings.map((x, i) => {
        const h = 40 + ((i * 37) % 90)
        return <rect key={i} x={x} y={160 - h} width={22} height={h} fill="#0d0a0f" />
      })}
      {buildings.filter((_, i) => i % 3 === 0).map((x, i) => (
        <circle key={`w${i}`} cx={x + 11} cy={118 - ((i * 23) % 60)} r="2" fill="#F7DCE5" opacity=".55" />
      ))}
    </svg>
  )
}

export function Moon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <circle cx="50" cy="50" r="34" fill="#FFF8F4" opacity=".92" />
      <circle cx="38" cy="42" r="30" fill="#151116" />
      <circle cx="62" cy="60" r="4" fill="#EAB8C8" opacity=".25" />
      <circle cx="70" cy="38" r="2.5" fill="#EAB8C8" opacity=".3" />
    </svg>
  )
}
