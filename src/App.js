import React, { useContext } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";



// Pages
import home from "./pages/home";
import login from "./pages/login";
import signup from "./pages/signup";
import learnAndEarn from "./pages/learnAndEarn";
import profile from "./pages/profile";
import Navbar from "./pages/Navbar";
import { AuthContext } from "./context/AuthContext";

function App() {

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
