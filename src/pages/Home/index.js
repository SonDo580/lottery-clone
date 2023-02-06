import { useMediaQuery } from "react-responsive";
import Banner from "../../components/Banner";
import { Screen } from "../../style/screen";
import Contact from "./components/Contact";
import Feature from "./components/Feature";
import Process from "./components/Process";
import Intro from "./components/Intro";

function Home() {
  const toMobileScreen = useMediaQuery({
    query: `(max-width: ${Screen.sm})`,
  });

  return (
    <div>
      <Banner />
      <Process />
      <Intro />
      <Feature />
      {toMobileScreen ? <Contact /> : null}
    </div>
  );
}

export default Home;
