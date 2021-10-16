/** @format */

import React, { useState } from "react";
import "../EncodeSection/encode.css";

export default function Decode(props) {
  const [text, setText] = useState("");
  const handleSmallTextGenerator = (event) => {
    setText(event.target.value);
  };
  const handleDecoding = () => {
    if (text.length === 0) {
      props.showAlert("First enter some string", "Warning:");
    } else {
      const res = atob(text);

      document.getElementById("get_input1").innerHTML = res;
    }
  };
  const handleClear = () => {
    document.getElementById("get_input1").innerHTML = "";
    document.getElementById("set_input1").value = "";
    setText("");
  };
  return (
    <div
      className={`text-${props.mode === "light" ? "dark" : "muted"} addborder`}
      id="decode"
    >
      <h3>
        Enter <small>String</small> ToDecode
      </h3>

      <p>
        Know you can enter your encoded string to again get your original
        string.
      </p>
      <div className="holdsDivs">
        <div className="enterForEncode">
          <textarea
            className="form-control"
            rows="8"
            id="set_input1"
            placeholder="Type copy or paste your string here to decode"
            onChange={handleSmallTextGenerator}
          ></textarea>

          <div className="encodeButtons">
            <button onClick={handleDecoding}>Decode</button>
            <button onClick={handleClear}>Clear</button>
          </div>
        </div>
        <div className="result">
          <textarea
            className="form-control"
            id="get_input1"
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
