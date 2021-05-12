import React from 'react';
// import logo from './logo.svg';
import axios from 'axios';
import './App.css';

function App() {
  axios({
    method: 'get',
    url: 'http://localhost:3000/api/course',
  })
    .then(data => {
      console.log(data);
    })
  return (
    <div className="App">
    </div>
  );
}

export default App;
