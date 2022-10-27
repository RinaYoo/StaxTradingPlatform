import React, { Component, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";



// Pages
import home from "./pages/home";
import login from "./pages/login";
import signup from "./pages/signup";
import learnAndEarn from "./pages/learnAndEarn";
import profile from "./pages/profile";
import Navbar from "./pages/Navbar";

function App() {

  return (
    <div className="App">
       <Router>
         <Navbar />
         <Switch>
           <Route exact path="/home" component={home} />
           <Route exact path="/" component={login} />
           <Route exact path="/signup" component={signup} />
           <Route exact path="/profile" component={profile} />
           <Route exact path="/learnAndEarn" component={learnAndEarn} />
         </Switch>
       </Router>
    </div>
  );
}

export default App;
