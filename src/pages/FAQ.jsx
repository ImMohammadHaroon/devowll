import Seo from '../components/common/Seo';
import FaqList from '../components/sections/FaqList';

export default function FAQ() {
  return (
    <>
      <Seo title="FAQ" description="Answers about timelines, ownership, pricing, and how Devowll uses automation." path="/faq" />
      <div className="pt-16">
        <FaqList />
      </div>
    </>
  );
}
