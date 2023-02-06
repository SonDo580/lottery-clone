import { useMediaQuery } from "react-responsive";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Chat from "./components/Chat";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Play from "./pages/Play";
import Result from "./pages/Result";
import { Screen } from "./style/screen";

function App() {
  const toLargeScreen = useMediaQuery({
    query: `(max-width: ${Screen.lg})`,
  });

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        {toLargeScreen ? null : <NavBar />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/play" element={<Play />} />
          <Route path="/result" element={<Result />} />
        </Routes>

        <Footer />
        <Chat />
      </div>
    </BrowserRouter>
  );
}

export default App;
