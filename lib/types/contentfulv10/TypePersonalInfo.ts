import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';
import type { TypePersonalInfoListSkeleton } from './TypePersonalInfoList';

export interface TypePersonalInfoFields {
  fullName: EntryFieldTypes.Symbol;
  jobTitle: EntryFieldTypes.Symbol;
  subList?: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<TypePersonalInfoListSkeleton>
  >;
  profileImage: EntryFieldTypes.AssetLink;
}

export type TypePersonalInfoSkeleton = EntrySkeletonType<
  TypePersonalInfoFields,
  'personalInfo'
>;
export type TypePersonalInfo<
  Modifiers extends ChainModifiers = ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypePersonalInfoSkeleton, Modifiers, Locales>;
