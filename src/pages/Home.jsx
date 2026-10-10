import Seo from '../components/common/Seo';
import Capabilities from '../components/sections/Capabilities';
import Experiences from '../components/sections/Experiences';
import FaqList from '../components/sections/FaqList';
import Hero from '../components/sections/Hero';
import Insights from '../components/sections/Insights';
import Marquee from '../components/sections/Marquee';
import NewsStrip from '../components/sections/NewsStrip';
import Pricing from '../components/sections/Pricing';
import Process from '../components/sections/Process';
import Proof from '../components/sections/Proof';
import Spotlight from '../components/sections/Spotlight';
import Statement from '../components/sections/Statement';
import Team from '../components/sections/Team';
import Vision from '../components/sections/Vision';
import Works from '../components/sections/Works';
import { site } from '../data/site';

export default function Home() {
  return (
    <>
      <Seo title="Devowll — Scale your ideas" description={site.description} path="/" />
      <Hero />
      <Proof />
      <Marquee />
      <Works />
      <Capabilities />
      <Vision />
      <Experiences />
      <NewsStrip />
      <Spotlight />
      <Process />
      <Statement />
      <Team />
      <Pricing />
      <NewsStrip />
      <FaqList compact />
      <Insights />
    </>
  );
}
