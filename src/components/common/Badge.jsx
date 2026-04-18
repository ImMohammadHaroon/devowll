export default function Badge({ children, className = '' }) {
  return <span className={`inline-flex items-center rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-primary ${className}`}>{children}</span>;
}