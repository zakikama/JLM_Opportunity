import logo from './logo.svg';
import './App.css';
import Header from'./components/Header/index';
import Landing from'./components/Landing/index';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component }  from 'react';
function App() {
  return (
    

    
    <div className="App">
      <Header/>
     <Landing/>
    </div>
  );
}

export default App;
