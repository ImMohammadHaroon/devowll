import Seo from '../components/common/Seo';
import Button from '../components/common/Button';

export default function NotFound() {
  return (
    <section className="bg-slate-50">
      <Seo title="Page Not Found" description="The page you requested could not be found on the Devowll website." path="/404" />
      <div className="container-page flex min-h-[70vh] items-center justify-center py-20 text-center">
        <div className="max-w-xl">
          <p className="text-7xl font-bold tracking-tight text-primary sm:text-8xl">404</p>
          <h1 className="mt-6 text-3xl font-bold text-dark sm:text-5xl">Page Not Found</h1>
          <p className="mt-4 text-lg leading-8 text-muted">The page you are looking for does not exist or may have been moved.</p>
          <div className="mt-8 flex justify-center">
            <Button to="/" className="rounded-lg px-6 py-3">
              Go Back Home
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}