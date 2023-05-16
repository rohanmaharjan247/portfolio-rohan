import { getEntriesByType } from '@/helpers';
import {
  TypeExperience,
  TypeWorkExperienceCollection,
  TypeWorkExperienceSkeleton,
} from '@/types/contentfulv10';
import { useEffect, useState } from 'react';
import styles from './WorkExperience.module.css';

const WorkExperience = () => {
  const [workExperience, setworkExperience] =
    useState<TypeWorkExperienceCollection>();

  const fetchResume = async () => {
    const experience = await getEntriesByType<TypeWorkExperienceSkeleton>(
      'workExperience'
    );

    setworkExperience(experience);
  };

  useEffect(() => {
    fetchResume();
  }, []);

  return (
    <div>
      <ul className="timeline_list">
        {workExperience?.items.map((e) => (
          <li key={e.sys.id}>
            <h1 className="font-bold">{e.fields.title?.toString()}</h1>
            <h2 className="text-sm">
              {`${e.fields.company?.toString()} (${new Date(
                e.fields.joinedDate.toString()
              ).getFullYear()} - ${
                Boolean(e.fields.currentlyWorking)
                  ? 'Present'
                  : new Date(e.fields.endDate?.toString() ?? '').getFullYear()
              })`}
            </h2>
            <ul className="list-disc pl-8 pt-4">
              {(e.fields.experience as TypeExperience[]).map((exp) => (
                <li key={exp.sys.id}>{exp.fields.description.toString()}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkExperience;
