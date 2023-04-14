import React from 'react';
import logo from './logo.svg';
import './App.css';

import {getFirelord,getFirestore,setDoc } from 'firelordjs'
import {initializeApp} from 'firebase/app'

const example = getFirelord<any>(getFirestore(initializeApp({
  projectId: "any",

})),'abc')

setDoc(example.doc('abc'),{a:100})

function App() {
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
