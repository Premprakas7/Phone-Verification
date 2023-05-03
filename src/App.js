import Pin from './Components/Pin';
import './App.css';
import { useState } from 'react';

function App() {
  const [otp,setOtp]=useState("")
  return (
    <div className="App">
      <h1>Phone Verification</h1>
        <Pin length={6}
      OtpOnChange={(value)=>{setOtp(value)}}/>
      <h4>the value of the otp is {otp}</h4>
     
    </div>
  );
}

export default App;
