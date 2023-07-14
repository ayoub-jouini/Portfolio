import projects from "../../data/Projects";

interface Props {}

const Projects: React.FC<Props> = () => {
  return (
    <div className="px-4 md:px-8 py-14 mx-auto lg:max-w-7xl ">
      <h2 className="mb-16 text-center font-semibold text-4xl">Projects</h2>
      <div className="">
        {projects.map((project, key) =>
          project.id % 2 === 0 ? (
            <div key={key} className="my-16 grid grid-cols-2 gap-3 ">
              <div
                style={{ backgroundImage: `url(/images/${project.images[0]})` }}
                className="bg-cover bg-center rounded-[33px] h-96 w-11/12"
              />
              <div className="flex flex-col justify-between ">
                <h3 className="cursor-pointer hover:text-white text-secondary font-bold text-2xl my-2">
                  {project.title}
                </h3>
                <p className="text-xl text-justify my-2">
                  {project.description}
                </p>
                <p className="text-l my-2">Stack: {project.stack}</p>
                <p className="cursor-pointer text-l text-secondary hover:text-white self-end my-2">
                  See more
                </p>
                <img
                  className="cursor-pointer h-5 self-end"
                  alt=""
                  src="/icons/arrow.svg"
                />
              </div>
            </div>
          ) : (
            <div key={key} className="my-16 grid grid-cols-2 gap-3 ">
              <div className="flex flex-col justify-between ">
                <h3 className="cursor-pointer hover:text-white text-secondary font-bold text-2xl my-2">
                  {project.title}
                </h3>
                <p className="text-xl text-justify my-2">
                  {project.description}
                </p>
                <p className="text-l my-2">Stack: {project.stack}</p>
                <p className="cursor-pointer text-l text-secondary hover:text-white self-end my-2">
                  See more
                </p>
                <img
                  className="cursor-pointer h-5 self-end"
                  alt=""
                  src="/icons/arrow.svg"
                />
              </div>
              <div
                style={{ backgroundImage: `url(/images/${project.images[0]})` }}
                className="bg-cover bg-center rounded-[33px] h-96 w-11/12 justify-self-end"
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Projects;
