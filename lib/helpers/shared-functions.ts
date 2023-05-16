import { EntrySkeletonType } from 'contentful';
import { client } from '../client';

export async function getEntriesByType<T extends EntrySkeletonType>(
  type: string
) {
  return await client.getEntries<T>({
    content_type: type,
  });
}

export async function getEntryBy<T extends EntrySkeletonType>(id: string) {
  return await client.getEntry<T>(id);
}

export function dateFormatter(date: string, formatString: string) {
  const formatter = new Intl.DateTimeFormat('en-US');

  formatter.format(new Date(date));
}
