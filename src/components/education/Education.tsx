interface Props {}

const Education: React.FC<Props> = () => {
  return (
    <div className="w-full bg-primary3 shadow-inner py-14">
      <h2 className="mb-16 text-center font-semibold text-4xl">Education</h2>
      <div className="px-4 md:px-8 mx-auto lg:max-w-7xl grid grid-cols-2 justify-items-center gap-5">
        <div className="flex">
          <img className="mr-10" alt="education" src="/icons/education.svg" />
          <div className="flex flex-col justify-between">
            <div className="border-2 border-secondary rounded-[24px] h-10 w-32 flex items-center justify-center text-secondary text-base">
              <p>2020-2023</p>
            </div>
            <h3 className="text-2xl font-semibold">IT And Multimedia</h3>
            <h4 className="text-2xl">
              Higher Institute of Multimedia Arts of Manouba (ISAMM)
            </h4>
          </div>
        </div>
        <div className="flex">
          <img className="mr-10" alt="education" src="/icons/education.svg" />
          <div className="flex flex-col justify-between">
            <div className="border-2 border-secondary rounded-[24px] h-10 w-32 flex items-center justify-center text-secondary text-base">
              <p>2019-2020</p>
            </div>
            <h3 className="text-2xl font-semibold">
              Baccalaureate Of Computer Science
            </h3>
            <h4 className="text-2xl">Hached Farhat High School, Rades</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;