import skills from "../../data/Skills";

interface Props {}

const Skills: React.FC<Props> = () => {
  return (
    <div id="skills" className="w-full bg-primary3 shadow-inner">
      <div className="px-4 md:px-8 py-28 mx-auto lg:max-w-7xl grid grid-cols-2 md:grid-cols-5 justify-items-center md:gap-3 gap-16 items-center flex-wrap">
        {skills.map((skill, key) => (
          <img
            key={key}
            className="cursor-pointer transition ease-in-out delay-100 hover:-translate-y-2 hover:scale-110 duration-100"
            alt={skill}
            src={`/icons/${skill}.svg`}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
