import type {
  ChainModifiers,
  Entry,
  EntryCollection,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';
import type { TypeExperienceSkeleton } from './TypeExperience';

export interface TypeWorkExperienceFields {
  title: EntryFieldTypes.Symbol;
  company: EntryFieldTypes.Symbol;
  joinedDate: EntryFieldTypes.Date;
  endDate?: EntryFieldTypes.Date;
  currentlyWorking?: EntryFieldTypes.Boolean;
  experience: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<TypeExperienceSkeleton>
  >;
}

export type TypeWorkExperienceSkeleton = EntrySkeletonType<
  TypeWorkExperienceFields,
  'workExperience'
>;
export type TypeWorkExperience<
  Modifiers extends ChainModifiers = ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeWorkExperienceSkeleton, Modifiers, Locales>;
export type TypeWorkExperienceCollection<
  Modifiers extends ChainModifiers = ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = EntryCollection<TypeWorkExperienceSkeleton, Modifiers, Locales>;
