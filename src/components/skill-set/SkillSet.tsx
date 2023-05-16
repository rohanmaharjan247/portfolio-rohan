import { getEntriesByType } from '@/helpers';
import {
  TypeSkillSetCollection,
  TypeSkillSetSkeleton,
  TypeSkills,
} from '@/types/contentfulv10';
import { useEffect, useState } from 'react';
import { Skills } from '../ui';

const SkillSet = () => {
  const [skillSet, setSkillSet] = useState<TypeSkillSetCollection>();

  const fetchSkillSet = async () => {
    const skills = await getEntriesByType<TypeSkillSetSkeleton>('skillSet');

    setSkillSet(skills);
  };

  useEffect(() => {
    fetchSkillSet();
  }, []);

  return (
    <section id="skills" className="bg-white px-6 py-8">
      <div className="grid grid-cols-2 gap-4  bg-white">
        {skillSet?.items.map((skill) => (
          <div key={skill.sys.id}>
            <h1 className="font-bold">{skill.fields.title.toString()}</h1>
            {(skill.fields.skills as TypeSkills[])?.map((s) => (
              <Skills skill={s} key={s.sys.id} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillSet;
