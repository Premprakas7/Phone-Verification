import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import  PinItem  from "./PinItem";

const Pin = ({ length, setOtpHandler }) => {
  const inputRef = useRef({});
  const [inputBoxLen] = useState(new Array(length).fill(1));
  const [inputBoxValue, setInputBoxValue] = useState(
    new Array(length).fill("")
  );
  

  const handleChange = (e, index) => {
    inputBoxValue[index] = e.target.value;
    setInputBoxValue(inputBoxValue);
    if (e.target.value.length > 0 && index < length - 1) {
      inputRef.current[index + 1].focus();
    }
    setOtpHandler(inputBoxValue.join(""));
  };

  const handleBackSpace = (e, index) => {
    if (index > 0) {
      inputRef.current[index - 1].focus();
    }
    inputBoxValue[index] = e.target.value;
    setInputBoxValue(inputBoxValue);
    setOtpHandler(inputBoxValue.join(""));
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const data = e.clipboardData
      .getData("text")
      .split("")
      .filter((item, index) => index < length);
    data.forEach((value, index) => {
      inputBoxValue[index] = value;
      inputRef.current[index].value = value;
      if (index < length - 1) {
        inputRef.current[index + 1].focus();
      }
    });
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", margin: "4rem" }}
      onPaste={handlePaste}
    >
      {inputBoxLen.map((item, index) => (
        <PinItem
          key={index}
          changeHandler={(e) => handleChange(e, index)}
          onBackSpaceHandle={(e) => handleBackSpace(e, index)}
          ref={(element) => {
            inputRef.current[index] = element;
          }}
          inputBoxValue={inputBoxValue}
        />
      ))}
    </div>
  );
};

Pin.propTypes = {
  length: PropTypes.number.isRequired,
  pinInput: PropTypes.string,
  setPin: PropTypes.func,
};

export default Pin