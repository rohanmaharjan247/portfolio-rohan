import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';

export interface TypePersonalInfoListFields {
  title?: EntryFieldTypes.Symbol;
  content?: EntryFieldTypes.Symbol;
}

export type TypePersonalInfoListSkeleton = EntrySkeletonType<
  TypePersonalInfoListFields,
  'personalInfoList'
>;
export type TypePersonalInfoList<
  Modifiers extends ChainModifiers = ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypePersonalInfoListSkeleton, Modifiers, Locales>;
