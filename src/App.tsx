import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestComponent from "./components/TestComponent/TestComponent";
import Project from "./components/Project/Project";

const App: React.FC = () => {
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
      <TestComponent />
      <Project message="Hello World" />
    </div>
  );
}

export default App;
