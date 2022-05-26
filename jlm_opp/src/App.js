import logo from './logo.svg';
import './App.css';
import Header from'./components/Header/index';
import Landing from'./components/Landing/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'

import React, { Component }  from 'react';
import { Container } from 'react-bootstrap';
function App() {
  return (
    

    
    <div className="App">
      <Header/>
      <Container>
     <Landing/>
     </Container>
    </div>
  );
}

export default App;
