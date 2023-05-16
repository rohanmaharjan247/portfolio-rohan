import { getEntriesByType } from '@/helpers';
import {
  TypePorfolio,
  TypePorfolioCollection,
  TypePorfolioSkeleton,
} from '@/types/contentfulv10';
import { useEffect, useState } from 'react';
import { PortfolioCard, PortfolioModal } from '../ui';
import Link from 'next/link';

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState<TypePorfolioCollection>();
  const [selectedPortfolio, setSelectedPortfolio] = useState<TypePorfolio>();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const fetchPortfolio = async () => {
    const p = await getEntriesByType<TypePorfolioSkeleton>('porfolio');

    setPortfolio(p);
  };

  useEffect(() => {
    fetchPortfolio();
  }, []);

  /** Events */

  const selectPortfolio = (p: TypePorfolio) => {
    setSelectedPortfolio(p);
    setIsOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {portfolio?.items.map((p) => (
          <button
            className=""
            key={p.sys.id}
            onClick={() => selectPortfolio(p)}
          >
            <PortfolioCard portfolio={p} />
          </button>
        ))}
      </div>
      {selectedPortfolio && (
        <PortfolioModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          portfolio={selectedPortfolio}
        />
      )}
    </>
  );
};

export default Portfolio;
