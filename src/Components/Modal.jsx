import React, { useState } from 'react'
import Pin from './Pin';
import "../App.css"

const Modal = () => {
    const [modal, setModal]=useState(false);
    const [otp, setOtp]=useState()

    const toggleModal=()=>{
        setModal(!modal)
    }

  return (
    <div>
        <button onClick={toggleModal} className='verify'>
            Verify Number
        </button>

        {modal &&
        <div className="modal">
            <div className='modal-content'>
                <h1>Phone Verification</h1>
              <Pin
                 length={6}
            setOtpHandler={(value) => {
            setOtp(value);
            }}
             />
            <h4>the value of the otp is {otp}</h4>

            <button onClick={toggleModal}>
              CLOSE
            </button>
            </div>

        </div> 
        }
      
    </div>
  )
}

export default Modal
