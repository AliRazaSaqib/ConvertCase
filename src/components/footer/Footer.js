/** @format */

import React from "react";
import "../footer/footer.css";

export default function Footer(props) {
  return (
    <>
      <footer
        className={`page-footer font-small unique-color-${props.mode}`}
        style={{ backgroundColor: "#E0E0E0" }}
      >
        <div className="container">
          <div className="footer-naivation">
            <ul>
              <li>
                <a
                  href="#counter"
                  className={` text-${
                    props.mode === "light" ? "dark" : "light"
                  }`}
                >
                  ConvertCase
                </a>
              </li>

              <li>
                <a
                  href="#encode"
                  className={` text-${
                    props.mode === "light" ? "dark" : "light"
                  }`}
                >
                  EncodeString
                </a>
              </li>

              <li>
                <a
                  href="#decode"
                  className={` text-${
                    props.mode === "light" ? "dark" : "light"
                  }`}
                >
                  DecodeString
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-social-icon">
            <div className="mb-5 flex-center">
              <a
                className="fb-ic"
                href="https://web.facebook.com/profile.php?id=100006145513818"
              >
                <i
                  className={`fab fa-facebook-f fa-lg text-${
                    props.mode === "light" ? "dark" : "light"
                  }  fa-2x`}
                ></i>
              </a>

              <a className="tw-ic" href="https://twitter.com/AliRaza55795782">
                <i
                  className={`fab fa-twitter fa-lg  text-${
                    props.mode === "light" ? "dark" : "light"
                  } fa-2x`}
                ></i>
              </a>

              <a
                className="li-ic"
                href="https://www.linkedin.com/in/ali-raza-7689901a7/"
              >
                <i
                  className={`fab fa-linkedin fa-lg  text-${
                    props.mode === "light" ? "dark" : "light"
                  }  fa-2x`}
                ></i>
              </a>
              <a className="pin-ic" href="https://github.com/AliRazaSaqib">
                <i
                  className={`fab fa-github fa-lg  text-${
                    props.mode === "light" ? "dark" : "light"
                  }  fa-2x`}
                ></i>
              </a>
            </div>
          </div>
        </div>

        <div
          className={`footer-copyright text-center text-${
            props.mode === "light" ? "dark" : "light"
          } py-3 `}
        >
          © 2021 Allright Reserved:
          <a
            href="https://mdbootstrap.com/education/bootstrap/"
            className={`text-${props.mode === "light" ? "dark" : "light"}`}
          >
            AliRaza
          </a>
        </div>
      </footer>
    </>
  );
}
