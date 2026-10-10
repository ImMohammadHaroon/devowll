export default function ArtPanel({ colors = ['#14210f', '#d6ff4a', '#f2c14e'], label, className = '' }) {
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ backgroundColor: colors[0] }}>
      <div
        className="absolute -left-[10%] top-[-20%] h-[70%] w-[55%] rounded-full blur-3xl"
        style={{ background: colors[1], opacity: 0.85 }}
      />
      <div
        className="absolute bottom-[-25%] right-[-10%] h-[75%] w-[60%] rounded-full blur-3xl"
        style={{ background: colors[2], opacity: 0.75 }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.45)_78%)]" />
      <div
        className="absolute inset-0 opacity-30 mix-blend-overlay"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27140%27 height=%27140%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%27.85%27 numOctaves=%272%27/%3E%3C/filter%3E%3Crect width=%27140%27 height=%27140%27 filter=%27url(%23n)%27 opacity=%27.55%27/%3E%3C/svg%3E")',
        }}
      />
      {label ? (
        <p className="absolute left-4 top-4 font-mono text-[11px] uppercase tracking-[0.22em] text-white/80">{label}</p>
      ) : null}
    </div>
  );
}
