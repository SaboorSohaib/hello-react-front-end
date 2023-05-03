import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Greeting from './components/greeting';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Greeting} />
    </div>
  );
}

export default App;
