import React from 'react';
import './App.css';

import Books from './containers/Books';

function App() {
  return (
    <div className="App">
      <p className="DevelopedBy">
        You are running React front end app. 
        Switch to <a href="/vue">Vue App</a> or
        <a href="/angular">Angular App</a>.  
        This demo created by <a target="_blank" href="https://github.com/jariwalakrunal1983">Krunal Jariwala</a>
      </p>
      <Books/>
    </div>
  );
}

export default App;