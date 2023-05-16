import { HeadTitle, MyServices } from '@/components';
import SkillSet from '@/components/skill-set/SkillSet';

export default function Home() {
  return (
    <>
      <HeadTitle title="Rohan Maharjan" />
      <main>
        <MyServices />
        <SkillSet />
      </main>
    </>
  );
}
