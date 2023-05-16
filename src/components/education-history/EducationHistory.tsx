import { getEntriesByType } from '@/helpers';
import {
  TypeEducationHistoryCollection,
  TypeEducationHistorySkeleton,
} from '@/types/contentfulv10';
import { useEffect, useState } from 'react';

const EducationHistory = () => {
  const [educationHistory, setEducationHistory] =
    useState<TypeEducationHistoryCollection>();

  const fetchEducationHistory = async () => {
    const education = await getEntriesByType<TypeEducationHistorySkeleton>(
      'educationHistory'
    );

    setEducationHistory(education);
  };

  useEffect(() => {
    fetchEducationHistory();
  }, []);

  return (
    <div>
      <ul className="timeline_list">
        {educationHistory?.items.map((e) => (
          <li key={e.sys.id}>
            <h1 className="font-bold">
              {`${e.fields.degree?.toString()} - (${new Date(
                e.fields.startedDate.toString()
              ).getFullYear()} to ${
                Boolean(e.fields.currentlyStudying)
                  ? 'Present'
                  : new Date(e.fields.endDate?.toString() ?? '').getFullYear()
              })`}
            </h1>
            <h2 className="text-sm">
              {`${e.fields.collegeName.toString()} - ${e.fields.universityName?.toString()}`}
            </h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EducationHistory;
