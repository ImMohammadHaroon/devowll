export default function LoadingSpinner({ label = 'Loading page...' }) {
  return (
    <div className="container-page flex min-h-[60vh] items-center justify-center py-20" role="status" aria-live="polite">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-violet-200 border-t-primary" />
        <p className="text-sm font-medium text-muted">{label}</p>
      </div>
    </div>
  );
}