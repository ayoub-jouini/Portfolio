import EducationIcon from "../icons/EducationIcon";

interface Props {}

const Education: React.FC<Props> = () => {
  return (
    <div
      id="education"
      className="w-full bg-white2 dark:bg-primary3 shadow-inner py-14"
    >
      <h2 className="mb-8 md:mb-16 text-center font-semibold text-2xl md:text-4xl text-primary1 dark:text-white1">
        Education
      </h2>
      <div className="px-4 md:px-8 mx-auto lg:max-w-7xl grid grid-rows-2 md:grid-cols-2 justify-items-center md:justify-items-start gap-10 md:gap-8">
      <div className="flex">
          <EducationIcon />
          <div className="flex flex-col justify-between">
            <div className="border-2 dark:border-secondary border-tertiary rounded-[24px] h-10 w-32 flex items-center justify-center dark:text-secondary text-tertiary text-base">
              <p>2023-Present</p>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-primary1 dark:text-white1">
              Software Engineering
            </h3>
            <h4 className="text-base md:text-2xl text-primary1 dark:text-white1">
              SESAME Higher School of Applied Sciences and Management
            </h4>
          </div>
        </div>
        <div className="flex">
          <EducationIcon />
          <div className="flex flex-col justify-between">
            <div className="border-2 dark:border-secondary border-tertiary rounded-[24px] h-10 w-32 flex items-center justify-center dark:text-secondary text-tertiary text-base">
              <p>2020-2023</p>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-primary1 dark:text-white1">
              IT And Multimedia
            </h3>
            <h4 className="text-base md:text-2xl text-primary1 dark:text-white1">
              Higher Institute of Multimedia Arts of Manouba (ISAMM)
            </h4>
          </div>
        </div>
        <div className="flex">
          <EducationIcon />
          <div className="flex flex-col justify-between">
            <div className="border-2 dark:border-secondary border-tertiary rounded-[24px] h-10 w-32 flex items-center justify-center dark:text-secondary text-tertiary text-base">
              <p>2019-2020</p>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-primary1 dark:text-white1">
              Baccalaureate Of Computer Science
            </h3>
            <h4 className="text-base md:text-2xl text-primary1 dark:text-white1">
              Hached Farhat High School, Rades
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
