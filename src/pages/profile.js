import React, { Component } from "react";
import { getAuth, signOut } from "firebase/auth";

function Profile() {
  
  const auth = getAuth();

  const handleLogout = (e) => {
    signOut(auth)
      .then(() => {
        //Sign-Out Successful
        console.log("successful");
        alert("You are logged out!");
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

      <section>
        <h1>My Profile</h1>

      </section>
    </div>
  );
}

export default Profile;
