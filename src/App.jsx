import "./App.css";
import Header from "./components/Header";
import CardInfo from "./components/CardInfo";
import ListProject from "./components/ListProject";
import NavBar from "./components/NavBar";
import NavInfo from "./components/NavInfo";
import About from "./components/About";
import { useEffect, useState } from "react";
import ListCertificates from "./components/ListCertificates";
import { Route, Routes } from "react-router-dom";
import Preload from "./components/Preload";
import { useThemeContext } from "./context/ThemeContext";
import ReactSwitch from "react-switch";
import AnimatedCursor from "react-animated-cursor";
import { useTranslation } from "react-i18next";
import spain from "../public/img/spain.svg";
import united from "../public/img/united.svg";

function App() {
  const [t, i18n] = useTranslation("global");
  const { contextTheme, setContextTheme } = useThemeContext();
  const [checked, setChecked] = useState(false);
  const handleSwitch = (nextChecked) => {
    setContextTheme((state) => (state === "Light" ? "Dark" : "Light"));
    setChecked(nextChecked);
  };
  const [show, setShow] = useState(2);
  const handleShow = (num) => {
    setShow(num);
  };

  useEffect(() => {}, [show]);

  return (
    <div className="App" id={contextTheme}>
      <div className="container__swtich">
        <ReactSwitch
          onChange={handleSwitch}
          checked={checked}
          handleDiameter={20}
          offColor="#1b2b4b"
          onColor="#0e306e"
          offHandleColor="#1b2b4b"
          onHandleColor="#0e306e"
          height={30}
          width={55}
          borderRadius={2}
          uncheckedIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 13,
                color: "white",
                paddingRight: 1,
              }}
            >
              OFF
            </div>
          }
          checkedIcon={
            <svg viewBox="0 0 10 10" height="100%" width="100%" fill="yellow">
              <circle r={3} cx={5} cy={5} />
            </svg>
          }
          uncheckedHandleIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "90%",
                fontSize: 16,
              }}
            >
              🌑
            </div>
          }
          checkedHandleIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 13,
                color: "orange",
                paddingRight: 1,
              }}
            >
              OFF
            </div>
          }
          className="react-switch"
          id="small-radius-switch"
        />
        <div className="lg">
          <img
            className="lg__img"
            src={spain}
            alt=""
            onClick={() => i18n.changeLanguage("es")}
          />
          <img
            className="lg__img"
            src={united}
            alt=""
            onClick={() => i18n.changeLanguage("en")}
          />
          {/* <button onClick={() => i18n.changeLanguage("es")}></button>
          <button onClick={() => i18n.changeLanguage("en")}>EN</button> */}
        </div>
      </div>
      <AnimatedCursor
        innerSize={8}
        outerSize={25}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        hasBlendMode={true}
        outerStyle={{
          border: "3px solid var(--cursor-color)",
        }}
        innerStyle={{
          backgroundColor: "var(--cursor-color)",
        }}
      />

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
                  <About t={t} />
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
