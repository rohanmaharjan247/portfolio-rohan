import { HeadTitle, Portfolio } from '@/components';

const PortfolioPage = () => {
  return (
    <section id="portfolio" className="bg-white my-8 py-4 px-6">
      <HeadTitle title="Portfolio" />
      <div>
        <h1 className="page-headers">Portfolio</h1>
        <Portfolio />
      </div>
    </section>
  );
};

export default PortfolioPage;
