import React, { Component } from "react";


export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <a href="/home"> Stax | Trading Platform </a>
          <div className="nav-item">
            <a href="/learnAndEarn">Learn&Earn</a>
            <a href="/Profile">Profile</a>
            <a href="/">Logout</a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
