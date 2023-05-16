import type {
  ChainModifiers,
  Entry,
  EntryCollection,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';
import type { TypeSkillsSkeleton } from './TypeSkills';

export interface TypeSkillSetFields {
  title: EntryFieldTypes.Symbol;
  skills?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeSkillsSkeleton>>;
}

export type TypeSkillSetSkeleton = EntrySkeletonType<
  TypeSkillSetFields,
  'skillSet'
>;
export type TypeSkillSet<
  Modifiers extends ChainModifiers = ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeSkillSetSkeleton, Modifiers, Locales>;

export type TypeSkillSetCollection<
  Modifiers extends ChainModifiers = ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = EntryCollection<TypeSkillSetSkeleton, Modifiers, Locales>;
