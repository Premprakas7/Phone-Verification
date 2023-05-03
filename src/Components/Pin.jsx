import React, { useRef, useState } from 'react'
import  PropTypes  from 'prop-types'

const Pin = ({length, OtpOnChange}) => {
  const inputRef=useRef([]);
  const [inputBoxValue, setInputBoxValue]=useState(new Array(length).fill(""));


  const handleChange=(e, index)=>{
    inputBoxValue[index]=e.target.value;
    setInputBoxValue(inputBoxValue)
    if(index<length-1){
      inputRef.current[index+1].focus();
    }
    console.log(inputBoxValue);
    OtpOnChange(inputBoxValue.join(""))
  }

  const handlePaste=(e)=>{
    e.preventDefault();
    const data=e.clipboardData.getData('Text')
    .split("")
    .filter((item,index)=>index<length);
    data.forEach((value,index)=>{
      inputBoxValue[index]=value;
      inputRef.current[index].value=value;
      if(index<length-1){
        inputRef.current[index+1].focus();
      }
    })
  }

  return (
    <div onPaste={handlePaste}>
      {new Array(length).fill(1).map((item, index)=>{
        return <input type='number'
         ref={(element)=>{ inputRef.current[index]=element;}}
         key={index}
        maxLength={1}
         onChange={(e)=>{handleChange(e, index)}}
    
          />
      })}
    </div>
  )
}

Pin.propTypes={
    length:PropTypes.number.isRequired,
    onChange:PropTypes.func
}
export default Pin
