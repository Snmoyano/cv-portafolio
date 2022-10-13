import "./App.css";
import Header from "./components/Header";
import CardInfo from "./components/CardInfo";
import ListProject from "./components/ListProject";
import NavBar from "./components/NavBar";
import NavInfo from "./components/navInfo";
import About from "./components/About";
import { useEffect, useState } from "react";
import ListCertificates from "./components/ListCertificates";
import { Route, Routes } from "react-router-dom";
import Preload from "./components/Preload";

function App() {
  const [show, setShow] = useState(2);
  const handleShow = (num) => {
    setShow(num);
  };

  useEffect(() => {}, [show]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Preload />} />
        <Route
          path="/portafolio"
          element={
            <>
              <Header />
              <div className="general__info">
                <CardInfo />
                <NavInfo />
              </div>
              <div className="general__content">
                <NavBar handleShow={handleShow} />
                {show === 1 ? (
                  <NavInfo show={show} />
                ) : show === 2 ? (
                  <ListProject />
                ) : show === 3 ? (
                  <ListCertificates />
                ) : (
                  <About />
                )}
              </div>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
