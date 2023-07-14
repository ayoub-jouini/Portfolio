import CallToAction from "../components/callToAction/CallToAction";
import Header from "../components/header/Header";
import Skills from "../components/skills/Skills";
import Experience from "../components/experience/Experience";
import Education from "../components/education/Education";

export default function Home() {
  return (
    <main className="tracking-wider">
      <Header />
      <CallToAction />
      <Skills />
      <Experience />
      <Education />
    </main>
  );
}
