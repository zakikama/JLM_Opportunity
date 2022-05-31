import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/index";
import Landing from "./components/Landing/index";
import Account from './components/Landing/Login'
import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React, { Component } from "react";
import { Container } from "react-bootstrap";

function App() {
  
  return (
    <div className="App">
     {/* <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Landing/>}></Route>
          <Route path="/account" element={<Account/>}></Route>
          <Route path="/Feed" element={<Feed/>}></Route>

        </Routes>
      </Router> */}
      <Login/>
      
      
    </div>
  );
}

export default App;
