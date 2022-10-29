import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const auth = getAuth();

  const handleLogout = (e) => {
    signOut(auth)
      .then(() => {
        //Sign-Out Successful
        console.log("successful");
      })
      .catch((error) => {
        console.log("failed");
      });
  };


  return (
    <div>
      <nav>
        <a href="/home"> Stax | Trading Platform </a>
        <div className="nav-item">
          <a href="/learnAndEarn">Learn&Earn</a>
          <a href="/Profile">Profile</a>
          <a href="/" onClick={handleLogout}>
            Logout
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
