import React, { useState } from "react";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
const Auth = () => {
  return (
    <div className='Form-Container'>
      <div className='Form-Wrapper'>
        <span className="logo">E-MABS</span>
        <span className="title">2-Factor Authentication</span>
        <form>
          <input type="number" placeholder="Enter phone number" />
          <button>Back</button>
          <button>Next</button>
        </form>
      </div>
    </div>
  )
}

export default Auth
