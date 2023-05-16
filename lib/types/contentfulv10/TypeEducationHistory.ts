import type {
  ChainModifiers,
  Entry,
  EntryCollection,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';

export interface TypeEducationHistoryFields {
  collegeName: EntryFieldTypes.Symbol;
  universityName: EntryFieldTypes.Symbol;
  degree: EntryFieldTypes.Symbol;
  startedDate: EntryFieldTypes.Date;
  currentlyStudying?: EntryFieldTypes.Boolean;
  endDate?: EntryFieldTypes.Date;
}

export type TypeEducationHistorySkeleton = EntrySkeletonType<
  TypeEducationHistoryFields,
  'educationHistory'
>;
export type TypeEducationHistory<
  Modifiers extends ChainModifiers = ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeEducationHistorySkeleton, Modifiers, Locales>;

export type TypeEducationHistoryCollection<
  Modifiers extends ChainModifiers = ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = EntryCollection<TypeEducationHistorySkeleton, Modifiers, Locales>;
