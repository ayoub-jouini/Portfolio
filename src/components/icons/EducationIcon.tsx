interface Props {}

const EducationIcon: React.FC<Props> = () => {
  return (
    <>
      <img
        className={`mr-10 md:h-full h-40 dark:hidden flex`}
        alt="educationlight"
        src="/icons/educationlight.svg"
      />
      <img
        className={`mr-10 md:h-full h-40 dark:flex hidden`}
        alt="education"
        src="/icons/education.svg"
      />
    </>
  );
};

export default EducationIcon;
