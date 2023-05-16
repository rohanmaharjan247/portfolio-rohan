import type {
  ChainModifiers,
  Entry,
  EntryCollection,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';

export interface TypeMyServicesFields {
  title: EntryFieldTypes.Symbol;
  description: EntryFieldTypes.Symbol;
  iconName: EntryFieldTypes.Symbol;
}

export type TypeMyServicesSkeleton = EntrySkeletonType<
  TypeMyServicesFields,
  'myServices'
>;
export type TypeMyServices<
  Modifiers extends ChainModifiers = ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeMyServicesSkeleton, Modifiers, Locales>;
export type TypeMyServicesCollection<
  Modifiers extends ChainModifiers = ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = EntryCollection<TypeMyServicesSkeleton, Modifiers, Locales>;
