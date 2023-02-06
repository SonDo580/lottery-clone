import { useMediaQuery } from "react-responsive";
import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { Screen } from "./style/screen";

function App() {
  const isLargeScreen = useMediaQuery({
    query: `(max-width: ${Screen.lg})`,
  });

  return (
    <div className="app">
      <Header />
      {isLargeScreen ? null : <NavBar />}

      <Footer />
    </div>
  );
}

export default App;
