import Seo from '../components/common/Seo';
import Insights from '../components/sections/Insights';

export default function InsightsPage() {
  return (
    <>
      <Seo
        title="Insights"
        description="Notes from Devowll on launch sites, design systems, and automation that earns its place."
        path="/insights"
      />
      <div className="pt-16">
        <Insights />
      </div>
    </>
  );
}
