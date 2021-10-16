/** @format */

import React, { useState } from "react";
import "../EncodeSection/encode.css";

export default function Encode(props) {
  const [text, setText] = useState("");
  const handleSmallTextGenerator = (event) => {
    setText(event.target.value);
  };

  const handleEncoding = () => {
    let checkEmpty = document.getElementById("set_input").value;
    if (checkEmpty === "") {
      props.showAlert("First enter some string", "Warning:");
    } else {
      const res = btoa(text);
      document.getElementById("get_input").innerHTML = res;
    }
  };
  const handleClear = () => {
    document.getElementById("get_input").innerHTML = "";
    document.getElementById("set_input").value = "";
    setText("");
  };
  return (
    <div
      className={`text-${props.mode === "light" ? "dark" : "muted"} addborder`}
      id="encode"
    >
      <h3>
        Enter <small>String</small> ToEncode
      </h3>

      <p>
        With the help of this application you can easily encode your given
        string, this will help to secure you information and you can also decode
        your string again.
      </p>
      <div className="holdsDivs">
        <div className="enterForEncode">
          <textarea
            className="form-control"
            rows="8"
            id="set_input"
            placeholder="Type copy or paste your string here to encode"
            onChange={handleSmallTextGenerator}
          ></textarea>

          <div className="encodeButtons">
            <button onClick={handleEncoding}>Encode</button>
            <button onClick={handleClear}>Clear</button>
          </div>
        </div>
        <div className="result">
          <textarea
            className="form-control"
            id="get_input"
            rows="8"
            readOnly
          ></textarea>
        </div>
      </div>

      <div className="mt-4 word_counter_show">
        <p>
          Character Count:
          <span className="charater-count">{text.length}</span>
          <span className="seperator">|</span>
        </p>
        <p>
          Word Count:
          <span className="word-count">{text.split(" ").length - 1}</span>
          <span className="seperator">|</span>
        </p>
        <p>
          Line Count:
          <span className="word-count">{text.split("\n").length - 1}</span>
        </p>
      </div>
    </div>
  );
}
