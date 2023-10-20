
import "./App.css";
import Nav from "./components/Nav";
import Film from "./components/Film";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Detail from "./components/Detail";
import News from "./components/News";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Film />
                <Footer />
              </>
            }
          />
          <Route
            path="/detail/:id"
            element={
              <>
                <Detail />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/contact"
            element={
              <>
                <Contact />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/about"
            element={
              <>
                <About />
              </>
            }
          ></Route>
          <Route
            path="/news"
            element={
              <>
                <News />
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
