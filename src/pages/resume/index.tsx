import { EducationHistory, HeadTitle, WorkExperience } from '@/components';
import {
  faBriefcase,
  faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ResumePage = () => {
  return (
    <>
      <HeadTitle title="Rohan Maharjan" />
      <section id="resume" className="mt-8 px-6 py-4 bg-white">
        <h1 className="page-headers">Resume</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="my-4">
            <div className="flex items-center gap-6">
              <div className="primary-color p-4 rounded-full">
                <FontAwesomeIcon icon={faBriefcase} size="xl" />
              </div>
              <h1 className="font-bold text-lg">Work Experience</h1>
            </div>
            <WorkExperience />
          </div>
          <div className="my-4">
            <div className="flex items-center gap-6">
              <div className="primary-color p-4 rounded-full">
                <FontAwesomeIcon icon={faGraduationCap} size="xl" />
              </div>
              <h1 className="font-bold text-lg">Education</h1>
            </div>
            <EducationHistory />
          </div>
        </div>
      </section>
    </>
  );
};

export default ResumePage;
