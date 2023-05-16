import { SkillsProps } from '@/helpers/props';

const Skills = ({ skill }: SkillsProps) => {
  return (
    <div className="my-8">
      <h1 key={skill.sys.id}>{skill.fields.name.toString()}</h1>
      <div className="w-full h-1 bg-gray-400 relative my-2">
        <div
          className="absolute inset-0 bg-yellow-400"
          style={{ width: `${skill.fields.percentage.toString()}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Skills;
