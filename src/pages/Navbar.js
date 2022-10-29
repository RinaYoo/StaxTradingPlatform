import { async } from "@firebase/util";
import { signOut } from "firebase/auth";
import React, { Component } from "react";
import { auth } from "../firebase";

function Navbar() {

  const logout = async () => {
    await signOut(auth);
  }

  return (
    <div>
      <nav>
        <a href="/home"> Stax | Trading Platform </a>
        <div className="nav-item">
          <a href="/learnAndEarn">Learn&Earn</a>
          <a href="/Profile">Profile</a>
          <button onClick={logout}>Logout</button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
