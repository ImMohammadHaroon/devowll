import { Link } from 'react-router-dom';
import Seo from '../components/common/Seo';

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" description="That page is not on the Devowll site." path="/404" />
      <section className="container-page pb-24 pt-36">
        <p className="label">404</p>
        <h1 className="mt-4 text-5xl tracking-[-0.05em] sm:text-7xl">This page is not here.</h1>
        <Link to="/" className="pill mt-8">
          Back home
        </Link>
      </section>
    </>
  );
}
