import * as React from 'react';

import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
function Login(props) {
  localStorage.clear();
  const navigate = useNavigate();
  const form = useRef();
  const [input, setinput] = useState({ to_name: '', to_mail: '', message: '' });
  const sendEmail = () => {
    emailjs
      .sendForm(
        'service_2b04suh',
        'template_qbqqpen',
        form.current,
        'I6o9ghHUx3rixoIDl'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const handleinput = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };
  function generateOTP() {
    return 8757;
  }
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(input);

    const otp = generateOTP();
    localStorage.setItem('name', input.to_name);
    localStorage.setItem('email', input.to_mail);

    localStorage.setItem('otp', otp);
    localStorage.setItem('isstatus', 'otp');
    //  sendEmail();
    navigate('/otp');
  };

  return (
    <div className="loginContainer flex">
      <div className="leftSide">
        <h1 className="appTitle text-center">{props.title}</h1>
        <form
          ref={form}
          className="loginForm"
          onSubmit={handlesubmit}
          name="lquiz"
        >
          <div className="formField">
            <label>Name</label>
            <input
              type="text"
              className="formControl"
              placeholder="Your name"
              name="to_name"
              required
              autoComplete="off"
              onChange={handleinput}
            />
          </div>
          <div className="formField">
            <label>Gmail</label>
            <input
              type="email"
              className="formControl"
              placeholder="Valid Email"
              name="to_mail"
              required
              autoComplete="off"
              onChange={handleinput}
            />
          </div>
          <input
            type="hidden"
            value={generateOTP()}
            name="message"
            onChange={handleinput}
          />{' '}
          {/* <div className='formField'>
                  <label>Category</label>
                  <select className='formControl' name="subtype" onChange={handleinput}>
                    <option value="HTML">HTML</option>
                    <option value="CSS">CSS</option>
                  </select>
                 </div> */}
          <div className="text-center">
            <input type="submit" name="submit" value="Send OTP via Email" />
          </div>
        </form>
      </div>
      <div className="rightSide">
        <img
          src="https://media.istockphoto.com/id/1268465415/photo/quiz-time-concept-speech-bubble-with-pencil-on-yellow-background.jpg?s=612x612&w=0&k=20&c=ZowfYpCJeyknpWhnfyWqV1_If6aJmFUiSqqqEUBhvAg="
          alt="quizimage"
          className="quizimg"
        />
      </div>
    </div>
  );
}

export default Login;
