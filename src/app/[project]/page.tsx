import axios from "axios";

import ProjectCarousel from "../../components/projectCarousel/ProjectCarousel";

const getData = async (nb: number) => {
  let res;
  try {
    res = await axios.get(`${process.env.MYURL}/data/Projects.json`);
  } catch (err) {
    console.log(err);
  }

  return res?.data.projects[nb] || null;
};

export default async function Project({ params }: { params: any }) {
  const project = await getData(Number(params.project));
  return (
    <>
      {project && (
        <main className="bg-white3 dark:bg-primary2 py-14">
          <div className="px-4 md:px-8 mx-auto lg:max-w-7xl flex flex-col items-center">
            <h1 className="text-tertiary dark:text-secondary font-semibold md:font-bold text-xl md:text-3xl text-center">
              {project.title}
            </h1>
            <p className="md:text-xl text-sm md:w-10/12 text-justify my-7 md:my-14 text-primary1 dark:text-white1">
              {project.description}
            </p>
            <ProjectCarousel images={project.images} />
            <div className="w-full flex flex-col my-10 md:grid md:grid-cols-2 md:gap-10">
              <div className="shadow-2xl p-10 rounded-[25px] md:rounded-[37px]">
                <div className="">
                  <h4 className="text-lg md:text-2xl font-semibold my-3 text-primary1 dark:text-white1">
                    Stack
                  </h4>
                  <div className="flex flex-wrap">
                    {project.stack.map((stk: string, key: any) => (
                      <p
                        key={key}
                        className="md:text-xl text-sm border-2 border-tertiary dark:border-secondary rounded-[25px] py-1 px-5 bg-white2 dark:bg-primary1 my-3 mr-3 text-primary1 dark:text-white1"
                      >
                        {stk}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="">
                  <h4 className="text-lg md:text-2xl font-semibold my-3 text-primary1 dark:text-white1">
                    Organisation
                  </h4>
                  <div className="flex flex-wrap">
                    <p className="md:text-xl text-sm border-2 border-tertiary dark:border-secondary rounded-[25px] py-1 px-5 bg-white2 dark:bg-primary1 my-3 mr-5 text-primary1 dark:text-white1">
                      {project.organisation}
                    </p>
                  </div>
                </div>
              </div>
              <div className="shadow-2xl p-10 rounded-[25px] md:rounded-[37px]">
                <div className="">
                  <h4 className="text-lg md:text-2xl font-semibold my-3 text-primary1 dark:text-white1">
                    My Role
                  </h4>
                  <div className="flex flex-wrap">
                    <p className="md:text-xl text-sm border-2 border-tertiary dark:border-secondary rounded-[25px] py-1 px-5 bg-white2 dark:bg-primary1 my-3 mr-5 text-primary1 dark:text-white1">
                      {project.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
}
