import React, { useState } from 'react';
import components from "./components";
import './App.css';
import centerImage from './Group 11.svg';
import rectangleImage from "./Rectangle 30.png";

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // 로그인 처리 로직을 작성합니다.
    console.log("click!z");
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div>
      <div className='gam'>
        <img src={centerImage} alt="Centered Image" />
      </div>
      <div className="username">
        <input type="text" value={username} placeholder="login or email" onChange={handleUsernameChange} className="usernameField" />
      </div>
      <div className='password'>
        <input type="password" value={password} placeholder="Password" onChange={handlePasswordChange} className='passwordField'/>
      </div>
      <div className='signIn'>
      <button className='signInBtn' onClick={handleLogin}></button>
      </div>
    </div>
  );
};

export default App;
