import axios from "axios";

import CallToAction from "../components/callToAction/CallToAction";
import Skills from "../components/skills/Skills";
import Experience from "../components/experience/Experience";
import Education from "../components/education/Education";
import Projects from "../components/projects/Projects";

const getData = async () => {
  let res = null;
  try {
    res = await axios.get(`${process.env.MYURL}/data/projects.json`);
    if (!res?.data) res = null;
  } catch (err) {
    res = null;
  }

  return res;
};

export default async function Home() {
  const projects = await getData();

  return (
    <main className="">
      <CallToAction />
      <Skills />
      <Experience />
      <Education />
      {projects && <Projects projects={projects.data.projects} />}
    </main>
  );
}
