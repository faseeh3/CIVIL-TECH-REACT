import React, { useState } from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import Textform from "./Component/Textform";
import Alert from "./Component/Alert";
import About from "./Component/About";
import { Route, Routes } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#051a44";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Navbar title="CIVIL TECH" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="Container my-3">
        <Routes>
          <Route
            path="/" element={<Textform showAlert={showAlert}heading="Enter text to analyze below"mode={mode} />}/>
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
