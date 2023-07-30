import * as React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Otpcheck() {
  const navigate = useNavigate();
  const [otp, setotp] = useState('');

  useEffect(() => {
    if (localStorage.getItem('isstatus') != 'otp') navigate('/');
  });
  const handleinput = (e) => {
    setotp(e.target.value);
  };
  const handlesubmitotp = (e) => {
    e.preventDefault();
    console.log(otp);
    if (otp == localStorage.getItem('otp')) {
      localStorage.setItem('isstatus', 'quizstart');
      navigate('/quiz1');
    } else {
      alert('OTP Not Valid');
    }
  };
  return (
    <div className="loginContainer ">
      <div className="otpBox">
        <h1 className="appTitle text-center">OTP</h1>
        <small className="">Your OTP send Via Email </small>

        <form className="loginForm" onSubmit={handlesubmitotp}>
          <div className="formField">
            <input
              type="number"
              className="formControl"
              name="otp"
              onChange={handleinput}
            />
          </div>
          <div className="text-center">
            <input type="submit" name="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Otpcheck;
