import React from "react";
import ReactDOMServer from "react-dom/server";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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

// TODO jsx会被webpack。babel编译。之后的结果是JS，然后从此处，导出，Node拿到的就是js，不用进行处理
export function render() {
  return ReactDOMServer.renderToString(<App />)  
}
