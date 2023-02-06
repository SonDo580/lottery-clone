import { useMediaQuery } from "react-responsive";
import "./App.scss";
import Chat from "./components/Chat";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { Screen } from "./style/screen";

function App() {
  const toLargeScreen = useMediaQuery({
    query: `(max-width: ${Screen.lg})`,
  });

  return (
    <div className="app">
      <Header />
      {toLargeScreen ? null : <NavBar />}

      <Footer />
      <Chat />
    </div>
  );
}

export default App;
