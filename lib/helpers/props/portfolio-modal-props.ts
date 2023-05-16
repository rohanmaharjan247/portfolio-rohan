import { TypePorfolio } from '@/types/contentfulv10';

export type PortfolioModalProps = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  portfolio: TypePorfolio;
};
