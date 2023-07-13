import CallToAction from "../components/callToAction/CallToAction";
import DarkModeButton from "../components/buttons/DarkModeButton";
import Header from "../components/header/Header";
import Skills from "../components/Skills/Skills";

export default function Home() {
  return (
    <main
      className="tracking-wider	
"
    >
      <Header />
      <CallToAction />
      <Skills />
    </main>
  );
}
