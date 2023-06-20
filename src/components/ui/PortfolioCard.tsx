import { PortfolioProps } from "@/helpers/props";
import { Asset } from "contentful";
import LazyImage from "./LazyImage";
import { useMemo } from "react";

const PortfolioCard = ({ portfolio }: PortfolioProps) => {
  const portfolioImage = useMemo(() => {
    return (
      portfolio.fields.image &&
      `https:${
        (portfolio.fields.image as Asset<undefined, string>).fields.file?.url
      }`
    );
  }, [portfolio]);

  return (
    <div className="card">
      {portfolioImage && (
        <LazyImage
          src={portfolioImage}
          alt={portfolio.fields.title.toString()}
          classes="aspect-video"
        />
      )}
      <div className="py-4">
        <h1 className="font-bold pt-4 pb-2 px-6">
          {portfolio.fields.title?.toString()}
        </h1>
        <h2 className="text-sm text-slate-300 px-6">
          {portfolio.fields.description?.toString()}
        </h2>
      </div>
    </div>
  );
};

export default PortfolioCard;
