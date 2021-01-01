import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from './pages/Home';
import Lessons from './pages/Lessons';

function App() {

  return (
    <div>
      {/* <Home />
      <Lessons /> */}
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/lessons" component={Lessons} />
      </Router>
    </div>
  );
}

export default App;
