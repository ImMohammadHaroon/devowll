import { Link, useParams } from 'react-router-dom';
import Seo from '../components/common/Seo';
import ArtPanel from '../components/visual/ArtPanel';
import { getArticle } from '../data/site';
import NotFound from './NotFound';

export default function Article() {
  const { slug } = useParams();
  const article = getArticle(slug);

  if (!article) return <NotFound />;

  return (
    <>
      <Seo title={article.title} description={article.excerpt} path={`/insights/${article.slug}`} />
      <article className="container-page pb-20 pt-32 md:pt-40">
        <Link to="/insights" className="label">
          ← Insights
        </Link>
        <p className="label mt-8">{article.category}</p>
        <h1 className="mt-4 max-w-3xl text-4xl tracking-[-0.05em] sm:text-6xl">{article.title}</h1>
        <p className="mt-4 text-sm text-white/50">
          {article.author} · {article.read}
        </p>
        <ArtPanel colors={article.colors} className="mt-10 h-72 rounded-[1.6rem]" />
        <div className="mt-10 max-w-2xl space-y-6 text-lg leading-8 text-mist">
          {article.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
    </>
  );
}
