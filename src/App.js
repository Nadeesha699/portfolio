import Home from "./pages/home";
import "../src/css/index.css";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Footers from "./components/footer";
import AboutTwo from "./pages/aboutTwo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LanguagePrograss from "./components/languagePrograss";
import ServiceHome from "./components/home/Servicehome";
import ContactHome from "./components/home/ContactHome";
import PortfolioHome from "./components/home/PortFolioHome";
import AboutHome from "./components/home/AboutHome";

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <LanguagePrograss />
                <AboutTwo />
                <Portfolio />
                <Footers />
              </>
            }
          ></Route>
          <Route
            path="/portfolio"
            element={
              <>
                <PortfolioHome />
                <Portfolio />
                <Footers />
              </>
            }
          ></Route>
          <Route
            path="/service"
            element={
              <>
                <ServiceHome />
                <AboutTwo />
                <Footers />
              </>
            }
          ></Route>
          <Route
            path="/about"
            element={
              <>
                <AboutHome />
                <About />
                <Footers />
              </>
            }
          ></Route>
          <Route
            path="/contact"
            element={
              <>
                <ContactHome />
                <Footers />
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
