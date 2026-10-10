import { Link } from 'react-router-dom';
import { articles } from '../../data/site';
import ArtPanel from '../visual/ArtPanel';

export default function Insights() {
  return (
    <section id="insights" className="scroll-mt-24 border-t border-white/10">
      <div className="container-page py-20 md:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="label">Insights</p>
            <h2 className="mt-4 max-w-xl text-4xl tracking-[-0.045em] sm:text-6xl">Notes on shipping the work.</h2>
          </div>
          <Link to="/insights" className="text-sm text-white/70 underline-offset-4 hover:text-cream hover:underline">
            All articles
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {articles.map((article) => (
            <article key={article.slug}>
              <Link to={`/insights/${article.slug}`} className="group block">
                <ArtPanel colors={article.colors} label={article.category} className="h-52 rounded-[1.4rem]" />
                <h3 className="mt-5 text-2xl tracking-[-0.04em] group-hover:text-white">{article.title}</h3>
                <p className="mt-3 text-sm leading-6 text-mist">{article.excerpt}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.16em] text-white/45">
                  {article.author} · {article.read}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
