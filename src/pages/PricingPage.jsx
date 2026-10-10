import Seo from '../components/common/Seo';
import Pricing from '../components/sections/Pricing';

export default function PricingPage() {
  return (
    <>
      <Seo
        title="Pricing"
        description="Devowll studio partnerships, from a focused website to a dedicated product team."
        path="/pricing"
      />
      <div className="pt-16">
        <Pricing />
      </div>
    </>
  );
}
