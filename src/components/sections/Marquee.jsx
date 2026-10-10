const line = 'Design the product. Build the system. Ship the work. Devowll sits between the idea and the launch.';

export default function Marquee() {
  const copies = Array.from({ length: 8 }, () => line);
  return (
    <div className="ticker py-5" aria-hidden="true">
      <div className="ticker-track text-xl tracking-[-0.03em] text-white/80 sm:text-3xl">
        {copies.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
    </div>
  );
}
