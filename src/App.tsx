import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from './firebase';

function App() {

  useEffect(() => {
    const message = firebase.messaging()
    message.requestPermission()!.then(() => {
        return message.getToken()
      })
      .then(data => {
        console.log("token", data)
      })
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
