import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';

export interface TypeExperienceFields {
  description: EntryFieldTypes.Symbol;
}

export type TypeExperienceSkeleton = EntrySkeletonType<
  TypeExperienceFields,
  'experience'
>;
export type TypeExperience<
  Modifiers extends ChainModifiers = ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeExperienceSkeleton, Modifiers, Locales>;
