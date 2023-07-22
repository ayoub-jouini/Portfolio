import Button from "../buttons/Button";

interface Props {}

const CallToAction: React.FC<Props> = () => {
  return (
    <div
      id="aboutme"
      className="px-4 md:px-8 mx-auto lg:max-w-7xl md:grid flex flex-col md:gap-5 md:grid-cols-2 items-center overflow-hidden"
    >
      <div className="z-10">
        <h1 className="font-medium text-lg md:text-2xl dark:text-white text-primary1">
          MOHAMED AYOUB JOUINI
        </h1>
        <h2 className="font-semibold text-2xl md:text-5xl text-tertiary dark:text-secondary">
          SOFTWARE DEVELOPER
        </h2>
        <p className="text-sm md:text-xl my-8 md:my-16">
          A software developer with a strong inclination for workable solutions.
          Possessing a solid understanding of diverse programming languages and
          technologies. Placing a strong priority on producing results of a high
          standard while cooperating productively with cross-functional teams.
        </p>
        <div className="flex flex-col md:flex-row">
          <div className="">
            <a href="#projects">
              <Button title="See Project" />
            </a>
          </div>
          <div className="md:mx-5 mt-5 md:mt-0">
            <a href="#contact">
              <Button title="Contact Me" style="outlined" />
            </a>
          </div>
        </div>
      </div>
      <img
        alt="mohamed-ayoub-jouini"
        src="/images/me.png"
        className="h-64 md:h-full object-cover -mt-36 ml-40  md:m-0 hidden dark:flex"
      />
      <img
        alt="mohamed-ayoub-jouini"
        src="/images/melight.png"
        className="h-64 md:h-full object-cover -mt-36 ml-40  md:m-0 dark:hidden flex"
      />
    </div>
  );
};

export default CallToAction;
