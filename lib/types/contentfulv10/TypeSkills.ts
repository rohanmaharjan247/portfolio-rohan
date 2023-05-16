import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';

export interface TypeSkillsFields {
  name: EntryFieldTypes.Symbol;
  percentage: EntryFieldTypes.Integer;
}

export type TypeSkillsSkeleton = EntrySkeletonType<TypeSkillsFields, 'skills'>;
export type TypeSkills<
  Modifiers extends ChainModifiers = ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeSkillsSkeleton, Modifiers, Locales>;
