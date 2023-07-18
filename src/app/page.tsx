import axios from "axios";

import CallToAction from "../components/callToAction/CallToAction";
import Skills from "../components/skills/Skills";
import Experience from "../components/experience/Experience";
import Education from "../components/education/Education";
import Projects from "../components/projects/Projects";

const getData = async () => {
  let res;
  try {
    res = await axios.get(`${process.env.MYURL}/data/Projects.json`);
  } catch (err) {
    console.log(err);
  }

  return res?.data.projects;
};

export default async function Home() {
  const projects = await getData();

  return (
    <main className="">
      <CallToAction />
      <Skills />
      <Experience />
      <Education />
      <Projects projects={projects} />
    </main>
  );
}
