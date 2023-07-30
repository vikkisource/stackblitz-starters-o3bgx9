import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './App.css';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import Login from './login';
import Quiz from './quiz';
import Otpcheck from './otpcheck';

import Quiz1 from './quiz1';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login title="Quiz App" />}></Route>
     
        <Route path='/otp' element={<Otpcheck  />} />
        
        <Route path='quiz' element={<Quiz />} />
        <Route path='quiz1' element={<Quiz1 />} />
      </Routes>
    </div>
  );
}

export default App;
