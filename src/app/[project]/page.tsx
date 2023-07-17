import axios from "axios";

import ProjectCarousel from "../../components/projectCarousel/ProjectCarousel";

const getData = async () => {
  let res;
  try {
    res = await axios.get(`${process.env.URL}/data/Projects.json`);
  } catch (err) {
    console.log(err);
  }

  return res?.data.projects;
};

export default async function Project({ params }: { params: any }) {
  const project = await getData();

  const stack: string[] = project[Number(params.project)].stack.split(",");

  return (
    <main className="bg-primary2 py-14">
      <div className="px-4 md:px-8 mx-auto lg:max-w-7xl flex flex-col items-center">
        <h1 className="text-secondary font-semibold md:font-bold text-xl md:text-3xl text-center">
          {project[Number(params.project)].title}
        </h1>
        <p className="md:text-xl text-sm w-10/12 text-justify my-14">
          {project[Number(params.project)].description}
        </p>
        <ProjectCarousel images={project[Number(params.project)].images} />
        <div className="w-full flex flex-col my-10 md:grid md:grid-cols-2 md:gap-10">
          <div className="shadow-2xl p-10 rounded-[25px] md:rounded-[37px]">
            <div className="">
              <h4 className="text-lg md:text-2xl font-semibold my-3">Stack</h4>
              <div className="flex flex-wrap">
                {stack.map((stk, key) => (
                  <p
                    key={key}
                    className="md:text-xl text-sm border-2 border-secondary rounded-[25px] py-1 px-5 bg-primary1 my-3 mr-3"
                  >
                    {stk}
                  </p>
                ))}
              </div>
            </div>
            <div className="">
              <h4 className="text-lg md:text-2xl font-semibold my-3">
                Organisation
              </h4>
              <div className="flex flex-wrap">
                <p className="md:text-xl text-sm border-2 border-secondary rounded-[25px] py-1 px-5 bg-primary1 my-3 mr-5">
                  {project[Number(params.project)].organisation}
                </p>
              </div>
            </div>
          </div>
          <div className="shadow-2xl p-10 rounded-[25px] md:rounded-[37px]">
            <div className="">
              <h4 className="text-lg md:text-2xl font-semibold my-3">
                My Role
              </h4>
              <div className="flex flex-wrap">
                <p className="md:text-xl text-sm border-2 border-secondary rounded-[25px] py-1 px-5 bg-primary1 my-3 mr-5">
                  {project[Number(params.project)].role}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
