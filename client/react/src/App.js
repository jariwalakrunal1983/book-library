import React from 'react';
import './App.css';

import Books from './containers/Books';

function App() {
  return (
    <div className="App">
      <p className="DevelopedBy">This demo created by <a target="_blank" href="https://github.com/jariwalakrunal1983">Krunal Jariwala</a></p>
      <Books/>
    </div>
  );
}

export default App;