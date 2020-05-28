import React from 'react';

import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Home from "./components/Home"

function App() {
  return (
    <div className="App">
  <BrowserRouter>
  {/* <Navbar/> */}
  <Route exact path="/" component={Home} /> 
  </BrowserRouter>
    </div>
  );
}

export default App;
