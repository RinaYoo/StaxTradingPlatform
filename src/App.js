import React, { Component, useState, useEffect, useContext } from "react";
import Coins from "./components/Coins";
import axios from "axios";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";

// Pages
import home from "./pages/home";
import login from "./pages/login";
import signup from "./pages/signup";
import learnAndEarn from "./pages/learnAndEarn";
import profile from "./pages/profile";
import { AuthContext } from "./context/AuthContext";
function App() {

  const [coins, setCoins] = useState([]);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoins(response.data);
        console.log(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const currentUser = useContext(AuthContext)

  const RequireAuth = ({children}) => {
    return currentUser ? (children) : <Redirect to ="/" />
  }

  console.log(currentUser)

  return (
    <div className="App">
       <Router>
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
