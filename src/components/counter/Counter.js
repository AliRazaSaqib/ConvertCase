/** @format */

import React, { useState, useEffect, useRef } from "react";
import "../counter/Counter.css";

export default function Counter(props) {
  const [text, setText] = useState("");
  const ref = useRef();
  const [clickOutside, setclickOutside] = useState(false);

  // it will detect the click outside the component
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (clickOutside && ref.current && !ref.current.contains(e.target)) {
        setclickOutside(false);
      }
    };
    document.addEventListener("click", checkIfClickedOutside);
    document.getElementById("successMessage").classList.add("d-none");
    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [clickOutside]);

  //Convert Text to UpperCase
  const handleUpperCase = () => {
    if (text.length === 0) {
      props.showAlert("First enter some text", "Warning:");
    } else {
      let convertUpper = text.toLocaleUpperCase();
      setText(convertUpper);
    }
  };

  //Convert Text to LowerCase
  const handleLowerCase = () => {
    if (text.length === 0) {
      props.showAlert("First enter some text", "Warning:");
    } else {
      let convertLower = text.toLocaleLowerCase();
      setText(convertLower);
    }
  };

  //handleTitleCase text
  const handleTitleCase = () => {
    try {
      if (text.length === 0) {
        props.showAlert("First enter some text", "Warning:");
      } else {
        let titleCase = text
          .split(" ")
          .map(
            (str) =>
              str[0].toLocaleUpperCase() + str.substr(1).toLocaleLowerCase()
          )
          .join(" ");

        setText(titleCase);
      }
    } catch (exception) {
      props.showAlert("Only text accepted", "Warning:");
    }
  };

  //handleSentenceCase text
  const handleSentenceCase = () => {
    if (text.length === 0) {
      props.showAlert("First enter some text", "Warning:");
    } else {
      let sentenceCase = text
        .toLowerCase()
        .replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function (c) {
          return c.toUpperCase();
        });

      setText(sentenceCase);
    }
  };

  //Show text in invserCase
  let clicked = false;
  const handleInverseCase = () => {
    if (text.length === 0) {
      props.showAlert("First enter some text", "Warning:");
    } else if (clicked) {
      handleUpperCase();
      clicked = false;
    } else {
      handleLowerCase();
      clicked = true;
    }
  };

  //Reset textArea
  const handleClearText = () => {
    setText("");
  };

  //Copy text to clipboard
  const handleClipBoard = () => {
    let copyText = document.getElementById("word_counter");
    copyText.select();
    copyText.setSelectionRange(0, 2000);
    navigator.clipboard.writeText(copyText.value);
    if (text.length === 0) {
      props.showAlert("There is no text to copy", "Warning:");
    } else {
      document.getElementById("successMessage").classList.remove("d-none");
    }
  };

  //handleAlternateCase after enter text
  const handleAlternateCase = () => {
    if (text.length === 0) {
      props.showAlert("First enter some text", "Warning:");
    } else {
      let invString = (s) =>
        s.replace(/[a-z]/gi, (c) => c[`to${(s = !s) ? "Low" : "Upp"}erCase`]());
      setText(invString(text));
    }
  };

  const handleExtraSpaces = () => {
    if (text.length === 0) {
      props.showAlert("First enter some text", "Warning:");
    } else {
      let removeSpaces = text.split(/[ ]+/);
      setText(removeSpaces.join(" "));
    }
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div
      ref={ref}
      className={` text-${
        props.mode === "light" ? "dark" : "muted"
      }  counterMainDiv`}
      id="counter"
    >
      <h3>
        Enter <small>Text</small> ForConversion
      </h3>

      <p>
        This application will helps you convert your text in upperCase,
        lowerCase, titleCase and some other options are also available.
      </p>
      <div
        className="counter-main-div"
        onClick={() => setclickOutside((oldState) => !oldState)}
      >
        <textarea
          className="form-control"
          id="word_counter"
          rows="8"
          value={text}
          onChange={handleOnChange}
          placeholder="Type copy or paste your content here"
        ></textarea>
      </div>
      <div className="show_message d-none mt-2" id="successMessage">
        Text Copy to Clickboard
      </div>

      <div className="mt-3 button_design">
        <button onClick={handleUpperCase}>ConvertToUpperCase</button>
        <button onClick={handleLowerCase}>ConvertToLowerCase</button>
        <button onClick={handleTitleCase}>TitleCase</button>
        <button onClick={handleSentenceCase}>SentenceCase</button>
        <button onClick={handleInverseCase}>InverCase</button>
        <button onClick={handleClearText}>ClearText</button>
        <button onClick={handleAlternateCase}>AlternateCase</button>
        <button onClick={handleExtraSpaces}>RemoveExtraSpaces</button>
        <button onClick={handleClipBoard}>ClearToClipBoard</button>
      </div>
      <div className="mt-4 word_counter_show">
        <p>
          Character Count:
          <span className="charater-count">{text.length}</span>
          <span className="seperator">|</span>
        </p>
        <p>
          Word Count:
          <span className="word-count">{text.split(/[^\s]+/).length - 1}</span>
          <span className="seperator">|</span>
        </p>
        <p>
          Line Count:
          <span className="word-count">{text.split("\n").length - 1}</span>
          <span className="seperator">|</span>
        </p>
        <p>
          Time Spend To Read Text:
          <span className="word-count">
            {text.length > 0 ? 0.008 * text.split(" ").length : "0.0"}{" "}
            <span>Minutes</span>
          </span>
        </p>
      </div>
      <div
        className={`text_preview mt-4 text-${
          props.mode === "light" ? "dark" : "danger"
        }`}
      >
        <h3>Content Preview</h3>
        <p>
          {text.length > 0 ? text : "Enter some text in textares for preview"}
        </p>
      </div>
    </div>
  );
}
