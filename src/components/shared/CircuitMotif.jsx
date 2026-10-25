/**
 * Decorative "synaptic grid" motif: connected nodes and branching paths.
 * Purely decorative, so it is hidden from assistive technology.
 */
export default function CircuitMotif({ className = "", accent = "#2DD4BF", secondary = "#6366F1" }) {
  return (
    <svg viewBox="0 0 480 320" fill="none" className={className} aria-hidden="true" focusable="false">
      <path
        d="M8 268 H120 L158 230 H286 L326 190 H472"
        stroke={accent}
        strokeOpacity="0.4"
        strokeWidth="1.4"
      />
      <path
        d="M8 210 H70 L112 168 H206 L248 126 H472"
        stroke={secondary}
        strokeOpacity="0.35"
        strokeWidth="1.4"
      />
      <path
        d="M40 96 H150 L190 136 H300 L340 96 H472"
        stroke={accent}
        strokeOpacity="0.22"
        strokeWidth="1.4"
        className="tf-dash"
      />
      <path d="M158 230 V286" stroke={accent} strokeOpacity="0.28" strokeWidth="1.2" />
      <path d="M248 126 V72" stroke={secondary} strokeOpacity="0.28" strokeWidth="1.2" />
      <path d="M300 136 V188" stroke={accent} strokeOpacity="0.22" strokeWidth="1.2" />

      {[
        [120, 268, "#2DD4BF"],
        [158, 230, "#38BDF8"],
        [286, 230, "#6366F1"],
        [326, 190, "#FB7185"],
        [70, 210, "#2DD4BF"],
        [206, 168, "#FBBF24"],
        [248, 126, "#6366F1"],
      ].map(([cx, cy, color], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="7" fill={color} fillOpacity="0.14" />
          <circle cx={cx} cy={cy} r="2.6" fill={color} />
        </g>
      ))}

      {[
        [300, 96],
        [190, 136],
        [340, 96],
        [150, 96],
      ].map(([cx, cy], i) => (
        <rect
          key={`sq-${i}`}
          x={cx - 3}
          y={cy - 3}
          width="6"
          height="6"
          rx="1.5"
          fill={accent}
          fillOpacity="0.5"
        />
      ))}
    </svg>
  );
}