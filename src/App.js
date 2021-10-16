/** @format */
import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Counter from "./components/counter/Counter";
import Footer from "./components/footer/Footer";
import "./App.css";
import Alert from "./components/alert/Alert";
import Encode from "./components/EncodeSection/Encode";
import Decode from "./components/EncodeSection/Decode";
import DeveloperProfile from "./components/developer/DeveloperProfile";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [show, setShow] = useState(false);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toogleTheme = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enabled", "Success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "Success");
    }
  };

  const handleClick = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
  return (
    <div className="main-wraper">
      <Navbar mode={mode} toogleTheme={toogleTheme} />
      <Alert alert={alert} />
      <div className="container center-section">
        <Counter showAlert={showAlert} alert={alert} />
      </div>
      <div className="container encode_string center-section">
        <Encode showAlert={showAlert} mode={mode} />
      </div>

      <div className="container encode_string center-section">
        <Decode showAlert={showAlert} mode={mode} />
      </div>
      <div className="footer-section">
        <Footer mode={mode} click={handleClick} />
      </div>
      <DeveloperProfile show={show} close={handleClose} />
    </div>
  );
}

export default App;
