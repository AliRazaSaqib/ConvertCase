/** @format */

import "../navbar/navbar.css";

export default function Navbar(props) {
  return (
    <div className="navbar_wraper ">
      <nav
        className={`navbar navbar-expand-xl navbar-${props.mode} bg-${props.mode}`}
      >
        <a href="\" target="_blank" className="navbar-brand">
          Convert Text
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link waves-effect waves-light" href="#counter">
                Convert Case
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link waves-effect waves-light" href="#encode">
                Encode String
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link waves-effect waves-light" href="#decode">
                Decode String
              </a>
            </li>
          </ul>

          <ul className="scoial-icons">
            <li>
              <div
                className={`form-switch text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
              >
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={props.toogleTheme}
                />
                <label
                  className="form-check-label"
                  HtmlFor="flexSwitchCheckDefault"
                >
                  {props.mode === "light"
                    ? "Enable Dark Mode"
                    : "Enable Light Mode"}
                </label>
              </div>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ali-raza-7689901a7/">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/AliRazaSaqib">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/AliRaza55795782">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.incomebomb.com/">
                <i className="fas fa-globe"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
