import Seo from '../components/common/Seo';
import { site } from '../data/site';

const pages = {
  privacy: {
    title: 'Privacy',
    path: '/privacy',
    blocks: [
      'This site describes Devowll’s studio work. Project notes you submit, and newsletter emails, are saved in your browser on this device. They are not sent to a server by this website.',
      'The site loads Google Analytics to understand which pages are visited. That service may set cookies under Google’s own policy.',
      `To ask about a note you saved, or to reach the studio directly, email ${site.email}.`,
    ],
  },
  terms: {
    title: 'Terms',
    path: '/terms',
    blocks: [
      'The writing and design on this site belong to Devowll. You can share a link. Please don’t republish the pages as your own.',
      'Prices on the site are starting points. A project begins when both sides agree a scope in writing. That agreement, not this page, governs the work.',
      'Case studies describe the kind of systems the studio builds. They are studio examples, not claims about a public company.',
    ],
  },
};

export default function Legal({ kind }) {
  const page = pages[kind];

  return (
    <>
      <Seo title={page.title} description={page.blocks[0]} path={page.path} />
      <article className="container-page max-w-3xl pb-20 pt-32 md:pt-40">
        <p className="label">Policies</p>
        <h1 className="mt-4 text-5xl tracking-[-0.05em]">{page.title}</h1>
        <div className="mt-8 space-y-5 text-lg leading-8 text-mist">
          {page.blocks.map((block) => (
            <p key={block}>{block}</p>
          ))}
        </div>
      </article>
    </>
  );
}
