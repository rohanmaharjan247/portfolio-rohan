import { PortfolioProps } from '@/helpers/props';
import { Asset } from 'contentful';
import Image from 'next/image';

const PortfolioCard = ({ portfolio }: PortfolioProps) => {
  const portfolioImage =
    portfolio.fields.image &&
    `https:${
      (portfolio.fields.image as Asset<undefined, string>).fields.file?.url
    }`;

  return (
    <div className="card">
      {portfolioImage && (
        <div className="relative w-full h-80">
          <Image
            src={portfolioImage}
            alt={portfolio.fields.title?.toString() ?? ''}
            fill
          />
        </div>
      )}
      <h1 className="font-bold pt-4 pb-2 px-6">
        {portfolio.fields.title?.toString()}
      </h1>
      <h2 className="text-sm text-slate-300 px-6">
        {portfolio.fields.description?.toString()}
      </h2>
    </div>
  );
};

export default PortfolioCard;
