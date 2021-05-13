import React from 'react';
import axios from 'axios';
import './App.css';

function App() {
  axios({
        method: 'get',
        url: 'http://localhost:8000/api/course',
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
