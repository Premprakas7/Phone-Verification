import React, { forwardRef } from "react";

const PinItem = forwardRef(
  ({ changeHandler, value, onBackSpaceHandle, inputBoxValue }, ref) => {
    const handleKeyUp = (e) => {
      if (e.keyCode === 8 && !e.target.value) {
        onBackSpaceHandle(e);
      } else {
        changeHandler(e);
      }
    };
    return (
      <div>
        <input type="number"
          disabled={inputBoxValue.join("").length === 6 && true}
          className={
            inputBoxValue.join("").length !== 6 ? "input-1" : "index-1, input-2"
          }
          ref={ref}
          maxLength={1}
          onKeyUp={handleKeyUp}
          value={value}
        />
      </div>
    );
  }
);

export default PinItem