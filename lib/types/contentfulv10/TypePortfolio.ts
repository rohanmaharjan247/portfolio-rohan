import type {
  ChainModifiers,
  Entry,
  EntryCollection,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';

export interface TypePorfolioFields {
  title: EntryFieldTypes.Symbol;
  description: EntryFieldTypes.Symbol;
  projectUrl: EntryFieldTypes.Symbol;
  githubUrl: EntryFieldTypes.Symbol;
  image?: EntryFieldTypes.AssetLink;
}

export type TypePorfolioSkeleton = EntrySkeletonType<
  TypePorfolioFields,
  'porfolio'
>;
export type TypePorfolio<
  Modifiers extends ChainModifiers = ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypePorfolioSkeleton, Modifiers, Locales>;
export type TypePorfolioCollection<
  Modifiers extends ChainModifiers = ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = EntryCollection<TypePorfolioSkeleton, Modifiers, Locales>;
